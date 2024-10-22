// import { getProductsListWithSort, getRegion } from "@lib/data"
// import ProductPreview from "@modules/products/components/product-preview"
// import { Pagination } from "@modules/store/components/pagination"
// import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

// const PRODUCT_LIMIT = 12

// type PaginatedProductsParams = {
//   limit: number
//   collection_id?: string[]
//   category_id?: string[]
//   id?: string[]
// }

// export default async function PaginatedProducts({
//   sortBy,
//   page,
//   collectionId,
//   categoryId,
//   productsIds,
//   countryCode,
// }: {
//   sortBy?: SortOptions
//   page: number
//   collectionId?: string
//   categoryId?: string
//   productsIds?: string[]
//   countryCode: string
// }) {
//   const region = await getRegion(countryCode)

//   if (!region) {
//     return null
//   }

//   const queryParams: PaginatedProductsParams = {
//     limit: PRODUCT_LIMIT,
//   }

//   if (collectionId) {
//     queryParams["collection_id"] = [collectionId]
//   }

//   if (categoryId) {
//     queryParams["category_id"] = [categoryId]
//   }

//   if (productsIds) {
//     queryParams["id"] = productsIds
//   }

//   const {
//     response: { products, count },
//   } = await getProductsListWithSort({
//     page,
//     queryParams,
//     sortBy,
//     countryCode,
//   })

//   const totalPages = Math.ceil(count / PRODUCT_LIMIT)

//   return (
//     <>
//       <ul className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8" data-testid="products-list">
//         {products.map((p) => {
//           return (
//             <li key={p.id}>
//               <ProductPreview productPreview={p} region={region} />
//             </li>
//           )
//         })}
//       </ul>
//       {totalPages > 1 && <Pagination data-testid="product-pagination" page={page} totalPages={totalPages} />}
//     </>
//   )
// }

import { getProductsListWithSort, getRegion } from "@lib/data"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
}

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // Increase the limit to account for potentially hidden products
  const queryParams: PaginatedProductsParams = {
    limit: PRODUCT_LIMIT * 3, // Fetch more products to ensure we have enough after filtering
  }

  if (collectionId) {
    queryParams["collection_id"] = [collectionId]
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId]
  }

  if (productsIds) {
    queryParams["id"] = productsIds
  }

  const {
    response: { products: allProducts, count: totalCount },
  } = await getProductsListWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  })

  // Filter out products with metadata.hidden = "true"
  const visibleProducts = allProducts.filter(
    (product) => !(product.metadata?.hidden === "true")
  )

  // Calculate the actual number of visible products for pagination
  const visibleCount = Math.ceil(
    (totalCount * visibleProducts.length) / allProducts.length
  )
  const totalPages = Math.ceil(visibleCount / PRODUCT_LIMIT)

  // Slice the visible products to match the desired limit
  const startIndex = 0
  const endIndex = PRODUCT_LIMIT
  const displayProducts = visibleProducts.slice(startIndex, endIndex)

  // If we don't have enough products after filtering, we might need to fetch more
  if (displayProducts.length < PRODUCT_LIMIT && page === totalPages) {
    // This is fine for the last page
  } else if (displayProducts.length < PRODUCT_LIMIT) {
    // In a real implementation, you might want to fetch additional products here
    // but that would require modifying the getProductsListWithSort function
    console.warn("Not enough visible products for the current page")
  }

  return (
    <>
      <ul 
        className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8" 
        data-testid="products-list"
      >
        {displayProducts.map((p) => (
          <li key={p.id}>
            <ProductPreview productPreview={p} region={region} />
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <Pagination 
          data-testid="product-pagination" 
          page={page} 
          totalPages={totalPages} 
        />
      )}
    </>
  )
}