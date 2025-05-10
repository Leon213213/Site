"use client";

import React from "react";
import ContactForm from "@/components/sectionPage/form/ContactForm";
import NavLayout from "@/components/nav/NavLayout";

function Contact() {
  return (
    <>
      <NavLayout />
      <div className="flex flex-col items-center p-4 h-fit pt-20">
        <div className="w-full max-w-lg">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
