import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-24 h-24">
      <Image
        src="/richfella.jpg"  // Corrected the src path to match the filename
        alt="richfella123"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
