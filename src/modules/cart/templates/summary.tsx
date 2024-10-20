"use client"

import { Button, Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import { CartWithCheckoutStep } from "types/global"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Customer } from "@medusajs/medusa"
import SignInPrompt from "../components/sign-in-prompt"

type SummaryProps = {
  cart: CartWithCheckoutStep
  customer: Omit<Customer, "password_hash"> | null
}

const Summary = ({ cart, customer }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Summary
      </Heading>
      <DiscountCode cart={cart} />
      <Divider />
      <CartTotals data={cart} />
      <LocalizedClientLink
        href={"/checkout?step=" + cart.checkout_step}
        data-testid="checkout-button"
      >
        {customer == null ? (
          <SignInPrompt />
        ) : (
          <Button className="w-full h-10 bg-[#ffc600] hover:bg-[#ffc600]/40 text-black">
            Go to checkout
          </Button>
        )}
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
