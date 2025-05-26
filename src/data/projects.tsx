import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "spark0.2",
    category: "Ai assistank",
    title: "Spark0.2",
    src: "/assets/projects-screenshots/spark0.2/2.png",
    screenshots: ["2.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://spark02.vercel.app/",
    github: "https://github.com/sk16er/spark0.2",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            spark0.2 = chatgpt + vercel + firebase
          </TypographyP>
          <TypographyP className="font-mono ">
            spark0.2 is your AI ASSISTANT — where you level up your skills,
            like writing skill and coding skills, in a fun and interactive way.
            warrior. Track your progress, flex your brain, and climb the
            leaderboard. Ready to quack the world of ai?
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
          <p className="font-mono mb-2">
            Solve real world problems similar to Chatgpt , enhancing your
            problem-solving skills across various languages.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/spark0.2/2.png`,
              `${BASE_PATH}/spark0.2/4.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">What it can do</TypographyH3>
          <p className="font-mono mb-2">
            it can so waht ever you want, like:
            write a para boom done. and many more boundry is imagination.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/spark0.2/1.png`,
              `${BASE_PATH}/spark0.2/3.png`,
              `${BASE_PATH}/spark0.2/4.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">UI Battles </TypographyH3>

          <p className="font-mono mb-2">
            Challenge yourself to create UI components with HTML/CSS/JS, and get
            instant feedback with an automated similarity scoring.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/spark0.2/4.png`,
              `${BASE_PATH}/spark0.2/1.png`,
              
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Usrs login</TypographyH3>
          <p className="font-mono mb-2">
            i have make a login system using firebase auth, so you can save your
            Chats and you can see your history in your profile.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/spark0.2/2.png`,
              `${BASE_PATH}/spark0.2/user.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "Studio",
    category: "food",
    title: "Ai recipy maker",
    src: "/assets/projects-screenshots/studio/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://studiorecipy.vercel.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.vue,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            This is the ai recipy app to make ai recipy
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            As soon as you land, boom! You&apos;re greeted with the food
            coupons and top-tier food that&apos;ll make your tummy happy.
          </p>
          <SlideShow images={[`${BASE_PATH}/studio/1.png`]} />
          <TypographyH3 className="my-4 ">Stores</TypographyH3>
          <p className="font-mono mb-2">
            love the food.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/studio/1.png`,
              `${BASE_PATH}/studioy2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>

          <p className="font-mono mb-2">
            Whatever you&apos;re craving, we&apos;ve got it covered. From
            mouthwatering pizzas to delectable desserts, our categories make it.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/2.png`]} />
          <TypographyH3 className="my-4 mt-8">Custom CMS </TypographyH3>
          <p className="font-mono mb-2">
            And the cherry on top? I built a custom CMS that lets you manage
            everything with ease. Add new stores, update categories, and keep
            the content fresh without breaking a sweat.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/studio/1.png`,
              `${BASE_PATH}/studio/2.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            With a sleek design and smooth animations, navigating through the
            site is a breeze. It&apos;s like having your own personal food
            paradise at your fingertips.
          </p>
          <p className="font-mono mb-2">
            So, whether you&apos;re a foodie looking for the latest deals or just
            someone who loves good food, this site is your go-to destination.
            Get ready to indulge in a culinary adventure like no other!
          </p>
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "Youtube app maker",
    category: "Creative",
    title: "Make app for youtube",
    src: "/assets/projects-screenshots/youtube/2.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    github: "https://github.com/sk16er/youtube-app-maker",
    live: "https://youtube-app-maker.vercel.app/",
    
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.node,PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            this is the youtube app maker, which helps you to make your own youtube app.
            It uses aceternity to generate the app, and tailwind css for the styling.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            With the YouTube App Maker, you can create your own YouTube app in
            minutes. Just enter your channel name, and the app will generate a
            fully functional YouTube app for you.
          </p>
          <SlideShow images={[`${BASE_PATH}/youtube/1.png`]} />
          <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
          <p className="font-mono mb-2">
            The app is built with Next.js and Chakra UI, making it fast and
            responsive. It also uses Aceternity to generate the app, so you can
            be sure that your app is unique and one-of-a-kind.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/youtube/2.png`,
              `${BASE_PATH}/youtube/3.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

          <p className="font-mono mb-2">
            The app also comes with a custom CMS that allows you to manage your
            content easily. You can add, edit, and delete your content without
            any hassle. The CMS is built with Sanity, so you can be sure that
            your content is secure and reliable.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/youtube/1.png`,
              `${BASE_PATH}/youtube/2.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            So, whether you&apos;re a content creator looking to showcase your
            work or just someone who loves exploring new apps, this YouTube App
            Maker is your go-to solution. Get ready to dive into the world of
            YouTube with your very own app!
          </p>
        </div>
      );
    },
  },
  {
    id: "StockBot",
    category: "Finance",
    title: "StockBot",

    src: "/assets/projects-screenshots/StockBot/5.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://github.com/Sk16er/stockbot-powered-by-groq",
    github:"https://github.com/Sk16er/stockbot-powered-by-groq",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            StockBot is an AI-powered chatbot that leverages Llama3 70b on Groq, Vercel's AI SDK,
             and TradingView live widgets to respond in conversation with live, interactive charts and interfaces 
             specifically tailored to your requests. Groq's speed makes tool calling and providing a response near 
             instantaneous, allowing for a sequence of two API calls with separate specialized prompts to return a response.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/StockBot/1.png`,
              `${BASE_PATH}/StockBot/2.png`,
              `${BASE_PATH}/StockBot/3.png`,
              `${BASE_PATH}/StockBot/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "Discrd key logger",
    category: "hacking",
    title: "key logger",
    src: "/assets/projects-screenshots/keylogger/1.png",
 
    screenshots: ["1.png"],
    live: "https://github.com/sk15er/Discord_keylogger",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            The Discord Keylogger is a Python-based tool that records user keystrokes and periodically sends 
            them, along with screenshots, to a specified Discord channel via a webhook. This project serves as a 
            demonstration of potential security vulnerabilities and underscores the importance of robust cybersecurity practices.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/keylogger/1.png`]} />
          <TypographyH3 className="my-4 mt-8">
            ahck anyone
          </TypographyH3>
          {/* Effortless Results Retrieval: */}
          <ul className="the exe file">
            <li className="font-mono">
              this also have a exe file became a startup file by own and 
              sends the screen shots and many more.
            </li>
            <li className="font-mono">
              <strong>Note:</strong> This project is intended for educational purposes only. 
              Unauthorized use of keyloggers is illegal and unethical.  
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
