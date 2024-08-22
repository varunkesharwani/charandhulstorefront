

import { ProductPreviewTypeZ } from "types/global";
import { retrievePricedProductById } from "@lib/data";
import { getProductPrice } from "@lib/util/get-product-price";
import ProductActions from "@modules/products/components/product-actions";
import { Region } from "@medusajs/medusa";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Thumbnail from "../thumbnail";
import PreviewPrice from "./price";

export default async function ProductPreviewStore({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewTypeZ;
  isFeatured?: boolean;
  region: Region;
}) {
  // Log the product metadata

  // Filter out hidden products
  if (productPreview.metadata?.hidden === "true") {
    return null;
  }
  const truncateTitle = (title: string) => {
    const maxLength = 30; // Define the max length for truncation
    const truncateAt = title.indexOf('|') !== -1 ? title.indexOf('|') : maxLength;

    return title.slice(0, truncateAt).trim();
  };
  const truncatedTitle = truncateTitle(productPreview.title);

  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product);

  if (!pricedProduct) {
    return null;
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  });

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper" className="relative">
        {cheapestPrice && cheapestPrice.price_type === "sale" && (
          <div className="absolute z-30 top-3 left-3 bg-[#032a3e] px-2 text-white text-bold rounded-md">
            -{cheapestPrice.percentage_diff}%
          </div>
        )}
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="square"
          isFeatured={isFeatured}
        />
        <div className="flex flex-col txt-compact-medium mt-4 justify-between space-y-1">
          <h1
            className="text-sm md:font-semibold md:text-sm"
            data-testid="product-title"
          >
            {truncatedTitle}
          </h1>

          <div className="flex items-center gap-x-2   flex-row text-sm md:font-semibold md:text-sm justify-between">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
          {/* <ProductActionsWrapper id={product.id} region={region} /> */}
        </div>
      </div>
    </LocalizedClientLink>
  );
}
