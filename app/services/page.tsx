import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceCTA from "@/components/sections/cta";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero section */}
      <div className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional lawn mower services for both residential and commercial clients.
              Choose from our mobile repair, in-shop service, or browse our selection of new mowers.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Repair section */}
      <div id="mobile" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#2C5F2D] bg-opacity-20 text-[#2C5F2D] font-medium rounded-full mb-4">
                Mobile Service
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We Come To You</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our fully equipped mobile workshop brings professional lawn mower repair directly to your doorstep.
                Save time and avoid the hassle of transporting your equipment.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "No transportation hassle for bulky equipment",
                  "Same day service often available",
                  "Factory-trained technicians",
                  "Fully stocked mobile workshop",
                  "Service at your home or business"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-[#2C5F2D]" />
                    </div>
                    <p className="ml-3">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-[#F5F5F5] rounded-lg mb-8">
                <h3 className="font-bold mb-2">Service Area Coverage:</h3>
                <p>
                  We service a 25-mile radius around our shop location.
                  <Link href="/contact" className="text-[#2C5F2D] font-medium ml-1">
                    Check if we cover your area <ArrowRight className="inline h-4 w-4" />
                  </Link>
                </p>
              </div>
              
              <Button asChild className="bg-[#2C5F2D] hover:bg-[#1a3e1a]">
                <Link href="/contact">Schedule Mobile Repair</Link>
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5971203/pexels-photo-5971203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Mobile Lawn Mower Repair"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* In-Shop Repair section */}
      <div id="shop" className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="In-Shop Lawn Mower Repair"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1 bg-[#2C5F2D] bg-opacity-20 text-[#2C5F2D] font-medium rounded-full mb-4">
                Shop Service
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Full-Service Repair Shop</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our fully equipped shop offers comprehensive repair services for all lawn mower makes and models.
                From simple tune-ups to complex engine rebuilds, we have the tools and expertise to get the job done right.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Complete diagnostics and troubleshooting",
                  "Engine rebuilds and major repairs",
                  "Blade sharpening and balancing",
                  "Carburetor cleaning and rebuilding",
                  "Regular maintenance packages"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-[#2C5F2D]" />
                    </div>
                    <p className="ml-3">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-white rounded-lg mb-8">
                <h3 className="font-bold mb-2">Our Guarantee:</h3>
                <p>
                  All repair work comes with a 90-day warranty on parts and labor.
                  If the same issue recurs within the warranty period, we'll fix it at no additional cost.
                </p>
              </div>
              
              <Button asChild className="bg-[#2C5F2D] hover:bg-[#1a3e1a]">
                <Link href="/contact">Schedule Shop Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* New Mower Sales section */}
      <div id="sales" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#2C5F2D] bg-opacity-20 text-[#2C5F2D] font-medium rounded-full mb-4">
              Sales
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">New Mower Sales</h2>
            <p className="text-lg text-gray-600">
              Shop our selection of premium lawn mowers from top brands. Our experts will help you
              find the perfect match for your lawn care needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Push Mowers",
                image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
                description: "Ideal for smaller lawns. Available in manual, electric, and gas-powered models.",
                price: "Starting at $299",
                features: ["Lightweight and easy to maneuver", "Multiple cutting heights", "Available with or without bag"]
              },
              {
                title: "Self-Propelled Mowers",
                image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
                description: "Perfect for medium-sized lawns. Reduces effort while providing excellent cutting quality.",
                price: "Starting at $399",
                features: ["Front, rear, or all-wheel drive", "Variable speed control", "Mulching capability"]
              },
              {
                title: "Riding Mowers",
                image: "https://images.pexels.com/photos/2826131/pexels-photo-2826131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
                description: "For larger properties. Save time and energy with these powerful machines.",
                price: "Starting at $1,299",
                features: ["Comfortable seating", "Precise cutting control", "Multiple deck sizes available"]
              }
            ].map((mower, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={mower.image}
                    alt={mower.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{mower.title}</h3>
                  <p className="text-gray-600 mb-4">{mower.description}</p>
                  <p className="text-[#2C5F2D] font-bold mb-4">{mower.price}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {mower.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <Check className="h-4 w-4 text-[#2C5F2D]" />
                          </div>
                          <span className="ml-2 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full border-[#2C5F2D] text-[#2C5F2D] hover:bg-[#2C5F2D] hover:text-white">
                    <Link href="/contact">Request Info</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="mb-4 text-gray-600">
              Looking for a specific model or brand? Contact us to check availability.
            </p>
            <Button asChild className="bg-[#2C5F2D] hover:bg-[#1a3e1a]">
              <Link href="/contact">Contact Sales Team</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Maintenance Packages section */}
      <div className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#2C5F2D] bg-opacity-20 text-[#2C5F2D] font-medium rounded-full mb-4">
              Maintenance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Maintenance Packages</h2>
            <p className="text-lg text-gray-600">
              Keep your equipment running at peak performance with our scheduled maintenance packages.
              Regular maintenance extends the life of your lawn mower and prevents costly repairs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Tune-Up",
                price: "$89.99",
                description: "Essential maintenance for push mowers",
                features: [
                  "Oil change",
                  "Air filter replacement",
                  "Spark plug replacement",
                  "Blade sharpening",
                  "Basic safety inspection"
                ]
              },
              {
                title: "Premium Service",
                price: "$149.99",
                description: "Comprehensive service for all mower types",
                features: [
                  "Everything in Basic Tune-Up",
                  "Carburetor adjustment",
                  "Fuel system cleaning",
                  "Drive system inspection",
                  "Thorough cleaning",
                  "Detailed safety check"
                ],
                highlighted: true
              },
              {
                title: "Riding Mower Special",
                price: "$199.99",
                description: "Complete service for riding mowers",
                features: [
                  "Everything in Premium Service",
                  "Deck belt inspection",
                  "Steering system check",
                  "Battery service",
                  "Tire pressure adjustment",
                  "Electrical system testing"
                ]
              }
            ].map((package_, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden ${
                  package_.highlighted 
                    ? "bg-white border-2 border-[#2C5F2D] shadow-xl relative" 
                    : "bg-white shadow-md"
                }`}
              >
                {package_.highlighted && (
                  <div className="bg-[#2C5F2D] text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{package_.title}</h3>
                  <p className="text-gray-600 mb-4">{package_.description}</p>
                  <p className="text-2xl font-bold text-[#2C5F2D] mb-6">{package_.price}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {package_.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="h-5 w-5 text-[#2C5F2D]" />
                        </div>
                        <span className="ml-3">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={package_.highlighted ? "w-full bg-[#2C5F2D] hover:bg-[#1a3e1a]" : "w-full bg-gray-100 text-gray-800 hover:bg-gray-200"}
                  >
                    <Link href="/contact">Schedule Service</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ServiceCTA />
    </div>
  );
}