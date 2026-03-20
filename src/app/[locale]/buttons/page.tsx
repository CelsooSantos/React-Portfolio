"use client";
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useRouter, usePathname } from '@/i18n/navigation'; 
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';


const Buttons = () => { 
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDarkMode = resolvedTheme === 'dark';

    return (
        <div className='fixed bottom-5 right-5 z-[9999]'>
            {/* Botão Dark Mode */}
            <div className='p-3 rounded-2xl mb-3 switchMode' style={{ backgroundColor: "var(--shadow)" }}>
                <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                    size={24}
                    moonColor='var(--foreground)'
                    sunColor='var(--foreground)'
                />
            </div>
            
            <div className='p-3 rounded-2xl switchMode' style={{ backgroundColor: "var(--shadow)" }}>
                {locale === 'pt' ? (
                    <button className="cursor-pointer font-bold aspect-square w-[24px]"> 
                        <a href={"/en/" + pathname} lang="en" hrefLang="en" aria-label="Visit site in english">EN</a>
                    </button>
                ) : (
                    <button className="cursor-pointer font-bold aspect-square w-[24px]"> 
                        <a href={"/pt/" + pathname} lang="pt" hrefLang="pt" aria-label="Visita o website em português">PT</a>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Buttons;