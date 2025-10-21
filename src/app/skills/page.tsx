import { div } from "motion/react-client";
import { ReactNode } from "react";

type SkillsProps = {
    title: string;
};

type SkillLists = {
    id: number;
    skillIcon: string;
    skillName: string;
}

const skillListsFrontend: SkillLists[] = [{
    id: 0,
    skillIcon: "./html5.svg",
    skillName: "HTML"
}, {
    id: 1,
    skillIcon: "./css3.svg",
    skillName: "CSS"
}
]

function skillLists(list: SkillLists[], category: string): ReactNode {
    let elementHTML = list.map(
        (item) => 
        <div className="flex items-center justify-center" key={item.id}>
            <div className="px-5">
                <img src={item.skillIcon} alt={item.skillName} className="w-10" />
            </div>
            {item.skillName}
        </div>
    )

    return (
        <div className="">
            <div className="skillsTitle">{category}</div>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5">
                {elementHTML}
            </div>
        </div>
        
    )
}

const Skills = ({ title }: SkillsProps) => {


    return (
        <section className='text-center py-5'>
            <h2 className="ribbon ribbon--secondary mx-auto">{title}</h2>

            <article>
                {skillLists(skillListsFrontend, "Frontend")}
            </article>
            {/* <Skill
                category="Frontend"
                skills={["HTML", "CSS", "BootStrap", "TailwindCSS", "JavaScript", "TypeScript", "jQuery", "React", "Next.js"]}></Skill>
            <Skill
                category="Backend and Databases"
                skills={["Node.js", "PHP", "WordPress", "WooCommerce", "PostgreSQL", "MongoDB"]}></Skill>
            <Skill
                category="Object-Oriented Programming"
                skills={["C", "C++", "Python", "Kotlin", "Java"]}>
            </Skill> */}
        </section>
    );
};

export default Skills;