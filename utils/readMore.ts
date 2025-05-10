import React, { useState } from "react";

interface ExpandedSections {
  [key: string]: boolean;
}

const readMore = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>(
    {}
  );

  const toggleText = (sectionType: string) => {
    setExpandedSections((prevSections) => ({
      ...prevSections,
      [sectionType]: !prevSections[sectionType],
    }));
  };

  return { expandedSections, toggleText };
};

export default readMore;
