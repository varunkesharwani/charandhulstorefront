import { Suspense } from "react";
import Image from "next/image";
import { listRegions } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";
import { ShoppingBag } from "@medusajs/icons";
import Logo from "../../../../../public/logo.png";
import { TopHeader } from "../topnav";
import { MdAccountCircle } from "react-icons/md";

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions);

  return (
    <div className="sticky top-0 inset-x-0 z-50 group bg-[#ffb703]">
      <header className="relative h-20 mx-auto border-b duration-200 bg-[] border-ui-border-base">
        <nav className="content-container txt-small-plus text-[#023047] flex items-center justify-between w-full h-full">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center justify-center ">
            <LocalizedClientLink
              href="/"
              className="txt-medium-plus hover:text-[#31572c] uppercase align-middle justify-center p-2"
              data-testid="nav-store-link"
            >
              <Image src={Logo} width={250} alt="Picture of the author" />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full w-12 ">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-[#31572c] text-lg"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-[#31572c] text-lg"
                href="/account"
                data-testid="nav-account-link"
              >
                <MdAccountCircle size={40} /> 
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-[#31572c] flex gap-2 text-lg"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <ShoppingBag  /> (0)
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
