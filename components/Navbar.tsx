import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="px-20 py-2 flex flex-row justify-between items-center">
      <div className="flex flex-row gap-4 items-center">
        <Image
          className="w-8 h-8"
          src={"/qr.png"}
          alt="logo"
          width={20}
          height={20}
        />
        <div>
          <p className="text-lg font-bold">QR Code Generator</p>
          <p className="text-xs font-semibold text-muted-foreground">CREATE YOUR QR CODE FOR FREE</p>
        </div>
      </div>
      <p className="text-lg font-bold">OOP - <span className="text-muted-foreground font-medium">Project 1</span></p>
    </nav>
  )
}

export default Navbar
