"use client";
import { BannerIntroProps } from "@/types/types";
import React from "react";
import { ReactTyped } from "react-typed";


export default function BannerIntro({ intro, texts }: BannerIntroProps) {
  const curriculumPDF = "./sample-local-pdf.pdf"
  return (
    <div className="text-left p-8">
      <h1 className="text-3xl font-bold">
        {intro}
      </h1>
      <ReactTyped
        className="text-2xl text-white-600 my-4 block"
        strings={texts}
        typeSpeed={50}
        backSpeed={30}
        loop
      >
      </ReactTyped>
      <a href={curriculumPDF} target="_blank" type="button">
        <button type="button" className="p-2 px-8 btn--accent rounded-md">Download CV</button>
      </a>
    </div>
  );
}
