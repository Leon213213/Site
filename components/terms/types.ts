// @/components/terms/types.ts
export interface BasePoint {
  id: number;
  title: string;
}

export interface DescriptionPoint extends BasePoint {
  type: "contact" | "description";
  description: string;
}

export interface ListPoint extends BasePoint {
  type: "list";
  list: string[];
}

export interface EmailPoint extends BasePoint {
  type: "email";
  mail: string;
  description: string[];
}

export type Point = DescriptionPoint | ListPoint | EmailPoint;

export interface Term {
  id: number;
  title: string;
  points: Point[];
}

export interface Terms {
  id: number;
  title: string;
  sections: Term[]; // Ensure this is 'sections' (plural)
}

export interface TermsContentProps {
  title: string;
  sections: Term[]; // Ensure consistency here as well
}
