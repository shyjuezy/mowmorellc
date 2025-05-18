"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

// Gallery image categories and images
const categories = [
  { id: "all", name: "All Images" },
  { id: "repairs", name: "Repairs & Maintenance" },
  { id: "products", name: "Products & Inventory" },
  { id: "mobile", name: "Mobile Workshop" },
  { id: "before-after", name: "Before & After" }
];

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/2307298/pexels-photo-2307298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Lawn mower engine repair",
    title: "Engine Rebuild",
    category: "repairs"
  },
  {
    src: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Mobile repair van",
    title: "Our Mobile Workshop",
    category: "mobile"
  },
  {
    src: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "New push mower",
    title: "Premium Push Mower",
    category: "products"
  },
  {
    src: "https://images.pexels.com/photos/2826131/pexels-photo-2826131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Riding lawn mower",
    title: "Professional Riding Mower",
    category: "products"
  },
  {
    src: "https://images.pexels.com/photos/194175/pexels-photo-194175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Freshly mowed lawn",
    title: "After Service Results",
    category: "before-after"
  },
  {
    src: "https://images.pexels.com/photos/5971203/pexels-photo-5971203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Repairing a mower outdoors",
    title: "On-Site Service",
    category: "mobile"
  },
  {
    src: "https://images.pexels.com/photos/1619778/pexels-photo-1619778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Close up of lawn mower blade",
    title: "Blade Sharpening",
    category: "repairs"
  },
  {
    src: "https://images.pexels.com/photos/589/garden-gardening-grass-mow.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Mower in action",
    title: "After Repair Performance",
    category: "before-after"
  },
  {
    src: "https://images.pexels.com/photos/3823175/pexels-photo-3823175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Workshop tools",
    title: "Our Workshop Equipment",
    category: "repairs"
  },
  {
    src: "https://images.pexels.com/photos/4784087/pexels-photo-4784087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Lawn mower repair parts",
    title: "Genuine Replacement Parts",
    category: "repairs"
  },
  {
    src: "https://images.pexels.com/photos/5971310/pexels-photo-5971310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Mobile repair service",
    title: "Mobile Repair in Action",
    category: "mobile"
  },
  {
    src: "https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Commercial mower",
    title: "Commercial Grade Equipment",
    category: "products"
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  
  // Filter images based on active category
  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);
  
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our gallery of recent work, including before and after repair photos, 
            our inventory of new mowers, and our mobile workshop setup.
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory === category.id ? "bg-[#2C5F2D] hover:bg-[#1a3e1a]" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-64 bg-gray-100"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-bold">{image.title}</h3>
                <p className="text-sm capitalize">{image.category.replace('-', ' & ')}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold mb-2">No images found</h3>
            <p className="text-gray-600 mb-6">There are no images in this category yet.</p>
            <Button onClick={() => setActiveCategory("all")}>View All Images</Button>
          </div>
        )}
        
        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-[#F5F5F5] p-8 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">See Our Work in Person</h2>
            <p className="text-gray-600 mb-6">
              Interested in our services or products? Contact us to schedule a visit
              to our shop or book a mobile repair service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#2C5F2D] hover:bg-[#1a3e1a]">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          {selectedImage && (
            <div>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{selectedImage.title}</h2>
                <p className="text-gray-600 capitalize">{selectedImage.category.replace('-', ' & ')}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}