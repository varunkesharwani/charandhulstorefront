// import { getProductsListWithSort, getRegion } from "@lib/data";
// import ProductPreviewStore from "@modules/products/components/product-preview-store";
// import { Pagination } from "@modules/store/components/pagination";
// import { SortOptions } from "@modules/store/components/refinement-list/sort-products";

// const PRODUCT_LIMIT = 12;

// type PaginatedProductsParams = {
//   limit: number;
//   collection_id?: string[];
//   category_id?: string[];
//   id?: string[];
// };

// export default async function PaginatedProducts({
//   sortBy,
//   page,
//   collectionId,
//   categoryId,
//   productsIds,
//   countryCode,
// }: {
//   sortBy?: SortOptions;
//   page: number;
//   collectionId?: string;
//   categoryId?: string;
//   productsIds?: string[];
//   countryCode: string;
// }) {
//   const region = await getRegion(countryCode);

//   if (!region) {
//     return null;
//   }

//   const queryParams: PaginatedProductsParams = {
//     limit: PRODUCT_LIMIT,
//   };

//   if (collectionId) {
//     queryParams["collection_id"] = [collectionId];
//   }

//   if (categoryId) {
//     queryParams["category_id"] = [categoryId];
//   }

//   if (productsIds) {
//     queryParams["id"] = productsIds;
//   }

//   const {
//     response: { products, count },
//   } = await getProductsListWithSort({
//     page,
//     queryParams,
//     sortBy,
//     countryCode,
//   });

//   // Log products to check their metadata
//   console.log("Fetched Products:", products);

//   // Filter out products with metadata.hidden = "true"
//   const visibleProducts = products.filter(
//     (p) => !p.metadata || p.metadata.hidden !== "true"
//   );

//   // Log filtered products
//   console.log("Visible Products:", visibleProducts);

//   const totalPages = Math.ceil(count / PRODUCT_LIMIT);

//   return (
//     <>
//       <ul
//         className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
//         data-testid="products-list"
//       >
//         {visibleProducts.map((p) => (
//           <li key={p.id}>
//             <ProductPreviewStore productPreview={p} region={region} />
//           </li>
//         ))}
//       </ul>
//       {totalPages > 1 && (
//         <Pagination
//           data-testid="product-pagination"
//           page={page}
//           totalPages={totalPages}
//         />
//       )}
//     </>
//   );
// }
import { getProductsListWithSort, getRegion } from "@lib/data";
import ProductPreviewStore from "@modules/products/components/product-preview-store";
import { SortOptions } from "@modules/store/components/refinement-list/sort-products";

const PRODUCT_LIMIT = 12;

type PaginatedProductsParams = {
  limit: number;
  collection_id?: string[];
  category_id?: string[];
  id?: string[];
};

export default async function PaginatedProducts({
  sortBy,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
}: {
  sortBy?: SortOptions;
  collectionId?: string;
  categoryId?: string;
  productsIds?: string[];
  countryCode: string;
}) {
  const region = await getRegion(countryCode);

  if (!region) {
    return null;
  }

  const queryParams: PaginatedProductsParams = {
    limit: PRODUCT_LIMIT,
  };

  if (collectionId) {
    queryParams["collection_id"] = [collectionId];
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId];
  }

  if (productsIds) {
    queryParams["id"] = productsIds;
  }

  // Fetch all products
  const fetchAllProducts = async () => {
    let allProducts: any[] = [];
    let currentPage = 1;
    let totalProductsFetched = 0;
    let totalPages = 1;

    do {
      const { response: { products, count } } = await getProductsListWithSort({
        page: currentPage,
        queryParams,
        sortBy,
        countryCode,
      });

      allProducts = [...allProducts, ...products];
      totalProductsFetched += products.length;
      totalPages = Math.ceil(count / PRODUCT_LIMIT);
      currentPage++;
    } while (currentPage <= totalPages);

    return allProducts;
  };

  const allProducts = await fetchAllProducts();

  // Filter out products with metadata.hidden = "true"
  const visibleProducts = allProducts.filter(
    (p) => !p.metadata || p.metadata.hidden !== "true"
  );

  return (
    <ul
      className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
      data-testid="products-list"
    >
      {visibleProducts.map((p) => (
        <li key={p.id}>
          <ProductPreviewStore productPreview={p} region={region} />
        </li>
      ))}
    </ul>
  );
}
