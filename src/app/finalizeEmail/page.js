"use client";
import React, { Suspense } from "react";
import Header from "@/componentsPages/Header";
import Footer from "@/componentsPages/Footer";
import ContactUs from "@/componentsPages/ContactUs";
import Content from "../mail/content.json";

// Data for form
const data = ["Create a proton mail", "Recipients (bcc)", "Subject","Email"];

// Client-side component to handle searchParams
function ContactUsWrapper({ data, inputValues }) {
  const { useSearchParams } = require("next/navigation"); // dynamically require if needed
  const searchParams = useSearchParams();
  const templateNo = searchParams.get("templateNo");

  return (
    <ContactUs
      heading="3. finalize your emails"
      button1="create a proton mail"
      button2="next email"
      contactUsData={data}
      inputValues={inputValues}
      templateNo={templateNo}
      showProtonMail={false}
      showCopyImage={true}
      show={true}
    />
  );
}

export default function FinalizeEmail() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading email form...</div>}>
        <ContactUsWrapper data={data} inputValues={Content} />
      </Suspense>
      <Footer />
    </>
  );
}