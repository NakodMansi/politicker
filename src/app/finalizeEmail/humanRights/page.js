"use client";
import React, { Suspense } from "react";
import Header from "@/componentsPages/Header";
import Footer from "@/componentsPages/Footer";
import ContactUs from "@/componentsPages/ContactUs";
import content from "../../mail/content.json";

function HumanRights() {
  const { useSearchParams } = require("next/navigation");
  const searchParams = useSearchParams();

  const group = searchParams.get("group") || "EU"; // default group
  const committees = Object.keys(content[group] || {}).slice(0, 3); // get first 3 committees
  const username = searchParams.get("username");
  const useremail = searchParams.get("useremail");
  
  const inputValues = committees.map((committeeKey) => content[group][committeeKey]);
  const selectedCommitteeKey = "3.3" + " "+ committees[2];

  const data = ["Create a proton mail", "Recipients (bcc)", "Subject", "Email"];

  return (
    <ContactUs
      heading="3. Finalize your emails"
      button2="Remind me to send second email"
      contactUsData={data}
      inputValues={inputValues}
      templateNo={0}
      showProtonMail={false}
      showCopyImage={true}
      show={true}
      committeeName={selectedCommitteeKey}
      nextPage= "humanRights"
      username={username}
      useremail={useremail}
    />
  );
}

export default function FinalizeEmail() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading email form...</div>}>
        <HumanRights />
      </Suspense>
      <Footer />
    </>
  );
}