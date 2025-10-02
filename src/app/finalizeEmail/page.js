"use client";
import React from "react";
import Header from "@/componentsPages/Header";
import Footer from "@/componentsPages/Footer";
import ContactUs from "@/componentsPages/ContactUs";
import Content from "../mail/content.json";
import { useParams, useSearchParams } from "next/navigation";

const data = ["Create a proton mail", "Recipients (bcc)", "Subject","Email"]
export default function FinalizeEmail() {
    const searchParams = useSearchParams();
    const templateNo = searchParams.get("templateNo");

    return (
        <>  
        <Header />
        <ContactUs 
            heading= "3. finalize your emails"
            button1 = "create a proton mail"
            button2 = "next email"
            contactUsData = {data}
            inputValues = {Content}
            templateNo = {templateNo}
            showProtonMail = {false}
            showCopyImage = {true}
            show = {true}
        />
        <Footer />
        </>
    )
}
