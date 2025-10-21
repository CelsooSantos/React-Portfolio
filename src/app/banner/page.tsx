import Image from "next/image";
import BannerIntro from "./banner_intro";
import { BannerIntroProps } from "@/types/types";

const Banner = ({ intro, texts }: BannerIntroProps) => {
    return (
        <section className="h-[80vh] relative banner flex flex-wrap justify-between">
            {/* <Image
                className="object-cover"
                src="/bg-banner.jpg"
                alt="Bem-Vindo"
                fill={true}
                priority
            /> */}
            <div className="w-full sm:w-1/2">
                <div className="absolute bottom-0">
                    <BannerIntro 
                        intro = {intro}
                        texts = { texts } 
                    />
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                
            </div>
        </section>
    )
}

export default Banner;