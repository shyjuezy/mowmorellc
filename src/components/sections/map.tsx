"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function MapSection() {
  const [activeArea, setActiveArea] = useState("north");
  
  const serviceAreas = {
    north: {
      name: "North Service Area",
      cities: ["Northville", "Uptown", "Highland Park", "Pine Ridge"],
      schedule: "Monday, Wednesday, Friday"
    },
    south: {
      name: "South Service Area",
      cities: ["Southfield", "Downtown", "Riverside", "Oak Grove"],
      schedule: "Tuesday, Thursday, Saturday"
    },
    east: {
      name: "East Service Area",
      cities: ["Eastland", "Lakeside", "Harbor View", "Sunrise Valley"],
      schedule: "Monday, Wednesday, Friday"
    },
    west: {
      name: "West Service Area",
      cities: ["Westwood", "Sunset Hills", "Valley View", "Mountain Edge"],
      schedule: "Tuesday, Thursday, Saturday"
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Service Area</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our mobile repair service covers a wide area. Check if we service your location
            and what days we're in your neighborhood.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Service area selector */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Select Your Area</h3>
              <div className="space-y-4">
                {Object.entries(serviceAreas).map(([key, area]) => (
                  <Button
                    key={key}
                    variant={activeArea === key ? "default" : "outline-solid"}
                    className={`w-full justify-start ${activeArea === key ? "bg-[#2C5F2D] hover:bg-[#1a3e1a]" : ""}`}
                    onClick={() => setActiveArea(key)}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    {area.name}
                  </Button>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-[#F5F5F5] rounded-lg">
                <h4 className="font-semibold mb-2">
                  {serviceAreas[activeArea as keyof typeof serviceAreas].name}
                </h4>
                <p className="text-sm mb-3">
                  <span className="font-medium">Service Days:</span>{" "}
                  {serviceAreas[activeArea as keyof typeof serviceAreas].schedule}
                </p>
                <div>
                  <span className="font-medium text-sm">Cities Served:</span>
                  <ul className="mt-2 space-y-1">
                    {serviceAreas[activeArea as keyof typeof serviceAreas].cities.map((city, index) => (
                      <li key={index} className="text-sm flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2C5F2D] mr-2"></span>
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map visualization */}
          <div className="lg:col-span-3 relative min-h-[400px]">
            <div className="bg-[#F5F5F5] rounded-lg h-full w-full flex items-center justify-center">
              <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
                {/* This is a placeholder for a real map */}
                <div className="absolute inset-0 bg-[#e5e5e5]"></div>
                
                {/* Display an interactive service area visualization */}
                <div className="absolute inset-0 p-4 flex flex-col">
                  <div className="flex-1 relative">
                    {/* North area */}
                    <div 
                      className={`absolute top-0 left-1/4 right-1/4 h-1/4 ${
                        activeArea === "north" ? "bg-[#2C5F2D] bg-opacity-50" : "bg-gray-400 bg-opacity-20"
                      } rounded-lg flex items-center justify-center cursor-pointer transition-colors`}
                      onClick={() => setActiveArea("north")}
                    >
                      {activeArea === "north" && (
                        <span className="text-white font-bold">North Area</span>
                      )}
                    </div>
                    
                    {/* South area */}
                    <div 
                      className={`absolute bottom-0 left-1/4 right-1/4 h-1/4 ${
                        activeArea === "south" ? "bg-[#2C5F2D] bg-opacity-50" : "bg-gray-400 bg-opacity-20"
                      } rounded-lg flex items-center justify-center cursor-pointer transition-colors`}
                      onClick={() => setActiveArea("south")}
                    >
                      {activeArea === "south" && (
                        <span className="text-white font-bold">South Area</span>
                      )}
                    </div>
                    
                    {/* East area */}
                    <div 
                      className={`absolute top-1/4 bottom-1/4 right-0 w-1/4 ${
                        activeArea === "east" ? "bg-[#2C5F2D] bg-opacity-50" : "bg-gray-400 bg-opacity-20"
                      } rounded-lg flex items-center justify-center cursor-pointer transition-colors`}
                      onClick={() => setActiveArea("east")}
                    >
                      {activeArea === "east" && (
                        <span className="text-white font-bold">East Area</span>
                      )}
                    </div>
                    
                    {/* West area */}
                    <div 
                      className={`absolute top-1/4 bottom-1/4 left-0 w-1/4 ${
                        activeArea === "west" ? "bg-[#2C5F2D] bg-opacity-50" : "bg-gray-400 bg-opacity-20"
                      } rounded-lg flex items-center justify-center cursor-pointer transition-colors`}
                      onClick={() => setActiveArea("west")}
                    >
                      {activeArea === "west" && (
                        <span className="text-white font-bold">West Area</span>
                      )}
                    </div>
                    
                    {/* Center point - shop location */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                      <MapPin className="h-6 w-6 text-[#2C5F2D]" />
                    </div>
                    
                    <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-xs text-xs">
                      Our Shop Location
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your area? Contact us to check if we can accommodate your location.
          </p>
          <Button asChild className="bg-[#2C5F2D] hover:bg-[#1a3e1a]">
            <a href="/contact">Check Your Area</a>
          </Button>
        </div>
      </div>
    </div>
  );
}