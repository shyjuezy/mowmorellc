import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    title: "Mobile Repair Service",
    description:
      "Our fully equipped mobile workshop brings professional repair services to your doorstep, saving you time and hassle.",
    image:
      "https://images.pexels.com/photos/5971203/pexels-photo-5971203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    features: [
      "No need to transport your heavy equipment",
      "Same-day emergency service available",
      "Professional diagnostics and repair",
      "Comprehensive service area coverage",
    ],
    link: "/services#mobile",
  },
  {
    title: "In-Shop Repair",
    description:
      "For more complex repairs, our fully equipped shop offers comprehensive service for all lawn mower makes and models.",
    image:
      "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    features: [
      "Complete diagnostics and troubleshooting",
      "Engine rebuilds and major repairs",
      "Blade sharpening and balancing",
      "Preventative maintenance packages",
    ],
    link: "/services#shop",
  },
  {
    title: "New Mower Sales",
    description:
      "Shop our selection of premium lawn mowers from top brands, with expert guidance to find the perfect match for your needs.",
    image:
      "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    features: [
      "Wide selection of top brands",
      "All products fully assembled and tested",
      "Trade-in options available",
      "Extended warranty packages",
    ],
    link: "/services#sales",
  },
];

export default function ServicesSection() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Professional lawn mower services to keep your equipment running at
            peak performance, whether you need mobile repair, in-shop service,
            or a new mower.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]"
            >
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primary mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="flex items-center text-primary font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-hover"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
