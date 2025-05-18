import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Award, Users, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      {/* Hero section */}
      <div className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About MowMore LLC
            </h1>
            <p className="text-xl text-gray-600">
              Serving the community with expert lawn mower repair and sales
              services since 2005.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#2C5F2D] bg-opacity-20 text-gray-100 font-medium rounded-full mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Tradition of Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                MowMore LLC was founded in 2005 by Michael Green, a certified
                small engine mechanic with a passion for lawn equipment and
                customer service. What started as a small repair shop has grown
                into a full-service operation offering mobile repairs, in-shop
                services, and new equipment sales.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our journey began when Michael noticed a gap in the market for
                high-quality, convenient lawn mower repair services. He started
                by offering mobile repairs to local residents, bringing his
                expertise directly to their doorsteps. The business quickly grew
                through word-of-mouth recommendations, leading to the
                establishment of our current full-service facility.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#2C5F2D]">17+</p>
                  <p className="text-gray-600">Years in Business</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#2C5F2D]">10k+</p>
                  <p className="text-gray-600">Repairs Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#2C5F2D]">5k+</p>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#2C5F2D]">25+</p>
                  <p className="text-gray-600">Mile Service Radius</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg w-full h-full">
              {/* <img
                src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="MowMore LLC founder"
                className="w-full h-auto"
              /> */}
              <Image
                src="/logo.png"
                alt="MowMore LLC founder"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Team section */}
      <div className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#2C5F2D] bg-opacity-20 text-gray-100 font-medium rounded-full mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Experts
            </h2>
            <p className="text-lg text-gray-600">
              Our team of certified technicians brings decades of combined
              experience to every repair and consultation. We&apos;re proud of
              our expertise and commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Green",
                title: "Founder & Master Technician",
                image:
                  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
                bio: "With over 25 years of experience, Michael is certified in small engine repair and maintenance for all major brands.",
                certifications: [
                  "Honda Certified",
                  "Toro Professional",
                  "Briggs & Stratton Master Service",
                ],
              },
              {
                name: "Sarah Johnson",
                title: "Service Manager",
                image:
                  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
                bio: "Sarah oversees all service operations, ensuring every repair meets our high standards of quality and customer satisfaction.",
                certifications: [
                  "Customer Service Expert",
                  "Operations Management",
                  "Quality Control Specialist",
                ],
              },
              {
                name: "James Wilson",
                title: "Senior Technician",
                image:
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
                bio: "James specializes in complex engine rebuilds and electrical systems. He leads our mobile repair team.",
                certifications: [
                  "Electrical Systems Expert",
                  "Kohler Engine Certified",
                  "Husqvarna Professional",
                ],
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 relative overflow-hidden">
                  {/* <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  /> */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#2C5F2D] font-medium mb-4">
                    {member.title}
                  </p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>

                  <div>
                    <h4 className="font-medium mb-2">Certifications:</h4>
                    <ul className="space-y-1">
                      {member.certifications.map((cert, i) => (
                        <li key={i} className="flex items-start">
                          <div className="shrink-0 mt-1">
                            <Award className="h-4 w-4 text-[#2C5F2D]" />
                          </div>
                          <span className="ml-2 text-sm">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary bg-opacity-20 text-primary-foreground font-medium rounded-full mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600">
              At MowMore LLC, our values guide everything we do, from how we
              interact with customers to how we approach each repair task.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-[#2C5F2D]" />,
                title: "Quality Workmanship",
                description:
                  "We never cut corners. Every repair is performed to the highest standards using quality parts and meticulous attention to detail.",
              },
              {
                icon: <Users className="h-12 w-12 text-[#2C5F2D]" />,
                title: "Customer Satisfaction",
                description:
                  "Our customers are at the heart of everything we do. We're not satisfied until you're completely happy with our service.",
              },
              {
                icon: <Clock className="h-12 w-12 text-[#2C5F2D]" />,
                title: "Reliability",
                description:
                  "We understand that your time is valuable. We promise prompt service, clear communication, and reliable repairs every time.",
              },
              {
                icon: <Check className="h-12 w-12 text-[#2C5F2D]" />,
                title: "Integrity",
                description:
                  "We believe in honest business practices. You'll always receive straightforward advice and fair pricing with no surprises.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-[#F5F5F5] p-8 rounded-lg">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us section */}
      <div className="py-16 md:py-24 bg-[#2C5F2D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose MowMore LLC?
            </h2>
            <p className="text-xl">
              There are many reasons why customers trust us with their lawn
              mower repair and purchase needs. Here are just a few things that
              set us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Certified technicians with years of experience",
              "Convenient mobile repair service",
              "90-day warranty on all repairs",
              "Transparent pricing with no hidden fees",
              "Genuine parts or high-quality replacements",
              "Same-day emergency service often available",
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="shrink-0 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="ml-3 text-lg">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-6 text-xl">
              Ready to experience the MowMore LLC difference?
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">
                Contact Us Today <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
