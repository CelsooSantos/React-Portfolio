import { Github, Linkedin, Mail, MapPinHouse } from 'lucide-react';

const Contacts = () => {
    return (
        <div className='flex gap-[24px] flex-wrap items-center justify-center'>
            <div className='flex items-center gap-2 hover:underline hover:underline-offset-4'>
                <Github size={20} strokeWidth={1.5} />
                <a target="_blank" href="https://github.com/CelsooSantos">CelsooSantos</a>
            </div>
            {/* <div className='flex items-center gap-2 hover:underline hover:underline-offset-4'>
                <Phone size={20} strokeWidth={1.5} />
                <a target="_blank" href="tel:+351960044426">(+351) 960 044 426</a>
            </div> */}
            <div className='flex items-center gap-2 hover:underline hover:underline-offset-4'>
                <Mail size={20} strokeWidth={1.5} />
                <a target="_blank" href="mailto:santoscelso644@gmail.com">santoscelso644@gmail.com</a>
            </div>
            <div className='flex items-center gap-2 hover:underline hover:underline-offset-4'>
                <Linkedin size={20} strokeWidth={1.5} />
                <a target="_blank" href="https://www.linkedin.com/in/celso-santos-9a48892a1/">Celso Santos</a>
            </div>
            <div className='flex items-center gap-2'>
                <MapPinHouse size={20} strokeWidth={1.5} />
                <span>Viseu, Portugal</span>
            </div>
        </div>
    );
};

export default Contacts;