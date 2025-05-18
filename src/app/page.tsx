import { ArrowRight, CheckCircle2, PenTool as Tool, Truck, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import TestimonialsSection from "@/components/sections/testimonials";
import GalleryPreview from "@/components/sections/gallery-preview";
import BrandsSection from "@/components/sections/brands";
import CtaSection from "@/components/sections/cta";
import MapSection from "@/components/sections/map";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <div className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose GreenCut Pro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="h-10 w-10 text-[#2C5F2D]" />,
                title: "Mobile Service",
                description: "We come to you, saving time and hassle with our fully equipped mobile workshop."
              },
              {
                icon: <Tool className="h-10 w-10 text-[#2C5F2D]" />,
                title: "Expert Technicians",
                description: "Certified professionals with years of experience in lawn mower repair."
              },
              {
                icon: <ShoppingBag className="h-10 w-10 text-[#2C5F2D]" />,
                title: "Quality Parts",
                description: "We use only genuine or high-quality compatible parts for all repairs."
              },
              {
                icon: <Star className="h-10 w-10 text-[#2C5F2D]" />,
                title: "Satisfaction Guaranteed",
                description: "Our work is backed by a 90-day warranty on all repairs and services."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GalleryPreview />
      <BrandsSection />
      <TestimonialsSection />
      <MapSection />
      <CtaSection />
    </div>
  );
}