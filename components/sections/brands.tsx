export default function BrandsSection() {
  const brands = [
    { name: "Honda", logo: "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    { name: "John Deere", logo: "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    { name: "Toro", logo: "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    { name: "Husqvarna", logo: "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    { name: "Craftsman", logo: "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    { name: "Cub Cadet", logo: "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Brands We Service & Sell</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-[#F5F5F5] p-6 rounded-lg w-full h-24 flex items-center justify-center">
                <span className="font-bold text-xl text-gray-800">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-600">
          We service and repair all major brands, regardless of where you purchased your equipment.
        </p>
      </div>
    </div>
  );
}