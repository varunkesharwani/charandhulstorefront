import { Region } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import React, { Suspense } from "react";
import { FaShippingFast, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';

import ImageGallery from "@modules/products/components/image-gallery";
import ProductActions from "@modules/products/components/product-actions";
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta";
import ProductTabs from "@modules/products/components/product-tabs";
import RelatedProducts from "@modules/products/components/related-products";
import ProductInfo from "@modules/products/templates/product-info";
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products";
import { notFound } from "next/navigation";
import ProductActionsWrapper from "./product-actions-wrapper";
import ProductHeading from "./Product-heading";

type ProductTemplateProps = {
    product: PricedProduct;
    region: Region;
    countryCode: string;
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({
    product,
    region,
    countryCode,
}) => {
    if (!product || !product.id) {
        return notFound();
    }

    return (
        <>
            <div className="content-container flex flex-col lg:flex-row py-6 relative">
                <div className="flex flex-col lg:w-1/2 w-full gap-y-6">
                    <ImageGallery images={product?.images || []} />
                </div>
                <div className="flex flex-col lg:w-1/2 w-full px-0 md:px-8">
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
                        <div className="my-5  border-t-2">
                            <div className="md:flex flex-col justify-between py-2 hidden">
                                <div className="flex flex-col md:flex-row md:justify-between space-y-2">
                                    <div className="flex flex-row items-center text-center mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
                                        <FaShippingFast className="md:mr-2" />
                                        <p className="text-base pl-3">Free Shipping above 5000</p>
                                    </div>
                                    <div className="flex flex-row items-center text-center mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
                                        <MdTimeline className="md:mr-2" />
                                        <p className="text-base pl-3">Delivery within 4-5 days</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row md:justify-between space-y-2">
                                    <div className="flex flex-row items-center text-center mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
                                        <FaExchangeAlt className="md:mr-2" />
                                        <p className="text-base pl-3"> 7-days exchange</p>
                                    </div>
                                    <div className="flex flex-row items-center text-center mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
                                        <FaShieldAlt className="md:mr-2" />
                                        <p className="text-base pl-3">Lifetime warranty</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between md:hidden">
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <div className="flex flex-row items-center text-center mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
                                        <FaShippingFast className="md:mr-2" />
                                        <p className="text-base pl-5">Free Shipping</p>
                                    </div>
                                    <div className="flex flex-row items-center text-center mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
                                        <MdTimeline className="md:mr-2" />
                                        <p className="text-base pl-5">Delivery timeline 7-10 days</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <div className="flex flex-row items-center text-center mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
                                        <FaExchangeAlt className="md:mr-2" />
                                        <p className="text-base pl-5">Easy 7-days exchange</p>
                                    </div>
                                    <div className="flex flex-row items-center text-center mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
                                        <FaShieldAlt className="md:mr-2" />
                                        <p className="text-base pl-5">Lifetime warranty</p>
                                    </div>
                                </div>
                            </div>
                            <ProductTabs product={product} />
                        </div>
                    </Suspense>
                </div>
            </div>
            <div
                className="content-container my-16 small:my-32"
                data-testid="related-products-container"
            >
                <Suspense fallback={<SkeletonRelatedProducts />}>
                    <RelatedProducts product={product} countryCode={countryCode} />
                </Suspense>
            </div>
        </>
    );
};

export default ProductTemplate;
