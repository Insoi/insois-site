'use client';

import {Lang} from "@/content/translations";

export default function LangToggle({lang, setLang}: {lang: Lang, // @ts-ignore
    setLang: (l: Lang) => void}) {
    return (
        <div style={{fontSize: '0.8rem', fontFamily: "stretch-pro"}}>
            <button onClick={() => setLang('en')} style={{opacity: lang === 'en' ? 1 : 0.4, background: 'none', border: 'none', color: '#DDDDCC', cursor: 'pointer', padding: 0}}>EN</button>
            {" / "}
            <button onClick={() => setLang('dk')} style={{opacity: lang === 'dk' ? 1 : 0.4, background: 'none', border: 'none', color: '#DDDDCC', cursor: 'pointer', padding: 0}}>DK</button>
        </div>
    );
}