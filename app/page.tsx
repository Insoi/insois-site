import ProfilePicture from "@/components/pfp";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Insoi",
  description:
      "Not sure what to add here",
};

export default function Home() {
  return (
      <>
        <h1 className="text-[100%] md:text-[1.2vw] mb-[2%] text-center font-[rogan]">
          WELCOME TO INSOI.XYZ !
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-[10%]">
          {" "}
          {/* This is a flexbox */}
          <p className="w-[95%] sm:w-[60%] leading-5 md:text-[.9em]">
            I’m <b>Insoi</b>, an independent developer based in Denmark.
            <br />
            <br />I work on various things, though game development is my main focus
            <br />
            <br />
            Most of my time goes into programming, but I also enjoy learning new
            things, experimenting, refining ideas, and occasionally creating
            something new.
            <br />
            <br />
            You can take a look at my{" "}
            <Link className="underline font-bold" href="/games">
              games
            </Link>
            ,{" "}
            <Link className="underline font-bold" href="/other-projects">
              projects
            </Link>
            , and other work.
          </p>
          <ProfilePicture />
        </div>
      </>
  );
}