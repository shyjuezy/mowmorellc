"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "The mobile repair service was a game-changer for me. They fixed my riding mower right in my driveway, and I was back to mowing the same day!",
    author: "Sarah Johnson",
    title: "Homeowner",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    rating: 5,
  },
  {
    quote:
      "Excellent customer service and fair pricing. The technician was knowledgeable and took time to explain what was wrong with my mower and how to prevent future issues.",
    author: "Mike Thompson",
    title: "Small Business Owner",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    rating: 5,
  },
  {
    quote:
      "I purchased a new zero-turn mower, and the guidance I received was invaluable. They helped me choose the perfect model for my large property. Couldn't be happier!",
    author: "Rebecca Miller",
    title: "Estate Manager",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    rating: 5,
  },
  {
    quote:
      "Fast, professional service with transparent pricing. They got my commercial mowers back in service quickly, which saved me money by minimizing downtime.",
    author: "James Wilson",
    title: "Landscaping Business",
    avatar:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, nextSlide]);

  // Pause autoplay on hover
  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);

  return (
    <div className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from our satisfied
            customers about their experiences with our services.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl italic text-center mb-8">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <Avatar className="h-12 w-12 ring-2 ring-primary/90 mx-2">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.author}
                        />
                        <AvatarFallback>
                          {testimonial.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white shadow-md hover:bg-gray-100 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white shadow-md hover:bg-gray-100 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
