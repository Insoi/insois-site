"use client";

import { useEffect, useState } from "react";

const generalSplashes = [
  "Welcome to my landing page fellow traveler!",
  "The font used on Insoi reminds of Black Midi",
  "This splash text was stolen from Ransomwave",
  "Despite everything, it's still you.",
  "Splash text was actually invented by me",
  "Play my games and read my journal guys >.>",
  "Happy todays day and tomorrows day",
  "Smoke weed and relax! All will be fine"
];

const bdaySplashes = ["Bring out cakes, candles & all that for me", "Guess who just got 1 year older"];
const foolSplashes = ["APRIL FOOLS!!"];
const octoberSplashes = [
  "BOO!",
  "Spooky!",
  "It is the spooky month!",
  "2spooky4me",
];
const givethankSplashes = [
  "Happy Thanksgiving!",
  "Happy Givesthanking!",
  "Happy holidays fellow americans",
  "What's the count on turkey genocide?",
];
const snowySplashes = [
  "Merry Christmas!!",
  "Happy Chrimas!",
  "Happy Holidays!",
  "¡Feliz Navidad!",
  "Christmas is a corporate invention!",
  "SANTA ISNT REAL SANTA ISNT REAL SANTA ISNT REAL SANTA ISNT REAL",
  "Santa is real!",
  "Happy birthday, Jesus!",
];
const newyearSplash = ["Happy New Year!", "Worlds ending today!"];

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getSplash(): string {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;

  if (day === 23 && month === 4) {
    return randomItem(bdaySplashes);
  } else if (day === 1 && month === 4) {
    return randomItem(foolSplashes);
  } else if (month === 10) {
    return randomItem(octoberSplashes);
  } else if (month === 11 && day === 28) {
    return randomItem(givethankSplashes);
  } else if (month === 12 && (day === 18 || day === 25)) {
    return randomItem(snowySplashes);
  } else if (month === 1 && day === 1) {
    return randomItem(newyearSplash);
  }

  return randomItem(generalSplashes);
}

export default function SplashText() {
  const [splash, setSplash] = useState<string>("");

  useEffect(() => {
    setSplash(getSplash());
  }, []);

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
