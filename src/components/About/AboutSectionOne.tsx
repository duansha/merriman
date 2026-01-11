import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      <section className="pt-16">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="bg-banner-bg py-20 text-gray-200 dark:bg-gray-800 dark:text-gray-300">
              <div className="mx-auto max-w-4xl px-4">
                <h1 className="mb-6 text-center text-5xl font-bold md:text-6xl">
                  Our purpose
                </h1>

                <div className="grid gap-0 lg:grid-cols-2">
                  {" "}
                  {/* Parent div becomes a flex container */}
                  <div className="w-full p-0.5">
                    {" "}
                    {/* First child div */}
                    <p className="max-w-3'xl mx-auto mb-4 ml-8 text-center text-xl md:text-2xl">
                      To help every child thrive. <br />
                      帮助每一个孩子茁壮成长。
                      <br />
                      <br />
                      <Image
                        src="/images/merriman/pic15.png"
                        width="350"
                        height="350"
                        alt=""
                      />
                    </p>
                  </div>
                  <div className="w-full p-0.5">
                    {" "}
                    {/* Second child div */}
                    <p className="mb-2 ml-8 text-gray-900 dark:text-gray-100">
                      <Image
                        src="/images/merriman/pic3.png"
                        width="350"
                        height="350"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;
