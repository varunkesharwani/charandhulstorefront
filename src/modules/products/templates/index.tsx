import { Region } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import React, { Suspense } from "react";
import { FaShippingFast, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';
import Image from 'next/image';
import ImageGallery from "@modules/products/components/image-gallery";
import ProductActions from "@modules/products/components/product-actions";
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta";
import ProductTabs from "@modules/products/components/product-tabs";
import { notFound } from "next/navigation";
import ProductActionsWrapper from "./product-actions-wrapper";
import ProductHeading from "./Product-heading";
import { ProductCollectionWithPreviews } from "types/global";
import FeaturedProducts from "@modules/home/components/featured-products";
import { Product } from "@medusajs/medusa"
import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import { cache } from "react"

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 5)

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

    const sortedCollections = collections.sort((a, b) => {
      const isFeaturedA = parseInt(a.metadata?.isPriorityFeatured?.toString() || "0", 10)
      const isFeaturedB = parseInt(b.metadata?.isPriorityFeatured?.toString() || "0", 10)
      return isFeaturedA - isFeaturedB
    })

    return sortedCollections as unknown as ProductCollectionWithPreviews[]
  }
)

type ProductTemplateProps = {
    product: PricedProduct;
    region: Region;
    countryCode: string;
};

const ProductTemplate = async ({ product, region, countryCode }: ProductTemplateProps) => {
    if (!product || !product.id) {
        return notFound();
    }

    const collections = await getCollectionsWithProducts(countryCode);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <ImageGallery images={product?.images || []} />
                    </div>
                    <div className="space-y-8">
                        <ProductHeading product={product} />
                        <ProductActionsWrapper id={product.id} region={region} />
                        <ProductOnboardingCta />
                        <Suspense
                            fallback={
                                <ProductActions
                                    disabled={true}
                                    product={product}
                                    region={region}
                                />
                            }
                        >
                            <div className="border-t-2 pt-8 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3">
                                        <FaShippingFast className="text-2xl text-primary" />
                                        <p className="text-lg">Free Shipping</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <MdTimeline className="text-2xl text-primary" />
                                        <p className="text-lg">4-5 Days Delivery</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FaExchangeAlt className="text-2xl text-primary" />
                                        <p className="text-lg">7-Days Exchange</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FaShieldAlt className="text-2xl text-primary" />
                                        <p className="text-lg">Hand Crafted</p>
                                    </div>
                                </div>
                                <ProductTabs product={product} />
                            </div>
                        </Suspense>
                    </div>
                </div>
                </div>
            {/* Featured Products Section */}
            {collections && (
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Featured Products</h2>
                        <FeaturedProducts collections={collections} region={region} />
                    </div>
                </div>
            )}

<div className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-12 text-center text-amber-900">Our Craftsmanship</h2>
                    <div className="space-y-16">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-amber-300"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-3 bg-amber-50 text-lg font-medium text-amber-900">
                                    Exquisite Detailing
                                </span>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://res.cloudinary.com/damjpug4c/image/upload/v1726987591/WhatsApp_Image_2024-09-18_at_01.20.48_d950e291_mmtdye.jpg"
                                alt="Handcrafted Utensil 1"
                                width={1200}
                                height={600}
                                layout="responsive"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-bold mb-2 hidden md:block">Precision in Every Piece</h3>
                                <p className="text-lg hidden md:block">Our artisans ensure every detail is perfect</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-amber-300"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-3 bg-amber-50 text-lg font-medium text-amber-900">
                                    Traditional Meets Modern
                                </span>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://res.cloudinary.com/damjpug4c/image/upload/v1726987590/WhatsApp_Image_2024-09-18_at_01.20.48_cf941b74_gvcxts.jpg"
                                alt="Handcrafted Utensil 2"
                                width={1200}
                                height={600}
                                layout="responsive"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-bold mb-2 hidden md:block">Blending Eras</h3>
                                <p className="text-lg hidden md:block">Classic craftsmanship with contemporary design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-teal-50 to-teal-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-12 text-center text-teal-900">Benefits of Our Utensils</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-teal-800">Brass Utensils</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Excellent heat conductivity for even cooking</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Naturally antibacterial properties</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Durable and long-lasting</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Enhances flavor of food</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Releases trace amounts of beneficial minerals</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-teal-800">Copper Utensils</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Superior heat distribution for precise cooking</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Antimicrobial properties for food safety</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Helps retain nutritional value of food</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Aesthetically pleasing and elegant</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Potential health benefits from copper ions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-rose-50 to-rose-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-12 text-center text-rose-900">Our Commitment to Quality</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-rose-800">Handcrafted Excellence</h3>
                            <p className="text-lg leading-relaxed text-rose-700">
                                Each of our utensils is meticulously handcrafted by skilled artisans, 
                                ensuring the highest quality and attention to detail. We take pride in 
                                preserving traditional craftsmanship while incorporating modern design elements.
                                Our commitment to excellence is reflected in every piece we create.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-rose-800">Sustainable Practices</h3>
                            <p className="text-lg leading-relaxed text-rose-700">
                                We are committed to sustainable manufacturing practices. Our utensils 
                                are not only durable but also eco-friendly. By choosing our products,
                                youre contributing to a reduction in plastic waste and supporting 
                                sustainable living. We believe in creating products that are good for 
                                you and good for the planet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-12 text-center text-indigo-900">Care and Maintenance</h2>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <p className="text-lg mb-6 leading-relaxed text-indigo-700">
                            To ensure the longevity and beauty of your brass and copper utensils, 
                            follow these simple care instructions:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                            <li className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Hand wash with mild soap and warm water</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Dry thoroughly immediately after washing</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Avoid using abrasive cleaners or scrubbers</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>For brass, use a mixture of lemon juice and baking soda for cleaning</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>For copper, a paste of salt and vinegar works well for polishing</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Store in a dry place to prevent tarnishing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>         
   
        </div>
    );
};

export default ProductTemplate;