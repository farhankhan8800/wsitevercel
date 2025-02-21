import ProcessSolve from "@/components/organisms/ProcessSolve";
import ProcessSteps from "@/components/organisms/ProcessSteps";
import TouchIn from "@/components/organisms/TouchIn";
import SubHero from "@/components/SubHero";
import React from "react";

const page = () => {
  return (
    <main>
      <SubHero page_name="Our Process" redirect_page="Home" redirect_url="/" />
      <section className="relative my-6 mt-20 lg:mt-44 max-w-8xl mx-auto p-4">
        <ProcessSolve />
        <ProcessSteps />
        <TouchIn />
      </section>
    </main>
  );
};

export default page;
