"use client";
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Buttons = () => {    
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setDarkMode(mediaQuery.matches)

        const handleChange = (e: MediaQueryListEvent) => {
            setDarkMode(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        // Add listener to update styles
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => toggleDarkMode(e.matches ? false : true));


        // Remove listener
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
        if (isDarkMode)
            document.body.classList.add('dark-mode')
        else
            document.body.classList.remove('dark-mode')
    };

  return (
    <div className='fixed bottom-5 right-5 p-3 rounded-2xl' style={{ backgroundColor: "var(--shadow)" }}>
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={24}
            moonColor='var(--foreground)'
            sunColor='var(--background)'
        />
    </div>
  );
};

export default Buttons;