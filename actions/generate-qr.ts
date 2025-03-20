"use server"

import QRCode from "qrcode"
import { ContactDataType } from "./data";

export const generateQRCode = async (data: ContactDataType) => {
  try {
    
    const vCard = "BEGIN:VCARD\n" +
                  "VERSION:3.0\n" +
                  `FN:${data.fullName.firstName} ${data.fullName.lastName}\n` +
                  `TEL:${data.phoneNumber}\n` +
                  `EMAIL:${data.email}\n` +
                  `ORG:${data.company}\n` +
                  `TITLE:${data.jobTitle}\n` +
                  `ADR:;;${data.address.street};` +
                  `${data.address.city};` +
                  `${data.address.zip};` +
                  `${data.address.country}\n` +
                  `URL:${data.website}\n` +
                  "END:VCARD";

    const result = await QRCode.toDataURL(vCard)

    return result;
  } catch(error) {
    console.log(error);
  }
}