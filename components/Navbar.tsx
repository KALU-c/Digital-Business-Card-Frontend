import Image from "next/image"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  return (
    <nav className="px-20 py-2 flex flex-row justify-between items-center">
      <div className="flex flex-row gap-4 items-center">
        <Image
          className="w-16 h-8"
          src={"/logo.jpg"}
          alt="logo"
          width={20}
          height={20}
        />
        <div>
          <p className="text-lg font-bold">QR Code Generator</p>
          <p className="text-xs font-semibold text-muted-foreground">CREATE YOUR QR CODE FOR FREE</p>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <p className="text-lg font-bold">OOP - <span className="text-muted-foreground font-medium">Project 1</span></p>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
