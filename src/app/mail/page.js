"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import content from "./content.json";
import Header from "@/componentsPages/Header";
import Footer from "@/componentsPages/Footer";
import { useSearchParams } from "next/navigation";

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

            const savedStep = localStorage.getItem("emailStep");
            if (savedStep) setStep(parseInt(savedStep));
        }
    }, []);

    function sendEmail(index) {
        const { body } = content[index];
        const formattedBody = body.replace(/\n/g, "%0A");

        window.open(`https://mail.google.com/?view=cm&fs=1&bcc=${content[index].emails}&su=${content[index].subject}&body=${formattedBody}`);

        const nextStep = step + 1;
        setStep(nextStep);
        localStorage.setItem("emailStep", nextStep);

        console.log(index)
    };

    const buttonClass = (index) =>
        `px-4 w-full text-white md:w-fit md:text-[1.4rem] lg:text-[2rem] ${
        step > index + 1 ? "bg-[#266247]" : "bg-[#A12828]"
        }`;

    const boxShadowStyle = screenSize < 769
        ? { boxShadow: "10.387px 10.387px 5.666px 0 #994242" }
        : { boxShadow: "10.768px 10.768px 3.554px 0 #994242" };

    // const searchParams = useSearchParams();
    // const btnNum = searchParams.get("buttonNumber");

    return (
        <>
            <Header />
            <div className="flex flex-col gap-8 justify-center items-start py-10 px-4 w-full lg:px-8 lg:gap-10">
                
                
                <header className="flex flex-col gap-2 justify-center items-center self-stretch">
                    <h1 className="text-[#383535] text-[3.2rem] leading-[3rem] lg:text-[5.6rem] lg:leading-[5.6rem]">
                    3. Finalize email
                    </h1>
                    <p className="text-[#5C5C5C] text-[1.8rem] leading-[1.8rem] lg:text-[3rem] lg:leading-[3rem]">
                    3 clicks for 3 committees
                    </p>
                </header>

                <div className="flex flex-col gap-5 items-start justify-between md:flex-row w-full lg:gap-4">
                    {committees.map((committee, index) => (
                    <div key={index} className="flex items-center justify-between gap-11 px-4 self-stretch md:w-full md:p-0">
                        <div className="flex flex-col gap-4 justify-center items-center w-[150px] md:w-full md:flex-col-reverse lg:gap-6">
                        <p
                            className="text-[#383535] leading-[1.1rem] lg:text-[1.5rem] lg:leading-[1.5rem] md:text-center"
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

                <Link href="/thankYou">
                    <button className={`w-[150px] ml-4 text-white md:hidden ${step>3?"bg-[#266247]":"bg-[#888] "}`}>Done</button>
                </Link>
            </div>
            
            <Footer />
        </>
  );
}