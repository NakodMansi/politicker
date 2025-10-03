"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import content from "./content.json";
import Header from "@/componentsPages/Header";
import Footer from "@/componentsPages/Footer";
import { Suspense } from "react";

const committees = [
  "Human rights committee",
  "Foreign affairs committee",
  "EU matters committee"
];

export default function SendEmail() {
  const [screenSize, setScreenSize] = useState(0);
  const [step, setStep] = useState(1); // Track current step
  const [showMailOptions, setShowMailOptions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Track window size
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setScreenSize(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Load step from sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedStep = sessionStorage.getItem("emailStep");
      if (savedStep) {
        setStep(parseInt(savedStep));
      } else {
        setStep(1);
      }
    }
  }, []);

  // Show mail options popup
  function sendEmail(index) {
    setSelectedIndex(index);
    setShowMailOptions(true);
  }

  // Generate email app options
  function getMailLinks(index) {
    if (!content[index]) return [];
    const { emails, subject, body } = content[index];
    const emailStr = encodeURIComponent(Array.isArray(emails) ? emails.join(",") : emails);
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    return [
      {
        name: "Gmail App",
        appUrl: `mailto:?bcc=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
        webUrl: `https://mail.google.com/mail/?view=cm&fs=1&bcc=${emailStr}&su=${encodedSubject}&body=${encodedBody}`,
      },
      {
        name: "Yahoo Mail",
        appUrl: `ymail://mail/compose?bcc=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
        webUrl: `https://compose.mail.yahoo.com/?bcc=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
      },
      {
        name: "Outlook",
        appUrl: `ms-outlook://compose?bcc=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
        webUrl: `https://outlook.office.com/mail/deeplink/compose?bcc=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
      },
      {
        name: "Default Mail",
        appUrl: `mailto:?bcc=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
        webUrl: `mailto:?bcc=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
      },
    ];
  }

  // Open the selected mail app, fallback to web
  function openMailApp(appUrl, webUrl, index) {
    const start = Date.now();
    window.location.href = appUrl;

    // Fallback to web if app not opened
    setTimeout(() => {
      const end = Date.now();
      if (end - start < 1200) {
        window.open(webUrl, "_blank");
      }
    }, 1000);

    // Update step
    const nextStep = index + 2; // next button is enabled
    setStep(nextStep);
    sessionStorage.setItem("emailStep", nextStep);
  }

  // Button class: green if step completed
  const buttonClass = (index) =>
    `px-4 w-full text-white text-[clamp(0.9rem,1vw,2rem)] leading-[clamp(1.5rem,2vw,3rem)] rounded-[10px] md:w-fit ${
      step > index + 1 ? "bg-[#266247]" : "bg-[#A12828]"
    }`;

  const boxShadowStyle =
    screenSize < 769
      ? { boxShadow: "10.387px 10.387px 5.666px 0 #994242" }
      : { boxShadow: "10.768px 10.768px 3.554px 0 #994242" };

  return (
    <>
      <Header />
      <div className="flex flex-col gap-[58px] justify-center items-start py-[80px] px-[30px] w-full bg-[#FFF] lg:px-8 lg:gap-10">
        {/* header */}
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
            <div
              key={index}
              className="flex items-center justify-center gap-11 px-6 self-stretch md:w-full md:p-0"
            >
              {/* for tab view */}
              <div className="flex flex-col gap-2 justify-center items-center w-full md:flex-col-reverse lg:gap-6">
                <p
                  className="text-[#383535] text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(1.2rem,2vw,3rem)] md:text-center"
                  style={{ fontFamily: screenSize > 769 ? "palanquin" : "inherit" }}
                >
                  {committee}
                </p>

                <Link href={`/finalizeEmail?templateNo=${index}`}>
                  <Image
                    src="/englishTemplate.png"
                    width={120}
                    height={120}
                    alt="template"
                    style={boxShadowStyle}
                    className="hidden md:block"
                  />
                </Link>

                <button
                  className={buttonClass(index)}
                  onClick={() => sendEmail(index)}
                  disabled={index >= step}
                >
                  Open in Mail
                </button>
              </div>

              {/* for mobile view */}
              <Link href={`/finalizeEmail?templateNo=${index}`}>
                <Image
                  src="/englishTemplate.png"
                  width={80}
                  height={90}
                  alt="template"
                  className="w-[30vw] md:hidden"
                  style={{ boxShadow: "10.387px 10.387px 5.666px 0 #994242" }}
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-[44px] w-full">
          <Link href="/#section4">
            <button className={buttonClass(4)} style={{ backgroundColor: "#941010" }}>
              remind me to send 2. email
            </button>
          </Link>
          <Link href="/thankYou">
            <button className="px-4 border border-[#383535] rounded-[10px] text-[#383535]">
              Done
            </button>
          </Link>
        </div>
      </div>

      {/* Mail App Options Popup */}
      {showMailOptions && selectedIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-3">
            <h2 className="text-xl font-bold mb-2">Choose a Mail App</h2>
            {getMailLinks(selectedIndex).map((link, idx) => (
              <button
                key={idx}
                className="px-4 py-2 bg-[#941010] text-white rounded-md text-center"
                onClick={() => {
                  openMailApp(link.appUrl, link.webUrl, selectedIndex);
                  setShowMailOptions(false);
                }}
              >
                {link.name}
              </button>
            ))}
            <button
              className="mt-4 px-4 py-2 bg-gray-300 rounded-md"
              onClick={() => setShowMailOptions(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Footer />
    </>
  );
}
