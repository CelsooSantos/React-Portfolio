import Project from "./project";

type AboutProps = {
    title: string;
};

const About = ({ title }: AboutProps) => {
    return (
        <section className='text-center py-5'>
            <h2 className="ribbon ribbon--accent mx-auto">{title}</h2>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
                <Project
                    title="Mestrado em Engenharia Informática - Sistemas de Informação"
                    src="/estgv.svg"
                    date="On going..."
                    cat={1}
                    skills={[]}
                />
                <Project
                    title="Portfólio Web"
                    src="/vercel.svg"
                    date="Aug 2025 - Oct 2025"
                    cat={3}
                    skills={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
                />
                <Project
                    title="Desenvolvedor de Software"
                    src="/celeuma-light.png"
                    date="Dec 2024 - Jun 2025"
                    cat={2}
                    skills={["WordPress", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript", "jQuery", "Laragon", "BootStrap"]}
                />
                <Project
                    title="Licenciatura em Engenharia Informática"
                    src="/estgv.svg"
                    date=" Sep 2021 - Jul 2024"
                    cat={1}
                    skills={["HTML", "CSS", "JavaScript", "BootStrap", "Node.js", "C", "C++", "Python", "PostreSQL", "MongoDB", "PHP", "Java", "Kotlin"]}
                />
            </div>
        </section>
    );
};

export default About;