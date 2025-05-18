import { PenTool as Tool, Truck, ShoppingBag, Star } from "lucide-react";
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose MowMore LLC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="h-10 w-10 text-primary" />,
                title: "Mobile Service",
                description:
                  "We come to you! Our mobile service brings expert equipment repair right to your doorstep.",
              },
              {
                icon: <Tool className="h-10 w-10 text-primary" />,
                title: "Shop Service",
                description:
                  "Drop off your equipment at our fully equipped workshop for comprehensive repairs and maintenance.",
              },
              {
                icon: <ShoppingBag className="h-10 w-10 text-primary" />,
                title: "Sales",
                description:
                  "Browse our selection of high-quality lawn care equipment, accessories, and parts.",
              },
              {
                icon: <Star className="h-10 w-10 text-primary" />,
                title: "Expert Team",
                description:
                  "Our certified technicians have years of experience with all brands and types of lawn equipment.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]"
              >
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
