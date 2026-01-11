//import React, { useRef, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const Journey = () => {
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
                  className="lucide lucide-handshake text-logo-dark mx-auto mb-6 h-16 w-16"
                >
                  <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                  <path d="m21 3 1 11h-2"></path>
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                  <path d="M3 4h8"></path>
                </svg>
                <h1 className="mb-6 text-center text-5xl font-bold md:text-6xl">
                  Teaching Philosophy
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-5 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <div className="grid gap-0 lg:grid-cols-[2fr_1fr_1fr]">
              {" "}
              {/* Parent div becomes a flex container */}
              <div className="w-full p-4">
                {" "}
                {/* First child div */}
                <p className="max-w-3'xl mx-auto text-left text-xl md:text-xl">
                  We believe in child-led, interest-driven learning. Our role is
                  to guide, inspire, and encourage children through exploration
                  and curiosity. Reading plays a central role in our approach —
                  even for children as young as one year old, we read daily to
                  spark imagination, expression, and questioning skills.
                  <br />
                  我们相信以孩子为主导、兴趣为导向的学习。
                  老师的角色是引导、启发和鼓励孩子，让他们在探索中成长。阅读在我们的教学中占据核心位置——哪怕是1岁左右的孩子，我们也坚持每天读书，激发他们的想象力、表达能力和提问能力。
                </p>
              </div>
              <div className="w-full p-4">
                {" "}
                {/* Second child div */}
                <Image
                  src="/images/merriman/pic7.png"
                  width="250"
                  height="350"
                  alt=""
                />
              </div>
              <div className="w-full p-4">
                {" "}
                {/* Second child div */}
                <Image
                  src="/images/merriman/pic8.png"
                  width="250"
                  height="350"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Journey;
