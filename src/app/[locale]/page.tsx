import Contacts from "./contacts/page";
import Banner from "./banner/page";
import Experience from "./experience/page";
import Skills from "./skills/page";
import About from "./about/page";
import Buttons from "./buttons/page";
import {useTranslations} from 'next-intl';

export default function Home() {
  const bannerT = useTranslations('Banner');
  const aboutT = useTranslations('About');
  const experienceT = useTranslations('Experience');
  const skillsT = useTranslations('Skills');
  return (
    <div className="font-sans">
      <main className="">
        <Buttons />
        <Banner
          intro = {bannerT('title')}  
          texts = { [ bannerT('text1'), bannerT('text2'), bannerT('text3')] }  >
          {/* TODO: add more stuff */}
        </Banner>
        <About
          title = {aboutT('title')}>
        </About>
        <Experience
          title = {experienceT('title')}>
        </Experience>
        <Skills
          title = {skillsT('title')}>
        </Skills>
      </main>
      <footer className="p-3">
        <Contacts></Contacts>
      </footer>
    </div>
  );
}
