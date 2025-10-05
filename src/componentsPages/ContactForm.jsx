"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ContactForm({
  formDivCss,
  inputFieldCss,
  labelCss,
  btnCss,
  contactUsData,
  inputValues,
  selectedTemplate,
  setSelectedTemplate,
  showCopyImage,
  showProtonMail,
  show,
  windowWidth,
  templateNo,
  openMailPopup,
  button2
}) {
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

      <p className="text-[#383535] text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(3rem,4vw,4.5rem)]">
        OR COPY MANUALLY
      </p>

      {/* Mobile Proton Mail Button */}
      {showProtonMail && (
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
      )}

      {/* Email Field */}
      <div className={`${formDivCss} md:hidden`}>
        <div className="flex w-full relative">
          <input
            type="text"
            name="email"
            className={inputFieldCss}
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
            className={inputFieldCss}
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
          className={inputFieldCss}
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
  );
}