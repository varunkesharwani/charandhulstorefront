import { Region, ProductCollection } from "@medusajs/medusa"
import Image from "next/image"
import Link from "next/link"

export default async function CollectionsGrid({
  collections,
  region,
}: {
  collections: ProductCollection[]
  region: Region
}) {
  const filteredCollections = collections.filter(
    (collection) => collection.metadata?.isUtility === "true"
  )

  const mappedCollections = filteredCollections.map((collection) => {
    const priority = parseInt(collection.metadata?.isPriority as string, 10)
    return {
      ...collection,
      priority: isNaN(priority) ? Infinity : priority,
    }
  })

  const sortedCollections = mappedCollections.sort((a, b) => a.priority - b.priority)

  return (
    <div className="flex justify-center items-center flex-wrap gap-8 mt-5">
      {sortedCollections.map((collection) => (
        <Link
          className="flex flex-col items-center text-center"
          href={`/collections/${collection.handle}`}
          key={collection.id}
        >
          <div className="md:w-48 md:h-48 w-32 h-32 rounded-lg overflow-hidden border-2 border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src={typeof collection.metadata?.url === "string" ? collection.metadata.url : "https://res.cloudinary.com/dveckkrb6/image/upload/v1722545157/1_xfw8yu.png"}
              width={192}
              height={192}
              alt={collection.title}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-4 font-semibold">{collection.title}</p>
        </Link>
      ))}
    </div>
  )  
}