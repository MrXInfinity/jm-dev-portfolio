import { ArrowRightIcon, LinkIcon } from "@heroicons/react/24/outline";
import {
  SiAxios,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiHeadlessui,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Projects = () => {
  const projectsList = [
    {
      title: "Traveloga",
      usedToolIcons: [
        SiReact,
        SiTailwindcss,
        SiAxios,
        SiHeadlessui,
        SiMongodb,
        SiNodedotjs,
        SiExpress,
      ],
      description:
        "Traveloga is a website that allows you to book some famous tourists spots within the Philippines. It’s a full stack application built with Create-React-App. It has its own REST API, authentication, as well as database for user info and their bookings.",
      image: "/traveloga_img.png",
      projectLink: "https://traveloga.onrender.com",
      githubLink: "https://github.com/MrXInfinity/traveloga",
    },
    {
      title: "SharedNotes",
      usedToolIcons: [SiReact, SiTypescript, SiFirebase, SiMui, SiVite],
      description:
        "SharedNotes is a website that stores notes, either private or shared, reminders and tasks. Its note editor has added functionalities found in modern text editors. It’s a full stack application utilizing Vite-React for client and Firebase as its backend. ",
      image: "/sharednotes_img.png",
      projectLink: "https://sharenotes-dev.web.app",
      githubLink: "https://github.com/MrXInfinity/SharedNotes",
    },
    {
      title: "this.portfolio",
      usedToolIcons: [
        SiNextdotjs,
        SiReact,
        SiTypescript,
        SiTailwindcss,
        SiFramer,
      ],
      description:
        "The website you're seeing right now showcases my love for web development, more specifically the web designing aspect. I have a preference on simplicity but necessarily plain. ",
      image: "/portfolio_img.png",
      projectLink: "https://jm-dev-portfolio.vercel.app",
      githubLink: "https://github.com/MrXInfinity/jm-dev-portfolio",
    },
    {
      title: "Job Listings",
      usedToolIcons: [
        SiReact,
        SiTypescript,
        SiNextdotjs,
        SiFramer,
        SiTailwindcss,
        SiPrisma,
      ],
      description:
        "JobListings lets you list and organize all your job application all in one platform. It has a simple interface that has all your needs to keep tabs on all your job listings.",
      image: "/jobListings_img.png",
      projectLink: "https://job-listings-theta.vercel.app",
      githubLink: "https://github.com/MrXInfinity/JobListings",
    },
  ];

  return (
    <div className="flex w-full snap-center flex-col items-stretch gap-6 sm:gap-10 xl:max-w-7xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: "all" }}
        className="flex w-full max-w-md items-center justify-between font-playfairDisplay sm:max-w-none"
      >
        <h1 className=" font-bold sm:text-lg lg:text-xl">
          My Personal Project
        </h1>
        <motion.div
          className="flex"
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href="/projects"
            className="button_transition flex cursor-pointer items-center gap-2 text-xs text-blue-500/80 hover:bg-slate-400/20"
          >
            <motion.button whileTap={{ scale: 0.9 }}>See more...</motion.button>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
      <div className="flex max-w-md flex-col gap-10 sm:max-w-none sm:gap-12 lg:gap-16">
        {projectsList.map(
          (
            {
              title,
              description,
              githubLink,
              image,
              projectLink,
              usedToolIcons,
            },
            index
          ) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true, amount: "all" }}
              className="group flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:gap-10 md:even:flex-row-reverse lg:gap-16"
              key={index}
            >
              <div className="flex w-full max-w-sm items-center justify-between sm:max-w-none md:max-w-sm md:flex-col md:items-start md:justify-start md:group-even:items-end">
                <h1 className="font-robotoSlab text-lg md:mb-3 md:text-xl lg:text-2xl">
                  {title}
                </h1>
                <div className="flex items-center gap-2 md:mb-5">
                  {usedToolIcons?.map((EachToolIcon, index) => (
                    <EachToolIcon
                      key={index}
                      className="h-4 w-4 lg:h-6 lg:w-6"
                    />
                  ))}
                </div>
                <p className="hidden text-justify text-sm md:block lg:text-base">
                  {description}
                </p>
              </div>
              <EachProjectImage
                {...{ title, image, githubLink, projectLink }}
              />

              <p className="text-sm opacity-80 md:hidden">{description}</p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

const EachProjectImage: React.FC<{
  title: string;
  image: string;
  githubLink: string;
  projectLink: string;
}> = ({ image, title, githubLink, projectLink }) => {
  const [showLink, setShowLink] = useState(false);
  return (
    <motion.div
      className="relative h-fit grow shadow-md shadow-blue-500"
      onMouseEnter={() => setShowLink(true)}
      onMouseLeave={() => setShowLink(false)}
    >
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        {showLink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center gap-4"
          >
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link
                target="_blank"
                href={githubLink}
                className="button_transition flex items-center gap-2 border-2 hover:border-blue-500 "
              >
                <h1>Github</h1>
                <SiGithub className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link
                target="_blank"
                href={projectLink}
                className="button_transition flex items-center gap-2 border-2 hover:border-blue-500 "
              >
                <h1>Live Site</h1>
                <LinkIcon className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        className="w-full "
        src={image}
        alt={title}
        width={600}
        height={300}
      />
    </motion.div>
  );
};
