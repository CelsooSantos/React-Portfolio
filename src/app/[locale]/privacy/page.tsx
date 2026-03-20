import Buttons from "../buttons/page";
import Contacts from "../contacts/page";
import {useTranslations} from 'next-intl';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
    const t = useTranslations('Privacy');
    return (
        <div className="font-sans flex flex-col justify-between h-screen">
            <main className="px-5 py-10">
                <Buttons />
                <nav className="flex items-center icon-element w-fit">
                    <ArrowLeft />
                    <a href="/" className="text-lg mx-2">{t('navigation')}</a>
                </nav>
                <section className="h-full">
                    <h1 className="title title--primary font-bold text-2xl mx-auto my-10">{t('title')}</h1>
                    <h2 className=" font-bold text-lg mx-auto mb-5">{t('subtitle')}</h2>
                    <ol className="list-decimal px-5">
                        <li className="font-bold">{t('section1.title')}</li>
                        <p className="pb-3">{t('section1.text1')} <strong className="primary">{t('section1.bold1')}</strong> {t('section1.text2')}</p>

                        <li className="font-bold">{t('section2.title')}</li>
                        <p>{t('section2.text1')} <strong className="primary">{t('section2.bold1')}</strong> {t('section2.text2')}</p>
                        <ul className="list-disc px-5 pb-3 privacy-sublist">
                            <li> <strong className="primary">{t('section2.list.title1')}: </strong>  {t('section2.list.text1')}</li>
                            <li> <strong className="primary">{t('section2.list.title2')}: </strong>  {t('section2.list.text2')}</li>
                            <li> <strong className="primary">{t('section2.list.title3')}: </strong>  {t('section2.list.text3')}</li>
                        </ul>

                        <li className="font-bold">{t('section3.title')}</li>
                        <p className="pb-3">{t('section3.text1')} <strong className="primary">{t('section3.bold1')}</strong> {t('section3.text2')}</p>
                        
                    </ol>
                </section>
            </main>
            <footer className="p-3">
                <Contacts></Contacts>
            </footer>
        </div>
    );
}