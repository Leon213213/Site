import React, { useState } from "react";
import { TermsContentProps, Term } from "@/components/terms/types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TermsContent: React.FC<TermsContentProps> = ({ sections }) => {
  // Initialize state to track expanded sections by term ID
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  // Toggle collapse/expand for each section
  const toggleText = (sectionId: string) => {
    setExpandedSections((prevSections) => ({
      ...prevSections,
      [sectionId]: !prevSections[sectionId],  // Toggle the state for the specific section
    }));
  };
  useEffect(() => {
    Aos.init({
      duration: 5000
    });
  }, []);

  return (
    <>
      {sections.map((term: Term) => {
        const arrPoints = term.points;

        return (
          <div
          key={term.id}
          className="relative bg-black py-2 my-2 rounded-2xl border-2 border-white h-auto oswald text-xl tracking-normal"
          id={`internship${term.id}`}
        >
          <div>
            <h1 className="text-3xl relative text-white z-0 oswald">
              {term.title}
            </h1>
            <div
              className={`text-start px-4 transition-all ${
                expandedSections[`internship${term.id}`] ? "h-auto" : "max-h-[160px] overflow-hidden"
              }`}
              style={{
                backgroundImage: expandedSections[`internship${term.id}`]
                  ? "none"
                  : "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
              }}
            >
              {arrPoints.map((point) => (
                <div key={point.id}>
                  {point.type === "description" && (
                    <div className="py-2">
                      <h1>{`${point.title}:`}</h1>
                      <p>{point.description}</p>
                    </div>
                  )}
        
                  {expandedSections[`internship${term.id}`] && (
                    <>
                      {point.type === "email" && point.mail && (
                        <div>
                          <a href={`mailto:${point.mail}`} className="text-blue-300">
                            {point.mail}
                          </a>
                        </div>
                      )}
                      {point.type === "list" && (
                        <>
                          <h2>{`${point.title}:`}</h2>
                          <ul className="list-disc pl-20">
                            {point.list.map((listPoint, index) => (
                              <li key={index}>{listPoint}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => toggleText(`internship${term.id}`)}
            className="z-10 bottom-0 w-fit text-center mt-6 mb-2 border p-2 tracking-wide rounded oswald"
          >
            {expandedSections[`internship${term.id}`] ? "Collapse" : "Read more.."}
          </button>
        </div>
        
        );
      })}
    </>
  );
};

TermsContent.displayName = "TermsContent";

export default TermsContent;
