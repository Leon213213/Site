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
<h1 className="pb-5">OR</h1>

        <button
          onClick={() => window.open("https://www.indeed.com/cmp/On1y?from=mobviewjob&tk=1ietqm88pg8tu800&fromjk=1c7660ec9d9b207e&attributionid=mobvjcmp", "_blank")}
          className="mb-6 text-center border-2 rounded-md text-2xl px-5 py-2 font-bold"
        >
          Indeed
        </button>
      </div>
    </>
  );
}

export default Contact;
