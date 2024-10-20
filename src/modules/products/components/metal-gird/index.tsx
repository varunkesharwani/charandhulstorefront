import { Region, ProductCollection } from "@medusajs/medusa"
import Image from "next/image"
import Link from "next/link"

export default async function MetalsGrid({
  collections,
  region,
}: {
  collections: ProductCollection[]
  region: Region
}) {
  // Filter collections where isUtility is the string "true"
  const filteredCollections = collections.filter(
    (collection) => collection.metadata?.isMetal === "true"
  );

  console.log("Filtered Collections:", filteredCollections);

  return (
    <div className="flex justify-center items-center flex-wrap gap-8 mt-10">
      {filteredCollections.map((collection) => (
        <Link
          className="flex flex-col items-center text-center"
          href={`/collections/${collection.handle}`}
          key={collection.id}
        >
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-300">
            <Image
              //@ts-ignore
              src={collection.metadata?.url || "https://res.cloudinary.com/dveckkrb6/image/upload/v1722545157/1_xfw8yu.png"}
              width={192}
              height={192}
              alt={collection.title}
              className="object-cover "
            />
          </div>
          <p className="mt-4 font-semibold">{collection.title}</p>
        </Link>
      ))}
    </div>
  )
}
