import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const Donates = () => {
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
                  className="lucide lucide-message-circle text-logo-dark mx-auto mb-6 h-16 w-16"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                <h1 className="mb-6 text-center text-5xl font-bold md:text-6xl">
                  Teaching Planning
                </h1>
                <p className="mx-auto max-w-3xl text-xl md:text-2xl"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-0 lg:grid-cols-2">
            {" "}
            {/* Parent div becomes a flex container */}
            <div className="w-full p-2">
              {" "}
              {/* First child div */}
              <p className="max-w-3'xl mx-auto text-left text-xl md:text-xl">
                Our curriculum is designed to help every child thrive, with no
                more “terrible two” in our center. We introduce children to
                knowledge and experiences across:
                <br />
                <br />
              </p>
              <ul>
                <li>Nature & Science 自然与科学</li>
                <li>History 历史</li>
                <li>Language & Literacy 语言与读写</li>
                <li>Math 数学</li>
                <li>Geography 地理</li>
                <li>Arts & Creativity 艺术与创造力</li>
                <li>Chess 逻辑思维</li>
              </ul>
              <p>
                We integrate these subjects through play, projects, and
                real-life exploration so children learn with joy and meaning.
                我们的课程设计围绕宗旨——帮助每个孩子茁壮成长。在这里，孩子们不会经历“可怕的两岁”。课程涵盖：自然、历史、语言、数学、地理和艺术。我们通过游戏、项目和真实生活的探索，将这些知识融入其中，让孩子们在快乐和有意义的学习中成长。
              </p>
            </div>
            <div className="w-full p-2">
              {" "}
              {/* Second child div */}
              <Image
                src="/images/merriman/pic9.png"
                width="600"
                height="500"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donates;
