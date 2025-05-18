import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          {/* Brand and description */}
          <div className="space-y-4 xl:col-span-1">
            <Link href="/" className="text-xl font-bold">
              GreenCut Pro
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Professional lawn mower repair and sales services, bringing expertise to your doorstep.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                    Mobile Repair
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                    In-Shop Repair
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                    New Mower Sales
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-sm leading-6 text-gray-300 hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="mt-12 xl:col-span-1 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@greencutpro.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Green Street, Lawn City</span>
              </div>
              <Button className="mt-2 w-full bg-[#2C5F2D] hover:bg-[#1a3e1a]">
                <Link href="/contact">Book Service</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} GreenCut Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}