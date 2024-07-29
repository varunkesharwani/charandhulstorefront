// // This file is responsible for rendering the footer of the website. It includes the logo, categories, collections, and other links. It also includes the company name and the year of the website. The footer is displayed on every page of the website.
// import { Text, clx } from "@medusajs/ui"
// import Image from "next/image"
// import { getCategoriesList, getCollectionsList } from "@lib/data"
// import logo from "../../../../../public/logo.png"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import MedusaCTA from "@modules/layout/components/medusa-cta"

// export default async function Footer() {
//   const { collections } = await getCollectionsList(0, 6)
//   const { product_categories } = await getCategoriesList(0, 6)

//   return (
//     <footer className="border-t border-ui-border-base w-full  bg-[#ffb703]  text-[#023047]  md:font-semibold  md:text-xl">
//       <div className="content-container flex flex-col w-full">
//         <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
//           <div>
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase  md:font-semibold  md:text-xl"
//             >
//               <Image
//                 src={logo.src}
//                 width={250}
//                 height={250}
//                 alt="Picture of the author"
//               />
//             </LocalizedClientLink>
//           </div>
//           <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
//             {product_categories && product_categories?.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Categories
//                 </span>
//                 <ul
//                   className="grid grid-cols-1 gap-2"
//                   data-testid="footer-categories"
//                 >
//                   {product_categories?.slice(0, 6).map((c) => {
//                     if (c.parent_category) {
//                       return
//                     }

//                     const children =
//                       c.category_children?.map((child) => ({
//                         name: child.name,
//                         handle: child.handle,
//                         id: child.id,
//                       })) || null

//                     return (
//                       <li
//                         className="flex flex-col gap-2 text-ui-fg-subtle txt-small  md:font-semibold  md:text-xl"
//                         key={c.id}
//                       >
//                         <LocalizedClientLink
//                           className={clx(
//                             "hover:text-ui-fg-base",
//                             children && "txt-small-plus"
//                           )}
//                           href={`/categories/${c.handle}`}
//                           data-testid="category-link"
//                         >
//                           {c.name}
//                         </LocalizedClientLink>
//                         {children && (
//                           <ul className="grid grid-cols-1 ml-3 gap-2">
//                             {children &&
//                               children.map((child) => (
//                                 <li key={child.id}>
//                                   <LocalizedClientLink
//                                     className="hover:text-ui-fg-base  md:font-semibold  md:text-xl"
//                                     href={`/categories/${child.handle}`}
//                                     data-testid="category-link"
//                                   >
//                                     {child.name}
//                                   </LocalizedClientLink>
//                                 </li>
//                               ))}
//                           </ul>
//                         )}
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>
//             )}
//             {collections && collections.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base  md:font-semibold  md:text-xl">
//                   Collections
//                 </span>
//                 <ul
//                   className={clx(
//                     "grid grid-cols-1 gap-2  text-[#023047]  txt-small  md:font-semibold  md:text-xl",
//                     {
//                       "grid-cols-2": (collections?.length || 0) > 3,
//                     }
//                   )}
//                 >
//                   {collections?.slice(0, 6).map((c) => (
//                     <li key={c.id}>
//                       <LocalizedClientLink
//                         className="hover:text-ui-fg-base"
//                         href={`/collections/${c.handle}`}
//                       >
//                         {c.title}
//                       </LocalizedClientLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {/* <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base  md:font-semibold  md:text-xl">CharanDhull</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-[#023047]  txt-small">
//                 <li>
//                   <LocalizedClientLink
//                     className="hover:text-ui-fg-base  md:font-semibold  md:text-xl"
//                     href={`/aboutus`}
//                   >
//                     About us
//                   </LocalizedClientLink>
//                 </li>
//                 <li>
//                   <LocalizedClientLink
//                     className="hover:text-ui-fg-base  md:font-semibold  md:text-xl"
//                     href={`/tnc`}
//                   >
//                     Terms and conditions
//                   </LocalizedClientLink>
//                 </li>
//                 <li>
//                   <LocalizedClientLink
//                     className="hover:text-ui-fg-base  md:font-semibold  md:text-xl"
//                     href={`/Support`}
//                   >
//                     Contact us
//                   </LocalizedClientLink>
//                 </li>
//               </ul>
//             </div> */}
//             <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base  md:font-semibold  md:text-xl">KnowMore</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-[#023047]  txt-small">
//                 <li>
//                 <li>
//                   <LocalizedClientLink
//                     className="hover:text-ui-fg-base  md:font-semibold  md:text-xl"
//                     href={`/aboutus`}
//                   >
//                     About us
//                   </LocalizedClientLink>
//                 </li>
//                   <LocalizedClientLink
//                     className="hover:text-ui-fg-base  md:font-semibold  md:text-xl"
//                     href={`/PrivacyPolicy`}
//                   >
//                     Privacy policy
//                   </LocalizedClientLink>
//                 </li>
//                 <li>
//                   <LocalizedClientLink
//                     className="hover:text-ui-fg-base  md:font-semibold  md:text-xl"
//                     href={`/tnc`}
//                   >
//                     Terms and conditions
//                   </LocalizedClientLink>
//                 </li>

//                 <li>
//                   <LocalizedClientLink
//                     className="hover:text-ui-fg-base  md:font-semibold  md:text-xl"
//                     href={`/ShippingPolicy`}
//                   >
//                     Shipping Policy
//                   </LocalizedClientLink>
//                 </li>
//               </ul>
//             </div>
//             <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base  md:font-semibold  md:text-xl">Help</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-[#023047]  txt-small">


//                 <li>
//                   <LocalizedClientLink
//                     className="hover:text-ui-fg-base  md:font-semibold  md:text-xl"
//                     href={`/support`}
//                   >
//                     Contact Us
//                   </LocalizedClientLink>
//                 </li>
// {/*                 
//                 <li>
//                   <LocalizedClientLink
//                     className="hover:text-ui-fg-base  md:font-semibold  md:text-xl"
//                     href={`/Support`}
//                   >
//                     Return And Exchange
//                   </LocalizedClientLink>
//                 </li> */}
//                 <li>
//                   <LocalizedClientLink
//                     className="hover:text-ui-fg-base  md:font-semibold  md:text-xl"
//                     href={`/FAQ`}
//                   >
//                     Faq
//                   </LocalizedClientLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full mb-16 justify-between text-[#023047]  ">
//           <Text className="txt-compact-small  md:font-semibold  md:text-xl ">
//             © {new Date().getFullYear()} CharanDhul Store. All rights
//             reserved.
//           </Text>
//           {/* <MedusaCTA /> */}
//         </div>
//       </div>
//     </footer>
//   )
// }


import { Text, clx } from "@medusajs/ui"
import Image from 'next/image'
import PayImg from "../../../../../public/web-payments.png";
import { getCategoriesList, getCollectionsList } from "@lib/data"
import { Facebook } from "@medusajs/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Link from "next/link"
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col md:flex-row flex-wrap justify-center py-10 gap-x-10 gap-y-5 md:gap-y-0">
          <div className="flex flex-col gap-y-4 ">
            <span className="text-xs text-gray-500 uppercase font-semibold">
              Charandhul
            </span>
            <p className="text-xl md:w-[60%] w-[90%]">
              Follow us on social media to get the latest updates and offers
            </p>
            {/* <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className=" rounded-full border-[1px] border-gray-100 shadow-sm px-5 py-3 w-[85%] text-sm outline-none"
              />
              <button className="w-32 rounded-full text-white bg-green-400 opacity-80 px-3 py-3 text-sm absolute right-0 hover:bg-purple-400 transition-all transform duration-150">
                Submit
              </button>
            </div> */}
            <div className="flex flex-row gap-x-2"> 
                <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-black hover:text-white cursor-pointer border-2">
              <Link href="https://www.facebook.com/sahil.nair.161">
                <FaFacebookF size={20} />
              </Link>
            </div>
              <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-black hover:text-white cursor-pointer border-2">
                <Link href="https://x.com/charandhulStore">
                  {" "}
                  <FaTwitter size={20} />
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-black hover:text-white cursor-pointer border-2">
                <Link href="https://www.youtube.com/channel/UC9dDpmCB-X9RMjHHNZtbBrg">
                  <FaYoutube size={20} />
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-black hover:text-white cursor-pointer  border-2">
                <Link href="https://www.instagram.com/charandhul/">
                  <FaInstagram size={20} />
                </Link>
              </div>
            </div></div>
          <div className="flex flex-row gap-x-8 mt-10 lg:mt-0">
            <div>
              {product_categories && product_categories?.length > 0 && (
                <div className="flex flex-col gap-y-5">
                  <span className="text-xs text-gray-500 uppercase font-semibold">
                    Categories
                  </span>
                  <ul
                    className="grid grid-cols-1 gap-2"
                    data-testid="footer-categories"
                  >
                    {product_categories?.slice(0, 6).map((c) => {
                      if (c.parent_category) {
                        return
                      }

                      const children =
                        c.category_children?.map((child) => ({
                          name: child.name,
                          handle: child.handle,
                          id: child.id,
                        })) || null

                      return (
                        <li
                          className="flex flex-col gap-2 text-[18px] text-black"
                          key={c.id}
                        >
                          <LocalizedClientLink
                            className={clx("hover:text-ui-fg-base")}
                            href={`/categories/${c.handle}`}
                            data-testid="category-link"
                          >
                            {c.name}
                          </LocalizedClientLink>
                          {children && (
                            <ul className="grid grid-cols-1 ml-3 gap-2">
                              {children &&
                                children.map((child) => (
                                  <li key={child.id}>
                                    <LocalizedClientLink
                                      className="hover:text-ui-fg-base"
                                      href={`/categories/${child.handle}`}
                                      data-testid="category-link"
                                    >
                                      {child.name}
                                    </LocalizedClientLink>
                                  </li>
                                ))}
                            </ul>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xs text-gray-500 uppercase font-semibold">
                Get to Know us
              </span>
              <ul className="grid grid-cols-1 gap-y-5 text-[18px] mt-5">
                <li>
                  <LocalizedClientLink
                    href="/ShippingPolicy"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    ShippingPolicy
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/PrivacyPolicy"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    PrivacyPolicy
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/tnc"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Terms & Conditions{" "}
                  </LocalizedClientLink>
                </li>

              </ul>

            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xs text-gray-500 uppercase font-semibold">
                HELP
              </span>
              <ul className="grid grid-cols-1 gap-y-5 text-[18px] mt-5">
                <li>
                  <LocalizedClientLink
                    href="/Contactus"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Contact Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/FAQ"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    FAQ
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/return-exchage"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Return & Exchange
                  </LocalizedClientLink>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray-200 py-10 px-3 md:px-20 flex justify-between gap-x-5 flex-col mdf:flex-row">
          <span className="text-lg font-semibold pb-5 text-blue-600 ">100% Payment Protection, Easy Return Policy</span>
          <Image
            src={PayImg}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="border-t-[1px] border-gray-200 py-10 px-3 md:px-20 flex justify-between gap-x-5">

          <p className="text-gray-400 text-sm">
            These Terms will be applied fully and affect to your use of this
            Website. By using this Website, you agreed to accept all terms and
            conditions written in here. You must not use this Website if you
            disagree with any of these Website Standard
          </p>
          <div>
            <Facebook />
          </div>
        </div>
      </div>
    </footer>
  )
}
