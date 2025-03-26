import { HoodieCard } from "@/components/hoodie-card"
import { AutoSliderBanner } from "@/components/auto-slider-banner"

export default function Home() {
  const hoodies = [
    {
      id: 1,
      name: "Black Angel",
      price: 699.00,
      image2: "/Mockup-Black-Back.jpg",
      image1: "/Mockup-Black-frt.jpg",
    },
    {
      id: 2,
      name: "White Devil",
      price: 699.00,
      image1: "/Rich-White-T-shirt.jpg",
      image2: "/White-Mockup-Back.jpg",
    },
    {
      id: 3,
      name: "Brown Hurt",
      price: 599.00,
      image1: "/brownF.jpg",
      image2: "/brown.jpeg",
    },
    {
      id: 4,
      name: "Acid Wash Lighter",
      price: 699.00,
      image1: "/blackF.jpg",
      image2: "/black.webp",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Full-screen Auto-sliding Banner */}
      <AutoSliderBanner />

      {/* Product Section */}
      <section id="product-section" className="w-full py-12 md:py-24 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Latest Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hoodies.map((hoodie) => (
              <HoodieCard key={hoodie.id} {...hoodie} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

