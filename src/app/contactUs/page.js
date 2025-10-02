"use client";
import React from "react";
import Header from "@/componentsPages/Header";
import Footer from "@/componentsPages/Footer";
import ContactUs from "@/componentsPages/ContactUs";

const data = ["Create a proton mail", "Email", "Subject","Your Message"]
export default function ContactUsPage() {

    return (
        <>  
        <Header />
        <ContactUs 
            heading= "contact us"
            button1 = "create a proton mail"
            button2 = "send"
            contactUsData = {data}
        />
        <Footer />
        </>
    )
}
