import Image from "next/image";
import BannerIntro from "./banner_intro";
import { BannerIntroProps } from "@/types/types";

const Banner = ({ intro, texts }: BannerIntroProps) => {
    return (
        <section className="h-screen relative">
            <div className="banner h-full flex items-center">
                <BannerIntro 
                    intro = {intro}
                    texts = { texts } 
                />
            </div>
        </section>
    )
}

export default Banner;