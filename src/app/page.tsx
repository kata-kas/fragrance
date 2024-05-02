import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import {ChevronRightIcon} from "@radix-ui/react-icons";
import {FlowerIcon} from "@/components/icons/flower-icon";
import {MobileMenu} from "@/components/mobile-menu";
import {ProductCard} from "@/components/product-card";
import {SparklesCore} from "@/components/sparkles";
import Image from "next/image";

export default function Home(){
  return (
      <>
        <div className="flex flex-col min-h-[100dvh]">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <MobileMenu className="lg:hidden block" />
            <Link className="flex items-center justify-center" href="#">
              <FlowerIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">Fragrance Atelier</span>
            </Link>
            <nav className="lg:flex hidden ml-auto gap-4 sm:gap-6">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Shop
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                About
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Contact
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Cart
              </Link>
            </nav>
          </header>
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="w-full absolute inset-0 h-screen">
                      <SparklesCore
                          id="tsparticlesfullpage"
                          background="transparent"
                          minSize={0.6}
                          maxSize={1.4}
                          particleDensity={100}
                          className="w-full h-full"
                          particleColor="#FAFA33"
                      />
                    </div>
                    <Image
                        alt="Perfume Bottle"
                        className="relative z-20 mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                        height="550"
                        src="/fragrance.jpeg"
                        width="550"
                    />
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Discover the Art of Fragrance
                      </h1>
                      <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                        Explore our collection of hand-decanted, artisanal fragrances and perfumes. Find your signature
                        scent.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link
                          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                          href="#"
                      >
                        Browse Collection
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Fragrances</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Discover our curated selection of hand-decanted, artisanal fragrances.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 border-t">
              <div className="container grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 px-4 md:px-6">
                <div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                      Discover Your Signature Scent
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Explore our collection of hand-decanted, artisanal fragrances and find the perfect scent for you.
                    </p>
                  </div>
                  <div className="mt-8 grid gap-4">
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                      <Link className="absolute inset-0 z-10" href="#">
                        <span className="sr-only">View</span>
                      </Link>
                      <img
                          alt="Amber Noir"
                          className="object-cover w-full h-64"
                          height={400}
                          src="/amber_noir.jpeg"
                          style={{
                            aspectRatio: "400/400",
                            objectFit: "cover",
                          }}
                          width={400}
                      />
                      <div className="bg-white p-4 dark:bg-gray-950">
                        <h3 className="font-bold text-xl">Amber Noir</h3>
                        <p className="text-sm text-gray-500">Amber, Woody</p>
                        <h4 className="font-semibold text-lg md:text-xl">$79.99</h4>
                      </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                      <Link className="absolute inset-0 z-10" href="#">
                        <span className="sr-only">View</span>
                      </Link>
                      <img
                          alt="Jasmine Mist"
                          className="object-cover w-full h-64"
                          height={400}
                          src="/jasmine_mist.jpeg"
                          style={{
                            aspectRatio: "400/400",
                            objectFit: "cover",
                          }}
                          width={400}
                      />
                      <div className="bg-white p-4 dark:bg-gray-950">
                        <h3 className="font-bold text-xl">Jasmine Mist</h3>
                        <p className="text-sm text-gray-500">Floral, Jasmine</p>
                        <h4 className="font-semibold text-lg md:text-xl">$59.99</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Product Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <Link
                            className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                            href="#"
                        >
                          <span>Floral</span>
                          <ChevronRightIcon className="h-5 w-5" />
                        </Link>
                        <Link
                            className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                            href="#"
                        >
                          <span>Woody</span>
                          <ChevronRightIcon className="h-5 w-5" />
                        </Link>
                        <Link
                            className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                            href="#"
                        >
                          <span>Citrus</span>
                          <ChevronRightIcon className="h-5 w-5" />
                        </Link>
                        <Link
                            className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                            href="#"
                        >
                          <span>Spicy</span>
                          <ChevronRightIcon className="h-5 w-5" />
                        </Link>
                        <Link
                            className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                            href="#"
                        >
                          <span>Fresh</span>
                          <ChevronRightIcon className="h-5 w-5" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Fragrance Atelier. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacy Policy
              </Link>
            </nav>
          </footer>
        </div>
      </>
  )
}


