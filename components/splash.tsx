"use client";

import { useEffect, useState } from "react";

const splashWords = [
  "Welcome!",
  "This splash text was stolen from Ransomwave",
    "[[Hyperlink Blocked]]",
];

const bdaySplashes = ["Bring out cakes, candles & all that shit", "Guess who just got 1 year older"];
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
  "Happy holidays you americans",
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
const newyearSplash = ["Happy New Year!", "World's ending today!"];

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

  return randomItem(splashWords);
}

export default function SplashText() {
  const [splash, setSplash] = useState<string>("");

  useEffect(() => {
    setSplash(getSplash());
  }, []);

  return (
    <>
      <div className="rotate-[-10deg]">
        <p className="absolute text-yellow-300 ml-[65%] text-[100%] text-shadow-[3px_3px_#070700] text-center animate-[pop_0.58s_infinite] whitespace-pre-line font-[minecraft]">
          {splash}
        </p>
      </div>
    </>
  );
}
