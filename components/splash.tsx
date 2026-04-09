"use client";

import React, { useEffect, useState } from "react";
import {t, Lang} from "../content/translations";

type Tx = typeof[Lang]

function randomItem<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getSplash(tx: Tx): string {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;

  if (day === 23 && month === 4) return randomItem(tx.bdaySplashes);
   else if (day === 1 && month === 4) return randomItem(tx.foolSplashes);
   else if (month === 10) return randomItem(tx.octoberSplashes);
   else if (month === 11 && day === 28) return randomItem(tx.givethankSplashes);
   else if (month === 12 && (day === 18 || day === 25)) return randomItem(tx.snowySplashes);
   else if (month === 1 && day === 1) return randomItem(tx.newyearSplash);

  return randomItem(tx.generalSplashes);
}

export default function SplashText({lang}: {lang: Lang}) {
  const [splash, setSplash] = useState<string>("");

  useEffect(() => {
    const tx = t[lang];
    setSplash(getSplash(tx));
  }, [lang]);

  return (
    <>
      <div style={{
        border: '2.5px dashed #444433',
        padding: '1.15rem 0.4rem',
        fontFamily: 'stretch-pro',
        fontSize: '1.2rem',
        lineHeight: 1,
        textAlign: 'center',
        maxWidth: '390px',
        color: "#DDDDCC"
      }}>
        {splash}
      </div>
    </>
  );
}
