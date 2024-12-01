import Image from "next/image"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  return (
    <nav className="px-4 sm:px-20 py-3 flex flex-row justify-between items-center bg-white dark:bg-black shadow-md dark:border-b">
      <div className="flex flex-row gap-4 items-center">
        <Image
          className="w-16 sm:w-24 h-8 sm:h-10 dark:invert"
          src={"/dark.png"}
          alt="logo"
          width={20}
          height={20}
          unoptimized
        />
        <div className="sm:block hidden">
          <p className="font-bold font-serif -mb-1">QR CODE GENERATOR</p>
          <p className="text-xs font-semibold text-muted-foreground font-sans">CREATE YOUR QR CODE FOR FREE</p>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
