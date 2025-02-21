import Growth from "@/components/organisms/Growth";
import Testimonial from "@/components/organisms/Testimonial";
import TouchIn from "@/components/organisms/TouchIn";
import SubHero from "@/components/SubHero";
import React from "react";

const page = () => {
  return (
    <main>
      <SubHero page_name="Testimonials" redirect_page="Home" redirect_url="/" />

      <section className="relative my-6 mt-44 max-w-8xl mx-auto p-4">
        <Growth />
        <Testimonial />
        <TouchIn />
      </section>
    </main>
  );
};

export default page;
