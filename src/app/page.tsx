import Contacts from "./contacts/page";
import Banner from "./banner/page";
import Experience from "./experience/page";
import Skills from "./skills/page";
import About from "./about/page";
import Buttons from "./buttons/page";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="">
        <Buttons />
        <Banner
          intro = "Welcome! I'm a" 
          texts = { ["Web Developer", "Tech Enthusiast!!!", "Fullstack Learner"] }  >
          {/* TODO: add more stuff */}
        </Banner>
        <About
          title = "About me">
        </About>
        <Experience
          title = "Experience">
        </Experience>
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
