import Project from "./project";

type ExperienceProps = {
    title: string;
};

const Experience = ({ title }: ExperienceProps) => {
    return (
        <section className='px-5 my-10'>
            <h2 className="title title--primary font-bold text-2xl mx-auto">{title}</h2>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-5">
                <Project
                    title="Informatics Engineering – Information Systems"
                    subtitle="Master's Degree"
                    src="/estgv.svg"
                    date="On going..."
                    cat={1}
                    skills={[]}
                />
                <Project
                    title="Web Portfolio"
                    subtitle="Personal Project"
                    src="/vercel.svg"
                    date="Aug 2025 - Oct 2025"
                    cat={2}
                    skills={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
                />
                <Project
                    title="Software Developer"
                    subtitle="Intern"
                    src="/celeuma-light.png"
                    date="Dec 2024 - Jun 2025"
                    cat={1}
                    skills={["WordPress", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript", "jQuery", "Laragon", "BootStrap"]}
                />
                <Project
                    title="Computer Sciences Engineering"
                    subtitle="Bachelor Degree"
                    src="/estgv.svg"
                    date=" Sep 2021 - Jul 2024"
                    cat={1}
                    skills={["HTML", "CSS", "JavaScript", "BootStrap", "Node.js", "C", "C++", "Python", "PostreSQL", "MongoDB", "PHP", "Java", "Kotlin"]}
                />
            </div>
        </section>
    );
};

export default Experience;