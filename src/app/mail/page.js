"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import content from "./content.json";
import Header from "@/componentsPages/Header";
import Footer from "@/componentsPages/Footer";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const committees = [
  "Human rights committee",
  "Foreign affairs committee",
  "EU matters committee"
];

export default function SendEmail() {
    const [screenSize, setScreenSize] = useState(0);
    const [step, setStep] = useState(1);

    // Track window size
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => setScreenSize(window.innerWidth);
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    // Load step from localStorage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedStep = sessionStorage.getItem("emailStep");
            if (savedStep) {
                setStep(parseInt(savedStep)); // restore during same session
            } else {
                setStep(1); // new visit → start from 1
            }
        }
    }, []);

    function sendEmail(index) {
        const { emails, subject, body } = content[index];
        const formattedBody = body.replace(/\n/g, "%0A");

        const mailAppLink = `mailto:${emails}?subject=${encodeURIComponent(subject)}&body=${formattedBody}`;
        const mailWebLink = `https://mail.google.com/?view=cm&fs=1&bcc=${emails}&su=${subject}&body=${formattedBody}`;
        
        window.location.href= mailAppLink;

        setTimeout(() => {
           window.open(mailWebLink, "_blank");
        },2500);
    
        window.addEventListener("focus", () => {
            clearTimeout(fallback);
        }, { once: true });
        
        const nextStep = step + 1;
        setStep(nextStep);
        sessionStorage.setItem("emailStep", nextStep);

        setTimeout(() => {
            if (nextStep > index) {
            alert(`Email sent successfully`);
        }
        }, 2000);
    };

    const buttonClass = (index) =>
        `px-4 w-full text-white text-[clamp(0.9rem,1vw,2rem)] leading-[clamp(1.5rem,2vw,3rem)] rounded-[10px] md:w-fit ${
        step > index + 1 ? "bg-[#266247]" : "bg-[#A12828]"
        }`;

    const boxShadowStyle = screenSize < 769
        ? { boxShadow: "10.387px 10.387px 5.666px 0 #994242" }
        : { boxShadow: "10.768px 10.768px 3.554px 0 #994242" };

    
    function MailComponent() {
        const searchParams = useSearchParams();
        const btnNum = searchParams.get("buttonNumber");
        
        return null;
    }

    return (
        <>
            <Header />
            <div className="flex flex-col gap-[58px] justify-center items-start py-[80px] px-[30px] w-full bg-[#FFF] lg:px-8 lg:gap-10">
                <header className="flex flex-col gap-1 justify-center items-center self-stretch">
                    <h1 className="text-[#383535] text-[clamp(2.5rem,3vw,4rem)] leading-[clamp(2.5rem,3vw,4rem)]">
                        3. Finalize email
                    </h1>
                    <p className="text-[#5C5C5C] text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(1.7rem,2vw,3rem)]">
                        3 clicks for 3 committees
                    </p>
                </header>

                <div className="flex flex-col gap-5 items-start md:flex-row w-full lg:gap-4">
                    {committees.map((committee, index) => (
                    <div key={index} className="flex items-center justify-center gap-11 px-6 self-stretch md:w-full md:p-0">
                        <div className="flex flex-col gap-2 justify-center items-center w-full md:flex-col-reverse lg:gap-6">
                            <p
                                className="text-[#383535] text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(1.2rem,2vw,3rem)] md:text-center"
                                style={{ fontFamily: screenSize > 769 ? "palanquin" : "inherit" }}
                            >
                                {committee}
                            </p>

                            <Image
                                src="/englishTemplate.png"
                                width={120}
                                height={120}
                                alt="template"
                                style={boxShadowStyle}
                                className="hidden md:block"
                            />

                            <button
                                className={buttonClass(index)}
                                onClick={() => sendEmail(index)}
                                disabled={index >= step}
                            >
                                Open in Mail
                            </button>
                        </div>

                        <Image
                        src="/englishTemplate.png"
                        width={80}
                        height={90}
                        alt="template"
                        className="w-[30vw] md:hidden"
                        style={{ boxShadow: "10.387px 10.387px 5.666px 0 #994242" }}
                        />
                    </div>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-[44px] w-full">
                    <Link href="/#section4">
                        <button className={buttonClass(4)} style={{backgroundColor: "#941010"}}>remind me to send 2. email</button>
                    </Link>
                    <Link href="/thankYou">
                        <button className={`px-4 border border-[#383535] rounded-[10px] text-[#383535]`}>Done</button>
                    </Link>
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <MailComponent />
            </Suspense>
            <Footer />
        </>
  );
}