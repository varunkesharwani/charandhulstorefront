
import Image from "next/image";
import FirstImg from "../../../../../public/1.jpeg";
import SecondImg from "../../../../../public/2.jpeg";
import ThirdImg from "../../../../../public/3.jpeg";
import FourthImg from "../../../../../public/4.jpeg";
import LocalizedClientLink from "../localized-client-link";
export default function NewPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] px-2">
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48">
          <div className="container grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#023047]">
                  Crafting Copper Cookware Since 1972
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl text-[#023047]">
                  Charandhul was founded by a family of master coppersmiths who have been honing their craft for generations. Our commitment to quality and tradition is evident in every piece we create.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <LocalizedClientLink
                  href="/store"
                  className="inline-flex h-10 items-center justify-center rounded-md text-white bg-[#023047f8] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Explore Collection
                </LocalizedClientLink>
                
              </div>
            </div>
            <Image
              src={FirstImg}
              alt="Copper Utensils"
              width={650}
              height={650}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48">
          <div className="container grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Craftsmanship</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#023047]">
                  Handcrafted with Care
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#023047]">
                  Each Charandhul piece is meticulously handcrafted by our skilled artisans, ensuring exceptional quality and attention to detail. The result is a collection of timeless, heirloom-quality cookware.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <LocalizedClientLink
                  href="/store"
                  className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white bg-[#023047f8]"
                  prefetch={false}
                >
                  Explore Collection
                </LocalizedClientLink>
              
              </div>
            </div>
            <div className="grid gap-4">
              <Image
                src={SecondImg}
                alt="Copper Hammering"
                width={550}
                height={310}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={ThirdImg}
                  alt="Copper Polishing"
                  width={270}
                  height={270}
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                />
                <Image
                  src={FourthImg}
                  alt="Copper Finishing"
                  width={270}
                  height={270}
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CookingPotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20" />
      <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      <path d="m4 8 16-4" />
      <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
    </svg>
  );
}
