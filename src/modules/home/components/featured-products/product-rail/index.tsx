// import { Region } from "@medusajs/medusa"
// import { Text } from "@medusajs/ui"
// import InteractiveLink from "@modules/common/components/interactive-link"
// import ProductPreview from "@modules/products/components/product-preview"
// import { ProductCollectionWithPreviews } from "types/global"

// export default function ProductRail({
//   collection,
//   region,
// }: {
//   collection: ProductCollectionWithPreviews
//   region: Region
// }) {
//   const { products, metadata } = collection

//   // Check if metadata has isUtility set to "true"
//   if (metadata?.isUtility === "true") {
//     return null
//   }

//   if (!products) {
//     return null
//   }

//   return (
//     <div className="content-container py-12 small:py-12">
//       <div className="flex justify-between mb-8">
//         <strong>
//           <Text className="txt-xlarge md:font-bold md:text-3xl">
//             {collection.title}
//           </Text>
//         </strong>
//         <InteractiveLink href={`/collections/${collection.handle}`}>
//           View all
//         </InteractiveLink>
//       </div>
//       <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-6 small:gap-y-24 mx-auto">
//         {products.map((product) => (
//           <li key={product.id}>
//             <ProductPreview
//               productPreview={product}
//               region={region}
//               isFeatured
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }


import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  // Filter out collections where isUtility is the string "true"
  if (collection.metadata?.isFeatured === "true") {
    return null
  }

  const { products } = collection

  if (!products) {
    return null
  }

  // Slice the first 8 products
  const displayedProducts = products.slice(0, 4)

  return (
    <div className="content-container py-12 small:py-12">
      <div className="flex justify-between mb-8">
        <strong>
          <Text className="txt-xlarge md:font-bold md:text-3xl">
            {collection.title}
          </Text>
        </strong>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-6 small:gap-y-24 mx-auto">
        {displayedProducts.map((product) => (
          <li key={product.id}>
            <ProductPreview
              productPreview={product}
              region={region}
              isFeatured
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
