import Image from "next/image";
import FirstImg from "../../../../../public/1.jpeg";
import SecondImg from "../../../../../public/2.jpeg";
import ThirdImg from "../../../../../public/3.jpeg";
import FourthImg from "../../../../../public/4.jpeg";
import LocalizedClientLink from "../localized-client-link";
export default function NewPage() {
  const fourthIMage="https://res.cloudinary.com/dveckkrb6/image/upload/v1728518171/IMG-20241010-WA0003_ako6fr.jpg";
  const fifThImage="https://res.cloudinary.com/dveckkrb6/image/upload/v1728575674/IMG_6940_jh2y1b.jpg";
  return (
    <div className="flex flex-col min-h-[100dvh] pt-12">
      <main className="flex-1">
        <section className="w-full py-8 sm:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#023047]">
                    A Legacy in Brass and Copper Craftsmanship
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-[#023047]">
                    Charandhul, renowned for its exquisite brass and copper products, epitomizes centuries of artisanal excellence and cultural heritage. Rooted in the ancient traditions of metalworking, Charandhul creations blend meticulous craftsmanship with historical artistry.
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
                height={500}
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
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
                  src={fifThImage}
                  alt="Copper Hammering"
                  width={550}
                  height={250}
                  className="mx-auto aspect-[11/5] overflow-hidden rounded-xl object-cover"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src={fourthIMage}

                    // //@ts-ignore
                    // src="https://res.cloudinary.com/dveckkrb6/image/upload/v1728575487/IMG_6872_qrwrxg.jpg"
                    alt="Copper Polishing"
                    width={270}
                    height={200}
                    className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
                  />
                  <Image
                    src={FourthImg}
                    alt="Copper Finishing"
                    width={270}
                    height={200}
                    className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
   
  );
}