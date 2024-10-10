import { ProductCollection } from "@medusajs/medusa"
import { Suspense } from "react"
import Image from "next/image"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import NewPaginatedProducts from "@modules/store/templates/new-paginated-products"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import Link from 'next/link'


interface CollectionTemplateProps {
  sortBy?: SortOptions
  collection: ProductCollection
  page?: string
  countryCode: string
}

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: CollectionTemplateProps) {
  const pageNumber = page ? parseInt(page) : 1

  const firstImage = collection.metadata?.L1image
  const secondImage = collection.metadata?.L2image
  const thirdImage = collection.metadata?.L3image

  return (
    <div className="flex flex-col max-w-7xl mx-auto  sm:px-6 lg:px-8">
      {/* Hero Image */}
      <div className="relative w-full h-[200px] sm:h-[200px] md:h-[250px] mb-8 mt-6 overflow-hidden rounded-none md:rounded-lg">
        <Image
          //@ts-ignore
          src={firstImage || '/placeholder.svg'}
          alt="Collection Cover Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-white text-center px-4">
            {collection.title}
          </h1>
        </div>
      </div>

      {/* Products */}
      <div className="mb-12 pt-5">
        <Suspense fallback={<SkeletonProductGrid />}>
          <NewPaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            collectionId={collection.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>

      {/* Bottom images */}

      <div className="flex flex-col space-y-4 md:space-y-6 px-4 md:px-0">
        <div className="h-[200px] md:h-auto">
          <Link href="https://www.instagram.com/charandhul" >
            <Image
              //@ts-ignore
              src={secondImage}
              alt="Second Collection Image"
              width={1200}
              height={400}
              className="w-full h-full object-cover rounded-md"
            />


          </Link>



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

