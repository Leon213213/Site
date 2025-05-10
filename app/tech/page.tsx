// Intern.tsx
"use client";
import React, { useMemo } from "react";
import { termsData } from "@/data/terms/techTerms";
import TermsContent from "@/components/terms/TermsContent";
import { Terms } from "@/components/terms/types"; // Ensure correct import path
import NavLayout from "@/components/nav/NavLayout";
import Link from "next/link";
import { useEffect } from 'react';

const Intern = () => {
  const filteredTermsData = useMemo(() => {
    return termsData.filter((each) => each.id === 1);
  }, [termsData]);
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top after the page loads
  }, []);
  return (
    <>
      <NavLayout />
      <section className="pt-36 pb-10 flex flex-col items-center">
      <div className="flex flex-col container text-center">
          {/* Non-Paid Television and Film Intern */}

          {filteredTermsData.map((each: Terms) => {
            return (
              <React.Fragment key={each.id}>
                <h1 className="underline text-4xl underline-offset-8 oswald">{each.title}</h1>
                <div className="flex flex-col py-4 container text-center">
                  <TermsContent title={each.title} sections={each.sections} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <Link href="/contact">
            <button className="text-center border-2 rounded-md text-2xl px-5 py-2 font-bold">Apply</button>
        </Link>
        <h1 className="pt-4">OR</h1>

        <button
           onClick={() => window.open('https://www.indeed.com/cmp/On1y?from=mobviewjob&tk=1ietqm88pg8tu800&fromjk=1c7660ec9d9b207e&attributionid=mobvjcmp', '_blank')}
            className="mt-5 text-center border-2 rounded-md text-2xl px-5 py-2 font-bold"
            >Indeed</button>
      </section>
    </>
  );
};

export default Intern;
