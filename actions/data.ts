type ContactDataType = {
  fullName: {
    firstName: string;
    lastName: string;
  },
  phoneNumber: string;
  email: string;
  company: string;
  jobTitle: string;
  address: {
    street: string;
    city: string;
    zip: string;
    country: string;
  },
  website: string;
}

const handleGenerateQRCode = async ({
  fullName,
  phoneNumber,
  email,
  company,
  jobTitle,
  address,
  website
}: ContactDataType) => {
  const contactData: ContactDataType = {
    fullName,
    phoneNumber,
    email,
    company,
    jobTitle,
    address,
    website
  };

  try {
    const response = await fetch("http://localhost:8080/api/qr/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactData)
    });

    if (response.ok) {
      const qrCodeBlob = await response.blob();
      const qrCodeUrl = URL.createObjectURL(qrCodeBlob);

      return qrCodeUrl;
    }
  } catch (error) {
    console.error("Error generating QR code: ", error);
  }
};

export default handleGenerateQRCode;