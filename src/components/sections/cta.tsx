import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar, Clock } from "lucide-react";

export default function CtaSection() {
  return (
    <div className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Equipment Running Like New?
          </h2>
          <p className="text-lg mb-8">
            Whether you need a mobile repair, shop service, or are looking for a
            new mower, we&apos;re here to help. Contact us today to schedule a
            service or consultation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-gray-600">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-xs">
              <PhoneCall className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Call Us Now</h3>
              <p className="text-lg font-bold">(555) 123-4567</p>
              <p className="text-sm text-gray-600">Quick response guaranteed</p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-xs">
              <Calendar className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Schedule Online</h3>
              <p className="text-sm text-gray-600 mb-3">
                Book a service at your convenience
              </p>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-xs">
              <Clock className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>Monday-Friday: 8am-6pm</li>
                <li>Saturday: 9am-4pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg text-black max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
            <p className="mb-6 text-gray-600">
              Leave your contact information and we&apos;ll get back to you
              within 24 hours with a free service estimate.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option value="">Select a service</option>
                  <option value="mobile">Mobile Repair</option>
                  <option value="shop">In-Shop Repair</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="purchase">New Mower Purchase</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Tell us about your lawn mower issue"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover"
              >
                Get Free Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
