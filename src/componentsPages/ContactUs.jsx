"use client";
import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

export default function ContactUs({
  heading,
  button1,
  button2,
  contactUsData,
  inputValues,
  templateNo,
  showProtonMail,
  showCopyImage,
  show,
  committeeNames,
  showThreeForm,
  userName
}) {
  const formDivCss =
    "flex flex-col items-start self-stretch lg:gap-2 relative";
  const inputFieldCss =
    "py-3 pl-4 pr-10 h-[44px] rounded-[10px] flex-[1_0_0] border border-[#5C5959] w-full font-palanquin focus:outline-none text-[#5C5959] lg:h-[58px] lg:p-4";
  const labelCss =
    "text-[#4E4E4E] font-palanquin text-[clamp(0.6rem,2vw,3rem)] leading-[clamp(1.3rem,2vw,3rem)]";
  const btnCss =
    "p-[9.5px] text-[#FFF] bg-[#941010] text-[clamp(1.2rem,2vw,4rem)] leading-[clamp(1.2rem,2vw,4rem)] rounded-[10px] w-full md:p-4 md:w-[236px]";

  const [windowWidth, setWindowWidth] = useState(0);
  const [showMailOptions, setShowMailOptions] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(templateNo || 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getMailLinks = (index) => {
    if (!inputValues[index]) return [];
    const { emails, subject, body } = inputValues[index];
    const emailStr = Array.isArray(emails) ? emails.join(",") : emails;
    
    const finalSubject = subject.replace("{username}", userName);
    const finalBody = body.replace("{username}", userName);

    const encodedSubject = encodeURIComponent(finalSubject);
    const encodedBody = encodeURIComponent(finalBody);


    return [
      {
        name: "Gmail App",
        appUrl: `googlegmail://co?${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
        webUrl: `https://mail.google.com/mail/?view=cm&fs=1&bcc=${emailStr}&su=${encodedSubject}&body=${encodedBody}`,
      },
      {
        name: "Yahoo Mail",
        appUrl: `ymail://mail/compose?to=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
        webUrl: `https://compose.mail.yahoo.com/?to=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
      },
      {
        name: "Outlook",
        appUrl: `ms-outlook://compose?to=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
        webUrl: `https://outlook.office.com/mail/deeplink/compose?to=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
      },
      {
        name: "Proton Mail",
        appUrl: `mailto:?bcc=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
        webUrl: `https://mail.proton.me/u/0/?bcc=${emailStr}&subject=${encodedSubject}&body=${encodedBody}`,
      },
      {
        name: "Default Mail",
        appUrl: `mailto:${emailStr}?subject=${encodedSubject}&body=${encodedBody}`,
        webUrl: `mailto:${emailStr}?subject=${encodedSubject}&body=${encodedBody}`,
      },
    ];
  };

  const openMailPopup = () => setShowMailOptions(true);

  const openMailApp = (appUrl, webUrl) => {
    const start = Date.now();
    window.location.href = appUrl;
    setTimeout(() => {
      const end = Date.now();
      if (end - start < 1200) window.open(webUrl, "_blank");
    }, 1000);
    setShowMailOptions(false);
  };

  return (
    <div
      className="flex flex-col items-start gap-4 flex-1 w-full px-4 pb-4 md:flex-row md:py-10 md:px-8 md:gap-8 lg:py-[100px] lg:px-[100px]"
      style={{
        background: "linear-gradient(180deg, #1E1E1E 27.87%, #5F1717 98.29%)",
      }}
    >
      <div className="p-5 flex justify-center items-center bg-[#FFF] rounded-[5px] self-stretch md:flex-col md:justify-start md:text-left md:p-6 lg:gap-[60px]">
        <p className="text-[#000] text-[clamp(2.5rem,3vw,4vw)] leading-[clamp(3rem,3vw,4vw)] self-stretch">
          {heading}
        </p>
      </div>

      {/* Render a form for each committee */}
      {
        showThreeForm ?
          committeeNames.map((committee, i) => (
            <ContactForm
              key={i}
              formDivCss={formDivCss}
              inputFieldCss={inputFieldCss}
              labelCss={labelCss}
              btnCss={btnCss}
              contactUsData={{ ...contactUsData, committeeName: committee }}
              inputValues={inputValues}
              selectedTemplate={i}
              setSelectedTemplate={setSelectedTemplate}
              showCopyImage={showCopyImage}
              showProtonMail={showProtonMail}
              show={show}
              windowWidth={windowWidth}
              templateNo={i}
              openMailPopup={openMailPopup}
              button2={button2}
            />
          )) :
          <ContactForm
              formDivCss={formDivCss}
              inputFieldCss={inputFieldCss}
              labelCss={labelCss}
              btnCss={btnCss}
              contactUsData={{ ...contactUsData, committeeName: committee }}
              inputValues={inputValues}
              selectedTemplate={i}
              setSelectedTemplate={setSelectedTemplate}
              showCopyImage={showCopyImage}
              showProtonMail={showProtonMail}
              show={show}
              windowWidth={windowWidth}
              templateNo={i}
              openMailPopup={openMailPopup}
              button2={button2}
            />
      }

      {show && showMailOptions && selectedTemplate !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-3">
            <h2 className="text-xl font-bold mb-2">Choose a Mail App</h2>
            {getMailLinks(selectedTemplate).map((link, idx) => (
              <button
                key={idx}
                type="button"
                className="px-4 py-2 bg-[#941010] text-white rounded-md text-center"
                onClick={() => openMailApp(link.appUrl, link.webUrl)}
              >
                {link.name}
              </button>
            ))}
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-gray-300 rounded-md"
              onClick={() => setShowMailOptions(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}