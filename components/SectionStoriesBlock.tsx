"use client";
import SectionStories from "./SectionStories";

export interface SectionStoriesProps {
  sectionId: string;
  sectionTitle: string;
  sectionUrl: string;
}

export default function SectionStoriesBlock(props: SectionStoriesProps) {
  return <SectionStories {...props} />;
}
