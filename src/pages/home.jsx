import React from "react";
import {
  Typography
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import CardsSection from "./Home/layouts/CardsSection";
import NosotrosSection from "./Home/layouts/NosotrosSection";
import TeamSection from "./Home/layouts/TeamSection";
import ContactSection from "./Home/layouts/ContactSection";
import "../css/hero.css"

export function Home() {
  return (
    <>
      <div id="hero-inicio" className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url("/>
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                ProHabits
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              SI CAMBIAS TUS HÁBITOS, CAMBIAS TU VIDA.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <CardsSection />
          <NosotrosSection />
        </div>
      </section>
      <TeamSection />
      <ContactSection />
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
