"use client"

import { Cart, PaymentSession } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import { OnApproveActions, OnApproveData } from "@paypal/paypal-js"
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { placeOrder } from "@modules/checkout/actions"
import React, { useCallback, useState } from "react"
import ErrorMessage from "../error-message"
import Spinner from "@modules/common/icons/spinner"

import useRazorpay, { RazorpayOptions } from "react-razorpay"

type PaymentButtonProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">,
  'data-testid': string
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ cart, 'data-testid': dataTestId }) => {
  const notReady =
    !cart ||
    !cart.shipping_address ||
    !cart.billing_address ||
    !cart.email ||
    cart.shipping_methods.length < 1
      ? true
      : false

  const paymentSession = cart.payment_session as PaymentSession


  switch (paymentSession.provider_id) {
    case "razorpay":
      return <RazorpayPaymentButton notReady={notReady} cart={cart} session={paymentSession} data-testid={dataTestId} />
    // case "manual":
    //   return <ManualTestPaymentButton notReady={notReady} data-testid={dataTestId} />
    // case "paypal":
    //   return <PayPalPaymentButton notReady={notReady} cart={cart} data-testid={dataTestId} />
    // default:
    //   return <Button disabled>Select a payment method</Button>
  }
}




const RazorpayPaymentButton = ({
  session,
  notReady,
  cart
}: {
  session: PaymentSession
  notReady: boolean
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}) => {
  const [disabled, setDisabled] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
  const [Razorpay] = useRazorpay();

  const orderData = session.data as Record<string, string>
  const onPaymentCompleted = async () => {
    await placeOrder().catch(() => {
      setErrorMessage("An error occurred, please try again.")
      setSubmitting(false)
    })
  }


  const handlePayment = useCallback(() => {
    const options: RazorpayOptions = {
      callback_url: `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/razorpay/hooks`,
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY ?? '',
      amount: session.amount.toString(),
      order_id: orderData.id,
      currency: cart.region.currency_code.toLocaleUpperCase(),
      name: process.env.COMPANY_NAME ?? "ShopNTrolly ",
      description: `Order number ${orderData.id}`,

      image: "https://example.com/your_logo",
      modal: {
        backdropclose: true,
        escape: true,
        handleback: true,
        confirm_close: true,
        ondismiss: () => {
          setSubmitting(false)
        },
        animation: true,
      },
      handler: async (args) => {
        onPaymentCompleted()
      },
      "prefill": {
        "name": cart?.billing_address.first_name + " " + cart?.billing_address.last_name  ,
        "email": cart?.email,
        "contact":( cart?.billing_address?.phone || cart?.shipping_address?.phone) as string
      },
      "notes": {
        "address": cart?.billing_address,
        "order_notes": session.data.notes
      },
      
    };

    const razorpay = new Razorpay(options);
    razorpay.open();
    razorpay.on("payment.failed", function (response: any) {
      setErrorMessage(JSON.stringify(response.error))
    })
    razorpay.on("payment.authorized", function (response: any) {

    })
    razorpay.on("payment.captured", function (response: any) {

    }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Razorpay]);
  return (
    <>
      <Button
        disabled={submitting || notReady}
        onClick={handlePayment}
      >
        {submitting ? <Spinner /> : "Place Your Order"}
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-small-regular mt-2">
          {errorMessage}
        </div>
      )}
    </>
  )
}

export default PaymentButton
