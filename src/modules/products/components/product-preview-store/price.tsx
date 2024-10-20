import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <>
      {price.price_type === "sale" && (
        <Text className="line-through text-ui-fg-muted  md:font-semibold  md:text-xl" data-testid="original-price">
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("text-ui-fg-muted  md:font-semibold  md:text-xl", {
          "text-ui-fg-interactive md:font-semibold  md:text-xl": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
    </>
  )
}
