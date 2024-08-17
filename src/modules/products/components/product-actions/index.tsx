"use client"

// import { useState, useEffect, useMemo, useRef } from 'react';
// import { Region } from '@medusajs/medusa';
// import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
// import { useRouter } from 'next/navigation';
// import { isEqual } from 'lodash';
// import { useParams } from 'next/navigation';
// import { useIntersection } from '@lib/hooks/use-in-view';
// import { addToCart } from '@modules/cartyyy/actions';
// import Divider from '@modules/common/components/divider';
// import OptionSelect from '@modules/products/components/option-select';
// import ProductPrice from '../product-price';
// import QuantityInput from "../quantityinput";

// type ProductActionsProps = {
//   product: PricedProduct;
//   region: Region;
//   disabled?: boolean;
// };
// export type PriceType = {
//   calculated_price: string;
//   original_price?: string;
//   price_type?: "sale" | "default";
//   percentage_diff?: string;
// };

// export default function ProductActions({
//   product,
//   region,
//   disabled,
// }: ProductActionsProps) {
//   const [options, setOptions] = useState<Record<string, string>>({});
//   const [isAddingToCart, setIsAddingToCart] = useState(false);
//   const [isBuyingNow, setIsBuyingNow] = useState(false);
//   const [quantity, setQuantity] = useState(1); // Quantity state
//   const router = useRouter();
//   const countryCode = useParams().countryCode as string;
//   const variants = product.variants;

//   useEffect(() => {
//     const optionObj: Record<string, string> = {};
//     for (const option of product.options || []) {
//       Object.assign(optionObj, { [option.id]: undefined });
//     }
//     setOptions(optionObj);
//   }, [product]);

//   const variantRecord = useMemo(() => {
//     const map: Record<string, Record<string, string>> = {};
//     for (const variant of variants) {
//       if (!variant.options || !variant.id) continue;
//       const temp: Record<string, string> = {};
//       for (const option of variant.options) {
//         temp[option.option_id] = option.value;
//       }
//       map[variant.id] = temp;
//     }
//     return map;
//   }, [variants]);

//   const variant = useMemo(() => {
//     let variantId: string | undefined = undefined;
//     for (const key of Object.keys(variantRecord)) {
//       if (isEqual(variantRecord[key], options)) {
//         variantId = key;
//       }
//     }
//     return variants.find((v) => v.id === variantId);
//   }, [options, variantRecord, variants]);

//   useEffect(() => {
//     if (variants.length === 1 && variants[0].id) {
//       setOptions(variantRecord[variants[0].id]);
//     }
//   }, [variants, variantRecord]);

//   const updateOptions = (update: Record<string, string>) => {
//     setOptions({ ...options, ...update });
//   };

//   const inStock = useMemo(() => {
//     if (variant && !variant.manage_inventory) return true;
//     if (variant && variant.allow_backorder) return true;
//     if (variant?.inventory_quantity && variant.inventory_quantity > 0) return true;
//     return false;
//   }, [variant]);

//   const actionsRef = useRef<HTMLDivElement>(null);
//   const inView = useIntersection(actionsRef, '0px');

//   const handleAddToCart = async () => {
//     if (!variant?.id) return null;
//     setIsAddingToCart(true);
//     setIsBuyingNow(false);

//     await addToCart({
//       variantId: variant.id,
//       quantity: quantity,
//       countryCode,
//     });

//     setIsAddingToCart(false);
//   };

//   const handleBuyNow = async () => {
//     if (!variant?.id) return null;
//     setIsBuyingNow(true);
//     setIsAddingToCart(false);

//     await addToCart({
//       variantId: variant.id,
//       quantity: quantity,
//       countryCode,
//     });

//     setIsBuyingNow(false);

//     // Redirect to localized /cart path
//     router.push(`/${countryCode}/cart`);
//   };

//   const handleQuantityChange = (newQuantity: number) => {
//     setQuantity(newQuantity);
//   };

//   return (
//     <>
//       <div className="flex flex-col gap-y-2" ref={actionsRef}>
//         <div>
//           {product.variants.length > 1 && (
//             <div className="flex flex-col gap-y-4">
//               {(product.options || []).map((option) => (
//                 <div key={option.id}>
//                   <OptionSelect
//                     option={option}
//                     current={options[option.id]}
//                     updateOption={updateOptions}
//                     title={option.title}
//                     disabled={!!disabled || isAddingToCart || isBuyingNow}
//                   />
//                 </div>
//               ))}
//               <Divider />
//             </div>
//           )}
//         </div>

//         <ProductPrice product={product} variant={variant} region={region} />

//         <QuantityInput quantity={quantity} handleQuantityChange={handleQuantityChange} />

//         <div className="flex flex-col md:flex-row md:space-x-2 space-x-0 space-y-2 md:space-y-0">
//           <button
//             onClick={handleAddToCart}
//             disabled={!inStock || !variant || !!disabled || isAddingToCart || isBuyingNow}
//             className="w-full h-[50px] bg-[#023047f8] rounded-md border-2 border-[#023047f8] text-lg text-white hover:bg-[#023047f8]/30"
//             data-testid="add-product-button"
//           >
//             {isAddingToCart
//               ? "Adding..."
//               : !variant
//                 ? "Select variant"
//                 : !inStock
//                   ? "Out of stock"
//                   : "Add to cart"}
//           </button>

//           <button
//             onClick={handleBuyNow}
//             disabled={!inStock || !variant || !!disabled || isAddingToCart || isBuyingNow}
//             className="w-full h-[50px] bg-[#023047f8] rounded-md border-2 border-[#023047f8] text-lg text-white hover:bg-[#023047f8]/30"
//             data-testid="buy-now-button"
//           >
//             {isBuyingNow
//               ? "Buying..."
//               : !variant
//                 ? "Select variant"
//                 : !inStock
//                   ? "Out of stock"
//                   : "Buy Now"}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Region } from '@medusajs/medusa';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import { useRouter, useParams } from 'next/navigation';
import { isEqual } from 'lodash';
import { useIntersection } from '@lib/hooks/use-in-view';
import { addToCart } from '@modules/cartyyy/actions';
import Divider from '@modules/common/components/divider';
import OptionSelect from '@modules/products/components/option-select';
import ProductPrice from '../product-price';
import QuantityInput from "../quantityinput";

type ProductActionsProps = {
  product: PricedProduct;
  region: Region;
  disabled?: boolean;
};
export type PriceType = {
  calculated_price: string;
  original_price?: string;
  price_type?: "sale" | "default";
  percentage_diff?: string;
};

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string>>({});
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const countryCode = useParams().countryCode as string;
  const variants = product.variants;

  useEffect(() => {
    const optionObj: Record<string, string> = {};
    product.options?.forEach(option => {
      optionObj[option.id] = "";
    });
    setOptions(optionObj);
  }, [product]);

  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {};
    variants.forEach(variant => {
      if (variant.options && variant.id) {
        const temp: Record<string, string> = {};
        variant.options.forEach(option => {
          temp[option.option_id] = option.value;
        });
        map[variant.id] = temp;
      }
    });
    return map;
  }, [variants]);

  const variant = useMemo(() => {
    const foundId = Object.keys(variantRecord).find(key => isEqual(variantRecord[key], options));
    return variants.find(v => v.id === foundId);
  }, [options, variantRecord, variants]);

  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id]);
    }
  }, [variants, variantRecord]);

  const updateOptions = useCallback((update: Record<string, string>) => {
    setOptions(prevOptions => ({ ...prevOptions, ...update }));
  }, []);

  const inStock = useMemo(() => {
    if (!variant) return false;
    return !variant.manage_inventory || variant.allow_backorder || (variant.inventory_quantity && variant.inventory_quantity > 0);
  }, [variant]);

  const actionsRef = useRef<HTMLDivElement>(null);
  const inView = useIntersection(actionsRef, '0px');

  const handleAddToCart = useCallback(async () => {
    if (!variant?.id) return;
    setIsAddingToCart(true);
    setIsBuyingNow(false);
    await addToCart({ variantId: variant.id, quantity, countryCode });
    setIsAddingToCart(false);
  }, [variant, quantity, countryCode]);

  const handleBuyNow = useCallback(async () => {
    if (!variant?.id) return;
    setIsBuyingNow(true);
    setIsAddingToCart(false);
    await addToCart({ variantId: variant.id, quantity, countryCode });
    setIsBuyingNow(false);
    router.push(`/${countryCode}/cart`);
  }, [variant, quantity, countryCode, router]);

  const handleQuantityChange = useCallback((newQuantity: number) => {
    setQuantity(newQuantity);
  }, []);

  return (
    <div className="flex flex-col gap-y-2" ref={actionsRef}>
      {product.variants.length > 1 && (
        <div className="flex flex-col gap-y-4">
          {product.options?.map(option => (
            <div key={option.id}>
              <OptionSelect
                option={option}
                current={options[option.id]}
                updateOption={updateOptions}
                title={option.title}
                disabled={!!disabled || isAddingToCart || isBuyingNow}
              />
            </div>
          ))}
          <Divider />
        </div>
      )}

      <ProductPrice product={product} variant={variant} region={region} />
      <QuantityInput quantity={quantity} handleQuantityChange={handleQuantityChange} />

      <div className="flex flex-col md:flex-row md:space-x-2 space-x-0 space-y-2 md:space-y-0">
        <button
          onClick={handleAddToCart}
          disabled={!inStock || !variant || !!disabled || isAddingToCart || isBuyingNow}
          className="w-full h-[50px] bg-[#023047f8] rounded-md border-2 border-[#023047f8] text-lg text-white hover:bg-[#023047f8]/30"
          data-testid="add-product-button"
        >
          {isAddingToCart
            ? "Adding..."
            : !variant
              ? "Select variant"
              : !inStock
                ? "Out of stock"
                : "Add to cart"}
        </button>

        <button
          onClick={handleBuyNow}
          disabled={!inStock || !variant || !!disabled || isAddingToCart || isBuyingNow}
          className="w-full h-[50px] bg-[#023047f8] rounded-md border-2 border-[#023047f8] text-lg text-white hover:bg-[#023047f8]/30"
          data-testid="buy-now-button"
        >
          {isBuyingNow
            ? "Buying..."
            : !variant
              ? "Select variant"
              : !inStock
                ? "Out of stock"
                : "Buy Now"}
        </button>
      </div>
    </div>
  );
}
