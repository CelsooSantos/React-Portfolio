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
}, {
    id: 2,
    skillIcon: "./bootstrap.svg",
    skillName: "BootStrap"
}, {
    id: 3,
    skillIcon: "./tailwindcss.svg",
    skillName: "TailwindCSS"
}, {
    id: 4,
    skillIcon: "./javascript.svg",
    skillName: "JavaScript"
}, {
    id: 5,
    skillIcon: "./typescript.svg",
    skillName: "TypeScript"
}, {
    id: 6,
    skillIcon: "./jQuery.svg",
    skillName: "jQuery"
}, {
    id: 7,
    skillIcon: "./react.svg",
    skillName: "React"
}, {
    id: 8,
    skillIcon: "./nextjs-logo.svg",
    skillName: "Next.JS"
}]

const skillsListsBackend: SkillLists[] = [{
    id: 0,
    skillIcon: "./nodejs.svg",
    skillName: "Node.js"
}, {
    id: 1,
    skillIcon: "./php.svg",
    skillName: "PHP"
}, {
    id: 2,
    skillIcon: "./wordpress-icon.svg",
    skillName: "WordPress"
}, {
    id: 3,
    skillIcon: "./woo.svg",
    skillName: "WooCommerce"
}, {
    id: 4,
    skillIcon: "./postgresql-icon.svg",
    skillName: "PostgreSQL"
}, {
    id: 5,
    skillIcon: "./mongodb-icon.svg",
    skillName: "MongoDB"
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
    skillIcon: "./python.svg",
    skillName: "Python"
}, {
    id: 3,
    skillIcon: "./kotlin.svg",
    skillName: "Kotlin"
}, {
    id: 4,
    skillIcon: "./java.svg",
    skillName: "Java"
}]

function skillLists(list: SkillLists[], category: string): ReactNode {
    let elementHTML = list.map(
        (item) =>
            <div className="flex items-center justify-start" key={item.id}>
                <div className="pe-5">
                    <img src={item.skillIcon} alt={item.skillName} className="h-10 w-10" />
                </div>
                {item.skillName}
            </div>
    )

    return (
        <article>
            <div className="skillsTitle flex items-center justify-center">{category}</div>
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 p-5">
                {elementHTML}
            </div>
        </article>

    )
}

const Skills = ({ title }: SkillsProps) => {
    return (
        <section className='text-center py-5'>
            <h2 className="ribbon ribbon--secondary mx-auto mb-10">{title}</h2>

            <div className="">
                {skillLists(skillListsFrontend, "Frontend")}
            
                {skillLists(skillsListsBackend, "Backend and Databases")}
            
                {skillLists(skillListsOOP, "Object-Oriented Programming")}
            </div>
        </section>
    );
};

export default Skills;