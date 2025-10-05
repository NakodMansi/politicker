"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
  showThreeForm
}) {
  const formDivCss =
    "flex flex-col items-start self-stretch lg:gap-2 relative";
  const inputFieldCss =
    "py-3 pl-4 pr-10 h-[44px] rounded-[10px] flex-[1_0_0] border border-[#5C5959] w-full focus:outline-none text-[#5C5959] lg:h-[58px] lg:p-4";
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
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

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

  // STATE used only inside form
    const [formData, setFormData] = useState({
      email: "",
      subject: "",
      message: "",
    });
    const [showEmailMsg, setShowEmailMsg] = useState(false);
  
    // FUNCTIONS used only inside form
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleEmailCopy = async () => {
      if (!inputValues || !inputValues[selectedTemplate]) return;
      const template = inputValues[selectedTemplate];
      const emails = Array.isArray(template.emails)
        ? template.emails.join(" ")
        : template.emails.replace(/,/g, ";");
      try {
        await navigator.clipboard.writeText(`Emails: ${emails.trim()}`);
        alert("Copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };
  
    const handleSubjectCopy = async () => {
      if (!inputValues || !inputValues[selectedTemplate]) return;
      const template = inputValues[selectedTemplate];
      try {
        await navigator.clipboard.writeText(`Subject: ${template.subject}`);
        alert("Copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };
  
    const handleBodyCopy = async () => {
      if (!inputValues || !inputValues[selectedTemplate]) return;
      const template = inputValues[selectedTemplate];
      try {
        await navigator.clipboard.writeText(`Email Text: ${template.body}`);
        alert("Copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
      }
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
      <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col justify-center items-start self-stretch gap-[11px] flex-1 py-4 px-6 rounded-[5px] bg-[#FFF] md:py-6 md:gap-[30px] lg:p-6 lg:w-[33%] lg:gap-6"
          >
            {show && (
              <div className="flex flex-col gap-[11px] items-start">
                <p className="text-[#000] text-[clamp(1.8rem,3vw,4vw)] leading-[clamp(3rem,3vw,4vw)] self-stretch">
                  {contactUsData.committeeName} committee
                </p>
                <button
                  type="button"
                  className={btnCss}
                  onClick={() => {
                    setSelectedTemplate(templateNo ? parseInt(templateNo) : 0);
                    openMailPopup();
                  }}
                >
                  open filled template in mail app
                </button>
              </div>
            )}
      
            {/* Mobile Proton Mail Button */}
              <div className={`${formDivCss} md:hidden`}>
                <button
                  type="button"
                  className={`${inputFieldCss} border-[#941010] text-[#941010] tracking-wide text-[clamp(1rem,2vw,3rem)] leading-[clamp(1.2rem,2vw,3rem)]`}
                >
                  {contactUsData[0]}
                </button>
      
                <Image
                  src="/Frame2.svg"
                  width={20}
                  height={20}
                  alt="Frame Icon"
                  className="absolute top-[12px] md:top-[15px] right-2"
                  onMouseOver={() => setShowEmailMsg(true)}
                  onMouseOut={() => setShowEmailMsg(false)}
                />
      
                {showEmailMsg && (
                  <div className="p-2 w-fit bg-[#515050] absolute top-[5px] right-[50px] text-[#FFF] font-palanquin text-[0.6rem] transition duration-500">
                    <p>
                      Don’t want to use your personal email? Try Proton Mail — more
                      secure with end-to-end encryption.
                    </p>
                  </div>
                )}
      
                <label className={labelCss}>Do you need Proton Mail? (optional)</label>
              </div>
            
            {/* Email Field */}
            <div className={`${formDivCss} md:hidden`}>
              <div className="flex w-full relative">
                <input
                  type="text"
                  name="email"
                  className={`${inputFieldCss}  font-palanquin`}
                  value={
                    inputValues && inputValues[selectedTemplate]
                      ? Array.isArray(inputValues[selectedTemplate].emails)
                        ? inputValues[selectedTemplate].emails.join(";")
                        : inputValues[selectedTemplate].emails.replace(/,/g, ";")
                      : formData.email
                  }
                  onChange={handleChange}
                />
                {showCopyImage && (
                  <Image
                    width={20}
                    height={20}
                    src="/copyBtn.svg"
                    className="absolute right-3 top-[13px]"
                    onClick={handleEmailCopy}
                    alt="copy image"
                  />
                )}
              </div>
              <label className={labelCss}>{contactUsData[1]}</label>
            </div>
      
            {/* Subject */}
            <div className={formDivCss}>
              <div className="flex w-full relative">
                <input
                  type="text"
                  name="subject"
                  className={`${inputFieldCss}  font-palanquin`}
                  value={inputValues?.[selectedTemplate]?.subject || formData.subject}
                  onChange={handleChange}
                />
                {showCopyImage && (
                  <Image
                    width={20}
                    height={20}
                    src="/copyBtn.svg"
                    className="absolute right-3 top-[13px]"
                    onClick={handleSubjectCopy}
                    alt = "copy button"
                  />
                )}
              </div>
              <label className={labelCss}>{contactUsData[2]}</label>
            </div>
      
            {/* Message */}
            <div className={formDivCss}>
              <textarea
                name="message"
                rows="5"
                className={`${inputFieldCss}  font-palanquin`}
                value={inputValues?.[selectedTemplate]?.body || formData.message}
                onChange={handleChange}
                style={{ flex: windowWidth < 769 ? 0 : 1 }}
              />
              {showCopyImage && (
                <Image
                  width={20}
                  height={20}
                  src="/copyBtn.svg"
                  className="absolute right-3 top-[13px]"
                  onClick={handleBodyCopy}
                  alt = "Copy Button"
                />
              )}
              <label className={labelCss}>{contactUsData[3]}</label>
            </div>
      
            {/* Submit */}
            <button type="submit" name="submitBtn" className={btnCss}>
              {button2}
            </button>
          </form>

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