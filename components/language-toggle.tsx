'use client';

import {Lang} from "@/content/translations";

export default function LangToggle({lang, setLang}: {lang: Lang, // @ts-ignore
    setLang: (l: Lang) => void}) {
    return (
        <h3 style={{fontSize: '0.8rem'}}>
            <button onClick={() => setLang('en')} style={{opacity: lang === 'en' ? 1 : 0.4, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>EN</button>
            {" / "}
            <button onClick={() => setLang('dk')} style={{opacity: lang === 'dk' ? 1 : 0.4, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>DK</button>
        </h3>
    );
}