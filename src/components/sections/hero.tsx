import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wrench, ShoppingBag, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="bg-black/50 p-6 rounded-lg backdrop-blur-xs">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Professional Lawn Mower Repair & Sales
            </h1>
            <p className="mt-6 text-lg leading-7 text-white">
              Expert mobile and in-shop repair services for all makes and
              models. We bring professional repair to your doorstep, or visit
              our full-service shop.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#2C5F2D] hover:bg-[#1a3e1a]"
              >
                <Link href="/contact">
                  <Wrench className="mr-2 h-5 w-5" />
                  Book Repair Service
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-[#2C5F2D] border-[#2C5F2D] hover:bg-[#F5F5F5]"
              >
                <Link href="/services">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Browse Mowers
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-x-6">
            <div className="bg-white/90 backdrop-blur-xs p-3 rounded-lg">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[
                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
                    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
                    "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
                  ].map((avatar, index) => (
                    <img
                      key={index}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src={avatar}
                      alt={`Customer ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Over 500+ satisfied customers
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/gallery"
              className="flex items-center text-sm font-semibold text-white"
            >
              View our work <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
