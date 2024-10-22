// import Image from "next/image";
// import Logo from "../../../../../public/logo.png";
// import { Suspense } from "react"
// import { listRegions } from "@lib/data"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import CartButton from "@modules/layout/components/cart-button"
// import SideMenu from "@modules/layout/components/side-menu"
// import NavbarLink from "@modules/common/components/nav-link"
// import Link from "next/link"

// export default async function Nav() {
//   const regions = await listRegions().then((regions) => regions)

//   return (
//     <div className="sticky top-0 inset-x-0 z-50 group">
//       <header className="relative h-16 mx-auto duration-200 bg-white ">
//         <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
//           <div className="flex-1 basis-0 h-full flex items-center">
//             <div className="h-full">
//               <SideMenu regions={regions} />
//             </div>
//             <div>
//               <Link href={"/"} className="font-semibold text-xl">
//               <Image src={Logo} width={200} alt="Picture of the author" /> 
//               </Link>
//             </div>
//           </div>

//           <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
//             <div className="hidden small:flex items-center gap-x-10 h-full text-sm">
//               <NavbarLink href="/">Home</NavbarLink>
//               <NavbarLink href="/store">Store</NavbarLink>
//               <NavbarLink href="/account">My Account</NavbarLink>
//               {/* <NavbarLink href="/contact">Contact</NavbarLink> */}
//               {process.env.FEATURE_SEARCH_ENABLED && (
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base"
//                   href="/search"
//                   scroll={false}
//                   data-testid="nav-search-link"
//                 >
//                   Search
//                 </LocalizedClientLink>
//               )}
//             </div>
//             <Suspense
//               fallback={
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base flex gap-2 bg-[#032A3E] text-white w-fit"
//                   href="/cart"
//                   data-testid="nav-cart-link"
//                 >
//                   Cart (0)
//                 </LocalizedClientLink>
//               }
//             >
//               <CartButton />
//             </Suspense>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }


import Image from "next/image";
import Logo from "../../../../../public/logo.png";
import { Suspense } from "react";
import { listRegions } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";
import NavbarLink from "@modules/common/components/nav-link";
import Link from "next/link";

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions);

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto duration-200 bg-white">
        <nav className="content-container text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular relative">
          {/* Left section: Side Menu */}
          <div className="flex items-center h-full z-10">
            <SideMenu regions={regions} />
          </div>

          {/* Center section: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex items-center">
            <Link href={"/"}>
              <Image src={Logo} width={200} alt="Logo" className="block" />
            </Link>
          </div>

          {/* Right section: Navigation Links and Cart */}
          <div className="flex items-center gap-x-6 h-full z-10">
            <div className="hidden small:flex items-center gap-x-10 h-full text-sm">
              <NavbarLink href="/">Home</NavbarLink>
              <NavbarLink href="/store">Store</NavbarLink>
              <NavbarLink href="/account">My Account</NavbarLink>
              {/* <NavbarLink href="/contact">Contact</NavbarLink> */}
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2 bg-[#032A3E] text-white w-fit"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  );
}
