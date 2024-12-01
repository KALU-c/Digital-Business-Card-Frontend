"use client"

import handleGenerateQRCode, { ContactDataType } from "@/actions/data";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Download, RefreshCcw } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });
  const [contact, setContact] = useState({
    phoneNumber: "",
    email: ""
  });
  const [work, setWork] = useState({
    company: "",
    jobTitle: ""
  });
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zip: "",
    country: ""
  });
  const [websiteLink, setWebsiteLink] = useState("");
  
  const [qrCodeUrl, setQrCodeUrl] = useState<string | undefined>(""); 

  async function handleSubmit() {
    const data: ContactDataType = {
      fullName,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      company: work.company,
      jobTitle: work.jobTitle,
      address,
      website: websiteLink
    };

    try {
      const qrImageUrl = await handleGenerateQRCode(data);

      setQrCodeUrl(qrImageUrl!);
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <main>
      <Navbar />
      <div className="lg:px-20 sm:px-8 px-1 flex flex-col lg:flex-row justify-between dark:bg-black">
        <Card className="lg:w-[63%] my-6">
          <CardHeader className="sm:mb-4">
            <CardTitle className="text-xl sm:text-3xl font-serif -mb-1">Digital Business Card</CardTitle>
            <CardDescription className="text-xs sm:text-md">Generate and customize QR codes in seconds.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Name */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <Label className="font-semibold text-muted-foreground">Full Name: </Label>
              <div className="sm:w-[80%] flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
                <Input 
                  placeholder="First Name" 
                  onChange={e => setFullName({...fullName, firstName: e.target.value})} 
                />
                <Input 
                  placeholder="Last Name" 
                  onChange={e => setFullName({...fullName, lastName: e.target.value})} 
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <Label className="font-semibold text-muted-foreground">Phone Number: </Label>
              <div className="sm:w-[80%] flex flex-row justify-between items-center gap-6">
                <Input 
                  placeholder="Mobile"
                  onChange={e => setContact({...contact, phoneNumber: e.target.value})} 
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <Label className="font-semibold text-muted-foreground">Email: </Label>
              <div className="sm:w-[80%] flex flex-row justify-between items-center gap-6">
                <Input 
                  onChange={e => setContact({...contact, email: e.target.value})}
                />
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <Label className="font-semibold text-muted-foreground">Company: </Label>
              <div className="sm:w-[80%] flex flex-col sm:flex-row justify-between items-center sm:gap-6 gap-2">
                <Input 
                  placeholder="Company Name" 
                  onChange={e => setWork({...work, company: e.target.value})}
                />
                <Input 
                  placeholder="Your Job" 
                  onChange={e => setWork({...work, jobTitle: e.target.value})}
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <Label className="font-semibold text-muted-foreground">Street: </Label>
              <div className="sm:w-[80%] flex flex-row justify-between items-center gap-6">
                <Input 
                  className="h-[50px]" 
                  onChange={e => setAddress({...address, street: e.target.value})}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <Label className="font-semibold text-muted-foreground">City: </Label>
              <div className="sm:w-[80%] flex flex-col sm:flex-row justify-between items-center sm:gap-6 gap-2">
                <Input 
                  onChange={e => setAddress({...address, city: e.target.value})}
                />
                <Input 
                  placeholder="ZIP" 
                  onChange={e => setAddress({...address, zip: e.target.value})}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <Label className="font-semibold text-muted-foreground">Country: </Label>
              <div className="sm:w-[80%] flex flex-row justify-between items-center gap-6">
                <Input 
                  onChange={e => setAddress({...address, country: e.target.value})}
                />
              </div>
            </div>

            {/* Link */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <Label className="font-semibold text-muted-foreground">Website: </Label>
              <div className="sm:w-[80%] flex flex-row justify-between items-center gap-6">
                <Input 
                  placeholder="www.your-website.com" 
                  onChange={e => setWebsiteLink(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:pt-4 w-full flex flex-row sm:justify-center">
              <Button className="sm:w-[60%] w-full" onClick={handleSubmit}>
                <RefreshCcw />
                Generate QR code
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:w-[35%] my-6 h-fit">
          <CardHeader>
            <CardTitle className="text-center text-muted-foreground sm:text-xl">Generated QR code</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full flex justify-center mb-8">
              {qrCodeUrl ? (
                <Image
                src={qrCodeUrl}
                alt="qr code"
                width={200}
                height={200}
              />
              ): (
                <div className="text-muted-foreground text-sm">no QR code generated</div>
              )}
            </div>
            <Button className="rounded-sm w-full flex gap-2" disabled={qrCodeUrl ? false : true}>
              <Download />
              <a href={qrCodeUrl} download="qr-code.png">
                Download QR code
              </a>
            </Button>
          </CardContent>
          <Separator />
          <CardFooter className="py-2 flex flex-col">
            <p className="font-semibold underline mb-1">Team Members:</p>
            <ol className="text-sm text-muted-foreground flex flex-col gap-1 font-serif">
              <li>1. Endekalu zemenu</li>
              <li>2. Dawit Demissie</li>
              <li>3. Kaleb Melese</li>
            </ol>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
