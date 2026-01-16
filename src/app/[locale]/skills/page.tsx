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
    skillIcon: "./bootstrap.svg",
    skillName: "BootStrap"
}, {
    id: 1,
    skillIcon: "./css3.svg",
    skillName: "CSS"
}, {
    id: 2,
    skillIcon: "./html5.svg",
    skillName: "HTML"
}, {
    id: 3,
    skillIcon: "./javascript.svg",
    skillName: "JavaScript"
}, {
    id: 4,
    skillIcon: "./jQuery.svg",
    skillName: "jQuery"
}, {
    id: 5,
    skillIcon: "./nextjs-logo.svg",
    skillName: "Next.JS"
    
}, {
    id: 6,
    skillIcon: "./react.svg",
    skillName: "React"
    
}, {
    id: 7,
    skillIcon: "./tailwindcss.svg",
    skillName: "TailwindCSS"
}, {
    id: 8,
    skillIcon: "./typescript.svg",
    skillName: "TypeScript"
}]

const skillsListsBackend: SkillLists[] = [{
    id: 0,
    skillIcon: "./mongodb-icon.svg",
    skillName: "MongoDB"
    
}, {
    id: 1,
    skillIcon: "./nodejs.svg",
    skillName: "Node.js"
    
}, {
    id: 2,
    skillIcon: "./php.svg",
    skillName: "PHP"
    
}, {
    id: 3,
    skillIcon: "./postgresql-icon.svg",
    skillName: "PostgreSQL"
    
}, {
    id: 4,
    skillIcon: "./woo.svg",
    skillName: "WooCommerce"
}, {
    id: 5,
    skillIcon: "./wordpress-icon.svg",
    skillName: "WordPress"
}]

const skillListsOOP: SkillLists[] = [{
    id: 0,
    skillIcon: "./c-icon.svg",
    skillName: "C"
}, {
    id: 1,
    skillIcon: "./cpp.svg",
    skillName: "C++"
}, {
    id: 2,
    skillIcon: "./java.svg",
    skillName: "Java"
}, {
    id: 3,
    skillIcon: "./kotlin.svg",
    skillName: "Kotlin"
}, {
    id: 4,
    skillIcon: "./python.svg",
    skillName: "Python"
}]

function skillLists(list: SkillLists[], category: string): ReactNode {
    let elementHTML = list.map(
        (item) =>
            <div className="flex items-center justify-start" key={item.id}>
                <div className="pe-4">
                    <img src={item.skillIcon} alt={item.skillName} className="h-10 w-10" />
                </div>
                {item.skillName}
            </div>
    )

    return (
        <article>
            <div className="skillsTitle text-xl flex items-center justify-center py-5">{category}</div>
            <div className="flex flex-wrap justify-around gap-10 p-5">
                {elementHTML}
            </div>
        </article>

    )
}

const Skills = ({ title }: SkillsProps) => {
    return (
        <section className='text-center px-5 my-10'>
            <h2 className="title title--primary font-bold text-2xl mx-auto">{title}</h2>

            <div className="py-5">
                {skillLists(skillListsFrontend, "Frontend")}
            
                {skillLists(skillsListsBackend, "Backend and Databases")}
            
                {skillLists(skillListsOOP, "Object-Oriented Programming")}
            </div>
        </section>
    );
};

export default Skills;