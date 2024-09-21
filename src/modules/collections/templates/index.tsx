// import { ProductCollection } from "@medusajs/medusa"
// import { Suspense } from "react"

// import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
// import RefinementList from "@modules/store/components/refinement-list"
// import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
// import PaginatedProducts from "@modules/store/templates/paginated-products"
// import NewPaginatedProducts from "@modules/store/templates/new-paginated-products"

// export default function CollectionTemplate({
//   sortBy,
//   collection,
//   page,
//   countryCode,
// }: {
//   sortBy?: SortOptions
//   collection: ProductCollection
//   page?: string
//   countryCode: string
// }) {
//   const pageNumber = page ? parseInt(page) : 1
//   const firstImage = collection.metadata?.L1image;
//   const secondImage = collection.metadata?.L2image;
//   const thirdImage = collection.metadata?.L3image;

//   return (
//     <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
//       {/* <RefinementList sortBy={sortBy || "created_at"} /> */}
//        {/* hi chat add first imaage here and tillte above it  */}
//       <div className="w-full">
//         <div className="mb-8 text-3xl-semi">
//           <></>
//           <h1>{collection.title}</h1>
//         </div>
//         <Suspense fallback={<SkeletonProductGrid />}>
//           <NewPaginatedProducts
//             sortBy={sortBy || "created_at"}
//             page={pageNumber}
//             collectionId={collection.id}
//             countryCode={countryCode}
//           />
//         </Suspense>
//       </div>
//        {/* add second and this imasghe here woth some gap */}
//     </div>
//   )
// }


// import { ProductCollection } from "@medusajs/medusa";
// import { Suspense } from "react";
// import Image from "next/image";

// import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid";
// import NewPaginatedProducts from "@modules/store/templates/new-paginated-products";
// import { SortOptions } from "@modules/store/components/refinement-list/sort-products";
// import { Console } from "console";

// export default function CollectionTemplate({
//   sortBy,
//   collection,
//   page,
//   countryCode,
// }: {
//   sortBy?: SortOptions;
//   collection: ProductCollection;
//   page?: string;
//   countryCode: string;
// }) {
//   const pageNumber = page ? parseInt(page) : 1;

//   // Image URLs as strings (replace with your actual URLs)
//   const firstImage = collection.metadata?.L1image  ;
//   const secondImage = collection.metadata?.L2image  ;
//   const thirdImage = collection.metadata?.L3image ;
//   const shubham = collection.metadata?.shubham ;
  
//   console.log(firstImage);
//   console.log(secondImage);
//   console.log(thirdImage);
//   console.log(shubham);

//   return (
//     <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
//       {/* First image with title */}
//       <div className="w-full">
//         {/* Render the first image */}
//         <div className="mb-4">
//           <Image
//             src={collection.metadata?.L1image}
//             alt="First Collection Image"
//             width={1200}
//             height={400}
//             className="object-cover rounded-md"
//           />
//         </div>
        
//         {/* Collection title */}
//         <div className="mb-8 text-3xl font-semibold">
//           <h1>{collection.title}</h1>
//         </div>

//         {/* Products */}
//         <Suspense fallback={<SkeletonProductGrid />}>
//           <NewPaginatedProducts
//             sortBy={sortBy || "created_at"}
//             page={pageNumber}
//             collectionId={collection.id}
//             countryCode={countryCode}
//           />
//         </Suspense>
//       </div>

//       {/* Second and third images */}
//       <div className="flex flex-col w-full mt-8 space-y-6">
//         <div>
//           <Image
//             src={secondImage}
//             alt="Second Collection Image"
//             width={1200}
//             height={400}
//             className="object-cover rounded-md"
//           />
//         </div>
//         <div>
//           <Image
          
//             src={thirdImage}
//             alt="Third Collection Image"
//             width={1200}
//             height={400}
//             className="object-cover rounded-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import { ProductCollection } from "@medusajs/medusa"
import { Suspense } from "react"
import Image from "next/image"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import NewPaginatedProducts from "@modules/store/templates/new-paginated-products"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: ProductCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1

  const firstImage = collection.metadata?.L1image
  const secondImage = collection.metadata?.L2image
  const thirdImage = collection.metadata?.L3image

  return (
    <div className="flex flex-col md:content-container">
      {/* Top image with title overlay */}
      <div className="relative mb-4 md:mb-8 md:rounded-md">
        <Image
        //@ts-ignore
          src={firstImage}
          alt="Collection Cover Image"
          width={1200}
          height={400}
          className="w-full h-[200px] md:h-[400px] object-cover md:rounded-md"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">{collection.title}</h1>
        </div>
      </div>

      {/* Products */}
      <div className="mb-8 md:mb-12 px-4 md:px-0 pt-2 md:pt-5">
        <Suspense fallback={<SkeletonProductGrid />}>
          <NewPaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            collectionId={collection.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>

      {/* Bottom images in column with adjusted height */}
      <div className="flex flex-col space-y-4 md:space-y-6 px-4 md:px-0">
        <div className="h-[200px] md:h-auto">
          <Image
          //@ts-ignore
            src={secondImage}
            alt="Second Collection Image"
            width={1200}
            height={400}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="h-[200px] md:h-auto">
         
          <Image
           //@ts-ignore
            src={thirdImage}
            alt="Third Collection Image"
            width={1200}
            height={400}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  )
}