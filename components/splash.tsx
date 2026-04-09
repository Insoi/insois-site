"use client";

import React, { useEffect, useState } from "react";
import {t, Lang} from "../content/translations";

function randomItem<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getSplash(tx: {
  subtitle: "I am a developer, drummer, and so-called artist.";
  subtitleRest: "Sharing my projects, games and whatever else I keep starting but never finishing.";
  pages: "Pages";
  journal: "Journal";
  pageLinks: readonly [{ label: "About me"; href: "/" }, { label: "Art Gallery"; href: "/art" }, {
    label: "Projects";
    href: "/projects"
  }, { label: "Discord"; href: "https://discord.gg/sqDhRrgqve" }, { label: "Games"; href: "/games" }, {
    label: "Github";
    href: "https://github.com/insoi"
  }];
  generalSplashes: readonly [string, string, string, string, string, string, string, string, string];
  bdaySplashes: readonly [string, string];
  foolSplashes: readonly [string];
  octoberSplashes: readonly [string, string, string, string];
  givethankSplashes: readonly [string, string, string, string];
  snowySplashes: readonly [string, string, string, string, string, string, string, string];
  newyearSplash: readonly [string, string]
} | {
  subtitle: "Jeg er en developer, trommeslager og såkaldt kunstner.";
  subtitleRest: "Deler mine projekter, spil og alt det jeg starter men aldrig færdiggør.";
  pages: "Sider";
  journal: "Journal";
  pageLinks: readonly [{ label: "Om mig"; href: "/" }, { label: "Kunstgalleri"; href: "/art" }, {
    label: "Projekter";
    href: "/projects"
  }, { label: "Discord"; href: "https://discord.gg/sqDhRrgqve" }, { label: "Mine spil"; href: "/games" }, {
    label: "Github";
    href: "https://github.com/insoi"
  }];
  generalSplashes: readonly [string, string, string, string, string, string, string, string, string];
  bdaySplashes: readonly [string, string];
  foolSplashes: readonly [string];
  octoberSplashes: readonly [string, string, string, string];
  givethankSplashes: readonly [string, string, string, string];
  snowySplashes: readonly [string, string, string, string, string, string, string, string];
  newyearSplash: readonly [string, string]
}): string {
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
