import Image from "next/image";
import Contacts from "./contacto/page";
import Banner from "./banner/page";
import About from "./about/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="">
        <Banner
          intro = "Welcome! I'm a" 
          texts = { ["Web Developer", "Tech Enthusiast!!!", "Fullstack Learner"] }  >
          {/* TODO: add more stuff */}
        </Banner>
        <About
          title = "Percurso">
        </About>
        <Skills
          title = "Skills">
          
        </Skills>
      </main>
      <footer className="p-3">
        <Contacts></Contacts>
      </footer>
    </div>
  );
}
