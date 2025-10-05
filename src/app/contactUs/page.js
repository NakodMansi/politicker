import React from "react";
import Header from "@/componentsPages/Header";
import Footer from "@/componentsPages/Footer";
import ContactUsForm from "./ContactUsForm";

const data = ["Create a proton mail", "Email", "Subject","Your Message"]
export default function ContactUsPage() {

    return (
        <>  
        <Header />
        <ContactUsForm
            heading= "contact us"
            button1 = "create a proton mail"
            button2 = "send"
            contactUsData = {data}
        />
        <Footer />
        </>
    )
}