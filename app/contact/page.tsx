"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! We'll be in touch soon.");
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <div>
      {/* Hero section */}
      <div className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have questions about our services or want to schedule a repair?
              We're here to help! Get in touch with our team today.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact information and form */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-[#2C5F2D] bg-opacity-10 rounded-full p-3">
                      <Phone className="h-6 w-6 text-[#2C5F2D]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-xl mb-1">(555) 123-4567</p>
                    <p className="text-gray-600 text-sm">For immediate assistance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-[#2C5F2D] bg-opacity-10 rounded-full p-3">
                      <Mail className="h-6 w-6 text-[#2C5F2D]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-xl mb-1">contact@greencutpro.com</p>
                    <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-[#2C5F2D] bg-opacity-10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-[#2C5F2D]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-xl mb-1">123 Green Street, Lawn City</p>
                    <p className="text-gray-600 text-sm">Visit our shop for in-person service</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-[#2C5F2D] bg-opacity-10 rounded-full p-3">
                      <Clock className="h-6 w-6 text-[#2C5F2D]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Monday-Friday:</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="h-64 bg-[#F5F5F5] rounded-lg relative overflow-hidden">
                {/* This is a placeholder for a real map integration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 text-[#2C5F2D] mx-auto mb-2" />
                    <p className="font-medium">GreenCut Pro Shop Location</p>
                    <p className="text-sm text-gray-600">123 Green Street, Lawn City</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Needed</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="mobile-repair">Mobile Repair</SelectItem>
                                <SelectItem value="shop-repair">In-Shop Repair</SelectItem>
                                <SelectItem value="maintenance">Maintenance</SelectItem>
                                <SelectItem value="purchase">New Mower Purchase</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your lawn mower issue or service needs" 
                              rows={5}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#2C5F2D] hover:bg-[#1a3e1a]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service area */}
      <div className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Service Area</h2>
            <p className="text-lg text-gray-600">
              Our mobile repair service covers a wide area. Check if we service your location
              and what days we're in your neighborhood.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                region: "North Area",
                cities: ["Northville", "Uptown", "Highland Park", "Pine Ridge"],
                days: "Monday, Wednesday, Friday"
              },
              {
                region: "South Area",
                cities: ["Southfield", "Downtown", "Riverside", "Oak Grove"],
                days: "Tuesday, Thursday, Saturday"
              },
              {
                region: "East Area",
                cities: ["Eastland", "Lakeside", "Harbor View", "Sunrise Valley"],
                days: "Monday, Wednesday, Friday"
              },
              {
                region: "West Area",
                cities: ["Westwood", "Sunset Hills", "Valley View", "Mountain Edge"],
                days: "Tuesday, Thursday, Saturday"
              }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">{area.region}</h3>
                <p className="text-sm font-medium text-[#2C5F2D] mb-4">Service Days: {area.days}</p>
                <h4 className="font-medium text-sm mb-2">Cities Served:</h4>
                <ul className="space-y-1">
                  {area.cities.map((city, i) => (
                    <li key={i} className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2C5F2D] mr-2"></span>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Don't see your area? Contact us to check if we can accommodate your location.
            </p>
          </div>
        </div>
      </div>
      
      {/* FAQ section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How does your mobile repair service work?",
                  answer: "Our mobile repair service brings our fully-equipped workshop directly to your location. We'll diagnose and repair your lawn mower on-site, saving you the hassle of transporting your equipment. We carry common parts and can order specialized parts if needed."
                },
                {
                  question: "What brands do you service?",
                  answer: "We service all major lawn mower brands, including Honda, Toro, John Deere, Craftsman, Husqvarna, Cub Cadet, and many more. Our technicians are certified and experienced with a wide range of equipment."
                },
                {
                  question: "Do you offer warranty on repairs?",
                  answer: "Yes, all our repairs come with a 90-day warranty on parts and labor. If the same issue recurs within this period, we'll fix it at no additional cost."
                },
                {
                  question: "How do I schedule a service?",
                  answer: "You can schedule a service by calling us at (555) 123-4567, filling out our contact form, or visiting our shop in person. We'll work with you to find a convenient time for your repair."
                },
                {
                  question: "Do you sell new lawn mowers?",
                  answer: "Yes, we offer a selection of high-quality new lawn mowers from top brands. Visit our shop to see current inventory or contact us for specific models."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-[#F5F5F5] p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}