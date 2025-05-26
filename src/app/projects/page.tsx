"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "spark0.2",
    description: `Dive into world of ai, a fusion of Ai and  creative playground with spark0.2's problem-solving realm.
Whether you're new to ai you can use this easily beacouse this is really easy to use..`,
    link: "https://spark02.vercel.app/",
    images: [
      "/assets/projects-screenshots/spark0.2/1.png",
      "/assets/projects-screenshots/codingducks/2.png",
      "/assets/projects-screenshots/codingducks/3.png",
      "/assets/projects-screenshots/codingducks/4.png",
      "/assets/projects-screenshots/codingducks/5.png",
    ],
  },
  {
    id: 2,
    name: "stock bot",

    description: `StockBot Powered by Groq: Lightning Fast AI Chatbot that Responds With Live Interactive Stock Charts,
     Financials, News, Screeners, and More`,
    link: "https://stockbot-powered-by-groq-flame.vercel.app/",
    images: [
      "/assets/projects-screenshots/StockBot/1.png",
      "/assets/projects-screenshots/StockBot/2.png",
      "/assets/projects-screenshots/StockBot/3.png",
      "/assets/projects-screenshots/StockBot/4.png",
    ],
  },
  {
    id: 3,
    name: "Studio",
    description: `ai recipy is ai powered recipy generator, which helps you to generate recipies based on your input.
    It uses google gemini 2.5 flash model to generate recipies based on your input.`,
    link: "https://studiorecipy.vercel.app/",
    images: [
      "/assets/projects-screenshots/studio/1.png",
      "/assets/projects-screenshots/studio/2.png",
      "/assets/projects-screenshots/studio/3.png",
      "/assets/projects-screenshots/studio/4.png",
      "/assets/projects-screenshots/studio/5.png",
    ],
  },
  {
    id: 4,
    name: "discord keylogger",
    description: `A keylogger is a type of surveillance software that has the capability to record every keystroke you make on your computer or mobile device.
This project is a simple keylogger that logs your keystrokes and sends them to a discord webhook.`,
    link: "/projects/keylogger",
    images: ["/assets/projects-screenshots/keylogger/1.png"],
  },
  {
    id: 5,
    name: "youtube app maker",
    description: `Create your own YouTube app with this simple tool. Just enter your YouTube API key and you can create your own YouTube app.`,
    link: "https://youtube-app-maker.vercel.app/",
    images: [
      "/assets/projects-screenshots/youtube-app-maker/1.png",
      "/assets/projects-screenshots/youtube-app-maker/2.png",
      "/assets/projects-screenshots/youtube-app-maker/3.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
