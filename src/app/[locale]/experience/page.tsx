"use client";
import Project from "./project";
import { useTranslations } from "next-intl";

type ExperienceProps = {
    title: string;
};

const Experience = ({ title }: ExperienceProps) => {

    const experienceT = useTranslations('Experience');
    const experiences = ["Experience1", "Experience2", "Experience3", "Experience4"]; //Adding experiences requires also adding the title here 
    const experiencesValues = ["title", "subtitle", "date", "altImage"]; // Adding new properties requires adding the title here
    let i, j;
    let xpT = new Map();
    let xpValues = [];
    for (i = 0; i < experiences.length; i++) {
        xpValues = [];
        for (j = 0; j < experiencesValues.length; j++) {
            xpValues[j] = experienceT(experiences[i] + "." + experiencesValues[j])
        }
        xpT.set(i,xpValues)
    }
    
    return (
        <section className='px-5 my-10'>
            <h2 className="title title--primary font-bold text-2xl mx-auto">{title}</h2>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-5">
                <Project
                    title={xpT.get(3)[0]}
                    subtitle={xpT.get(3)[1]}
                    src="/estgv.svg"
                    date={xpT.get(3)[2]}
                    cat={1}
                    skills={[]}
                    altImage={xpT.get(3)[3]}
                />
                <Project
                    title={xpT.get(2)[0]}
                    subtitle={xpT.get(2)[1]}
                    src="/web-logo.svg"
                    date={xpT.get(2)[2]}
                    cat={2}
                    skills={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
                    altImage={xpT.get(2)[3]}
                />
                <Project
                    title={xpT.get(1)[0]}
                    subtitle={xpT.get(1)[1]}
                    src="/celeuma-light.png"
                    date={xpT.get(1)[2]}
                    cat={1}
                    skills={["WordPress", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript", "jQuery", "Laragon", "BootStrap"]}
                    altImage={xpT.get(1)[3]}
                />
                <Project
                    title={xpT.get(0)[0]}
                    subtitle={xpT.get(0)[1]}
                    src="/estgv.svg"
                    date={xpT.get(0)[2]}
                    cat={1}
                    skills={["HTML", "CSS", "JavaScript", "BootStrap", "Node.js", "C", "C++", "Python", "PostreSQL", "MongoDB", "PHP", "Java", "Kotlin"]}
                    altImage={xpT.get(0)[3]}
                />
            </div>
        </section>
    );
};

export default Experience;