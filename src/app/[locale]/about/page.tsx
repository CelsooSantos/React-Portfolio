type AboutProps = {
    title: string;
};

const About = ({ title }: AboutProps) => {
    return (
        <section className='text-center px-5 my-10'>
            <h2 className="title title--primary font-bold text-2xl mx-auto">{title}</h2>
            <p className="my-5 text-center about-description"> I'm <strong>Celso Santos</strong>. Currently, I have more experience in <strong>web development</strong>, due to my first intership, but I wish to expand my knowledge to other areas such as <strong>OOP languages</strong>, <strong>backend</strong>, <strong>AI</strong> and much more. I'm currently working on my <strong>master's degree</strong> to precisely gain comprehension on different tech topics. I am curious and excited to learn and experience more and more.  </p> 
        </section>
    );
};

export default About;