import React from "react";
import Hero from "../components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: "About my career",
};

const TITLE_CLASS = "text-2xl font-bold text-gray800 mt-3";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>개발과 독서를 즐기는 풀스택 개발자</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          구글러 (-Now) <br /> 페이스북 (-2019) <br /> 삼성전자 (-2015)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Vue, Node <br /> Git, Clean Code
          <br /> Neovim, VS Code, MongoDB
        </p>
      </section>
    </>
  );
}
