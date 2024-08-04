import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import CollectionsGrid from "@modules/products/components/utility-grid"
import MetalsGrid from "@modules/products/components/metal-gird"

export const metadata: Metadata = {
  title: "Charandhul Store",
  description:
    "Charandhul Store is a curated collection of Copper Utlis.",
}

// const getCollectionsWithProducts = cache(
//   async (
//     countryCode: string
//   ): Promise<ProductCollectionWithPreviews[] | null> => {
//     const { collections } = await getCollectionsList(0, 3)

//     if (!collections) {
//       return null
//     }

//     const collectionIds = collections.map((collection) => collection.id)

//     await Promise.all(
//       collectionIds.map((id) =>
//         getProductsList({
//           queryParams: { collection_id: [id] },
//           countryCode,
//         })
//       )
//     ).then((responses) =>
//       responses.forEach(({ response, queryParams }) => {
//         let collection

//         if (collections) {
//           collection = collections.find(
//             (collection) => collection.id === queryParams?.collection_id?.[0]
//           )
//         }

//         if (!collection) {
//           return
//         }

//         collection.products = response.products as unknown as Product[]
//       })
//     )

//     return collections as unknown as ProductCollectionWithPreviews[]
//   }
// )
const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const allCollections = await getCollectionsList()
  console.log(allCollections)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  console.log(collections, "for featured products")

  // export default async function Home({
  //   params: { countryCode },
  // }: {
  //   params: { countryCode: string }
  // }) {
  //   const collections = await getCollectionsWithProducts(countryCode)
  //   const region = await getRegion(countryCode)

  //   if (!collections || !region) {
  //     return null
  //   }

  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 md:px-6 md:pt-10 md:mt-7 flex flex-col items-center justify-center text-[#023047]">
        <div className="flex flex-col items-center justify-center md:space-y-4  space-y-1 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-[#023047] sm:text-4xl md:text-5xl lg:text-6xl">
              Our Copper & Brass Collection
            </h2>
            <p className="max-w-[900px] text-base text-[#023047] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl dark:text-gray-400">
              Explore our exquisite range of handcrafted copper and brass utensils, perfect for elevating your kitchen experience.
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 flex flex-col items-center justify-center">
      
        <p className="pt-1 md:pt-5  max-w-[900px] text-2xl font-bold text-[#023047] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl dark:text-gray-400">
          Shop by Utility
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        <CollectionsGrid collections={allCollections.collections} region={region} />
      </div>
   
      
      <div>
        <ul className="flex flex-col">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
