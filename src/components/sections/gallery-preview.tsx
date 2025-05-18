"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/gallery-1.jpg",
    alt: "Lawn mower repair in progress",
    title: "Engine Rebuild",
    category: "repair",
  },
  {
    src: "/gallery/gallery-2.jpg",
    alt: "New riding mower on display",
    title: "Premium Riding Mower",
    category: "product",
  },
  {
    src: "/gallery/gallery-3.jpg",
    alt: "Freshly mowed lawn",
    title: "After Service Results",
    category: "result",
  },
  {
    src: "/gallery/gallery-4.jpg",
    alt: "Mobile repair van",
    title: "Mobile Workshop",
    category: "mobile",
  },
];

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Gallery</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our gallery of recent work, including before and after repair
            photos, current inventory of new mowers, and our mobile workshop
            setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-64"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-bold">{image.title}</h3>
                <p className="text-sm capitalize">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-[#2C5F2D] hover:bg-[#1a3e1a]">
            <Link href="/gallery">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          <div className="relative">
            {selectedImage && (
              <div className="relative w-full aspect-video">
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
