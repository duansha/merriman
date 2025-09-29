import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import Image from "next/image";

const Missions1 = () => {
  return (
    <>
      <section className="pt-16">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="bg-banner-bg py-20 pt-16 text-gray-200 dark:bg-gray-800 dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950 dark:text-gray-300">
              <div className="mx-auto max-w-4xl px-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-target text-logo-dark mx-auto mb-6 h-16 w-16"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <h1 className="mb-6 text-center text-5xl font-bold md:text-6xl">
                  我们的课程
                </h1>
                <p className="mx-auto max-w-3xl text-xl text-gray-200 md:text-2xl dark:text-gray-300">
                  Helping children thrive is at the heart of every part of our
                  curriculum. Our curriculum integrates play, exploration, and
                  guided learning to spark curiosity, build skills, and support
                  children’s holistic development.
                  帮助孩子茁壮成长，是我们所有课程的核心。
                  我们的课程融合了游戏、探索和引导式学习，激发孩子的好奇心，培养技能，并支持他们的全面发展。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-20 dark:bg-gray-900">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-4xl px-4">
              <Image
                src="/images/merriman/pic14.png"
                width="350"
                height="350"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Missions1;
