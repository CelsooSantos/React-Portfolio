import { Github, Linkedin, Mail, MapPinHouse } from 'lucide-react';
import {useTranslations} from 'next-intl';

const Contacts = () => {
    const t = useTranslations('Privacy');
    return (
        <div className='flex gap-[24px] flex-wrap items-center justify-center'>
            <div className='flex items-center gap-2 icon-element'>
                <a target="_blank" href="https://github.com/CelsooSantos" className='inline-flex items-center gap-2'>
                    <Github size={20} strokeWidth={1.5} />
                    CelsooSantos
                </a>
            </div>
            <div className='flex items-center gap-2 icon-element'>
                <a target="_blank" href="mailto:santoscelso644@gmail.com" className='inline-flex items-center gap-2'>
                    <Mail size={20} strokeWidth={1.5} />
                    santoscelso644@gmail.com
                </a>
            </div>
            <div className='flex items-center gap-2 icon-element'>
                <a target="_blank" href="https://www.linkedin.com/in/celso-santos-9a48892a1/" className='inline-flex items-center gap-2'>
                    <Linkedin size={20} strokeWidth={1.5} />
                    Celso Santos
                </a>
            </div>
            <div className='flex items-center gap-2'>
                <span className='inline-flex items-center gap-2'> 
                    <MapPinHouse size={20} strokeWidth={1.5} />
                    Viseu, Portugal
                </span>
            </div>
            <div className='icon-element'>
                <a href="/privacy">
                    {t('title')}
                </a>
            </div>
        </div>
    );
};

export default Contacts;