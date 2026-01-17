import {useTranslations} from 'next-intl';

type AboutProps = {
    title: string;
};

const About = ({ title }: AboutProps) => {
    const aboutT = useTranslations('About');
    
    return (
        <section className='text-center px-5 my-10'>
            <h2 className="title title--primary font-bold text-2xl mx-auto">{title}</h2>
            <p className="my-5 text-center about-description"> 
                {aboutT('text1')} <strong>{aboutT('bold1')}</strong>
                {aboutT('text2')} <strong>{aboutT('bold2')}</strong>
                {aboutT('text3')} <strong>{aboutT('bold3')}</strong>
                {aboutT('text4')} <strong>{aboutT('bold4')}</strong> {aboutT('text5')} <strong>{aboutT('bold5')}</strong> {aboutT('text6')}
            </p> 
        </section>
    );
};

export default About;