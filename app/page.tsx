import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="px-20 flex flex-row justify-between bg-gray-100">
        <Card className="w-[63%] my-6">
          <CardHeader className="mb-4">
            <CardTitle className="text-2xl">Digital Business Card</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Name */}
            <div className="flex flex-row justify-between items-center">
              <Label className="font-semibold text-muted-foreground">Full Name: </Label>
              <div className="w-[80%] flex flex-row justify-between items-center gap-6">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-row justify-between items-center">
              <Label className="font-semibold text-muted-foreground">Phone Number: </Label>
              <div className="w-[80%] flex flex-row justify-between items-center gap-6">
                <Input placeholder="Mobile" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-row justify-between items-center">
              <Label className="font-semibold text-muted-foreground">Email: </Label>
              <div className="w-[80%] flex flex-row justify-between items-center gap-6">
                <Input placeholder="youremail@gmail.com" />
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-row justify-between items-center">
              <Label className="font-semibold text-muted-foreground">Company: </Label>
              <div className="w-[80%] flex flex-row justify-between items-center gap-6">
                <Input placeholder="Company Name" />
                <Input placeholder="Your Job" />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-row justify-between items-center">
              <Label className="font-semibold text-muted-foreground">Street: </Label>
              <div className="w-[80%] flex flex-row justify-between items-center gap-6">
                <Input className="h-[50px]" />
              </div>
            </div>

            <div className="flex flex-row justify-between items-center">
              <Label className="font-semibold text-muted-foreground">City: </Label>
              <div className="w-[80%] flex flex-row justify-between items-center gap-6">
                <Input />
                <Input placeholder="ZIP" />
              </div>
            </div>

            <div className="flex flex-row justify-between items-center">
              <Label className="font-semibold text-muted-foreground">Country: </Label>
              <div className="w-[80%] flex flex-row justify-between items-center gap-6">
                <Input />
              </div>
            </div>

            {/* Link */}
            <div className="flex flex-row justify-between items-center">
              <Label className="font-semibold text-muted-foreground">Website: </Label>
              <div className="w-[80%] flex flex-row justify-between items-center gap-6">
                <Input placeholder="www.your-website.com" />
              </div>
            </div>

            <div className="pt-4 w-full flex flex-row justify-center">
              <Button className="w-[60%]">
                <RefreshCcw />
                Generate QR code
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[35%] my-6 h-fit">
          <CardHeader>
            <CardTitle className="text-center text-muted-foreground text-2xl">Your QR code</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full flex justify-center mb-8">
              <Image
                src={"/qr.png"}
                alt="qr code"
                width={200}
                height={200}
              />
            </div>
            <Button className="rounded-sm w-full">Download Image</Button>
          </CardContent>
          <Separator />
          <CardFooter className="py-2 flex flex-col">
            <p className="font-semibold underline mb-1">Team Members:</p>
            <ol className="text-sm text-muted-foreground">
              <li>1. Endekalu Zemenu</li>
              <li>2. Dawit Demissie</li>
              <li>3. Kaleb Melese</li>
            </ol>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
