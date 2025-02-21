import Channels from "@/components/organisms/Channels";
import Network from "@/components/organisms/Network";
import Service from "@/components/organisms/Service";
import TouchIn from "@/components/organisms/TouchIn";
import SubHero from "@/components/SubHero";
import React from "react";

const page = () => {
  return (
    <main>
      <SubHero page_name="Services" redirect_page="Home" redirect_url="/" />
      <section className="relative my-6 max-w-8xl mx-auto p-4">
        <Service />
        <Network />
        <Channels/>
        <TouchIn />
      </section>
    </main>
  );
};

export default page;
