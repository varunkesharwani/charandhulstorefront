import { Order } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"
// import Instagram from "@modules/common/icons/instagram"
// import Youtube from "@modules/common/icons/youtube"

type OrderDetailsProps = {
  order: Order
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div>
      <Text>
        We have sent the order confirmation details to{" "}
        <span
          className="text-ui-fg-medium-plus font-semibold"
          data-testid="order-email"
        >
          {order.email}
        </span>
        .
      </Text>
      <Text className="flex gap-2 text-base font-semibold items-center py-4">
        Connect with us
        <a
          href="https://www.instagram.com/shopandtrolly/"
          target="_blank"
          rel="ShopNTrolly website"
        >
          {/* <Instagram /> */}
        </a>
        &
        <a
          href="https://www.youtube.com/@shopntrolly"
          target="_blank"
          rel="ShopNTrolly website"
        >
          {/* <Youtube /> */}
        </a>
      </Text>
      <div className="flex flex-col items-end justify-end">
        <Text className="mt-2 text-base">
          Order date:{" "}
          <span data-testid="order-date" className="font-semibold">
            {new Date(order.created_at).toDateString()}
          </span>
        </Text>
        <Text className="mt-2 text-base text-blue-700">
          Order number:{" "}
          <span data-testid="order-id" className="font-semibold">
            {order.display_id}
          </span>
        </Text>
      </div>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <Text>
              Order status:{" "}
              <span className="text-ui-fg-subtle " data-testid="order-status">
                {formatStatus(order.fulfillment_status)}
              </span>
            </Text>
            <Text>
              Payment status:{" "}
              <span
                className="text-ui-fg-subtle "
                sata-testid="order-payment-status"
              >
                {formatStatus(order.payment_status)}
              </span>
            </Text>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails