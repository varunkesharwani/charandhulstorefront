import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Heading, Text } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

type ProductInfoProps = {
  product: PricedProduct;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  // Split the description into points
  // @ts-ignore
  const descriptionPoints = product.description.split('.').filter(point => point.trim() !== '');

  return (
    <div id="product-info">
      <div className="flex flex-col mx-auto pt-5">
        <Heading level="h2" className="text-3xl leading-10 text-ui-fg-base" data-testid="product-title">
          Description
        </Heading> 

        <ul className="list-disc list-inside text-medium text-ui-fg-subtle" data-testid="product-description">
          {descriptionPoints.map((point, index) => {
            const trimmedPoint = point.trim();
            const boldTextMatch = trimmedPoint.match(/^\*\*\*(.*)/);

            return (
              <li key={index} className="my-4">
                {boldTextMatch ? (
                  <span className="font-bold">{boldTextMatch[1].trim()}</span>
                ) : (
                  trimmedPoint
                )}.
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
