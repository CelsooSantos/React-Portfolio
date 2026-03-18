import BannerIntro from "./banner_intro";
import { BannerIntroProps } from "@/types/types";
import {useTranslations} from 'next-intl';

const Banner = ({ texts }: BannerIntroProps) => {
    const t = useTranslations('Banner');
    return (
        <section className="h-screen relative">
            <div className="banner h-full flex items-center">
                <BannerIntro 
                    intro = { t('title') }
                    texts = { texts } 
                />
            </div>
        </section>
    )
}

export default Banner;