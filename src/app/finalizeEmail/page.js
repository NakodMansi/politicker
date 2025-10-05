"use client";
import React, { Suspense } from "react";
import Header from "@/componentsPages/Header";
import Footer from "@/componentsPages/Footer";
import ContactUs from "@/componentsPages/ContactUs";
import content from "../mail/content.json";

// Client-side component to handle searchParams
function ContactUsWrapper() {
  const { useSearchParams } = require("next/navigation");
  const searchParams = useSearchParams();

  const templateNo = parseInt(searchParams.get("templateNo")) || 0;
  const group = searchParams.get("group") || "EU"; // default group
  const committees = Object.keys(content[group] || {});

  const index= templateNo+1;

  const selectedCommitteeKey = "3." + index +" "+ committees[templateNo] || committees[0];

  const inputValues = selectedCommitteeKey
    ? [content[group][selectedCommitteeKey]]
    : [];

  const data = ["Create a proton mail", "Recipients (bcc)", "Subject", "Email"];

  return (
    <ContactUs
      heading="3. Finalize your emails"
      button1="Create a Proton Mail"
      button2="Next Email"
      contactUsData={data}
      inputValues={inputValues}
      templateNo={0} // only one template per selectedCommitteeKey
      showProtonMail={false}
      showCopyImage={true}
      show={true}
      committeeName = {selectedCommitteeKey}
    />
  );
}

export default function FinalizeEmail() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading email form...</div>}>
        <ContactUsWrapper />
      </Suspense>
      <Footer />
    </>
  );
}