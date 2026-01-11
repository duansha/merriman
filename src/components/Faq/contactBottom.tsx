import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const ContactBottom = () => {
  return (
    <>
      <section className="bg-bg py-5 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <div className="grid gap-0 lg:grid-cols-2">
              {" "}
              {/* Parent div becomes a flex container */}
              <div className="w-full p-4 text-left text-xl">
                To join our team, you need to complete the following steps:
                <ul>
                  <li>1. Apply for a STARS ID through the Merit website.</li>
                  <li>
                    2. Complete the 30-Hour Basic Training on DCYF Training
                    using your STARS ID.
                  </li>
                  <li>
                    3. Pass a Background Check on the Merit website (go to My
                    Application → Background Check). This is free.{" "}
                  </li>
                  <li>4. Provide a TB Test Result. </li>
                  <li>
                    5. Obtain CPR Certification. (Online courses are available;
                    a small fee may apply.){" "}
                  </li>
                  <li>
                    6. Get a Food Handler Card. (Usually costs about $10
                    online.){" "}
                  </li>
                  <li>7. Copy of MMR</li>
                </ul>
                Note: For parent chaperones and volunteers, items 4, 5, and 6
                are not required.
              </div>
              <div className="w-full p-4">
                {" "}
                {/* Second child div */}
                <Image
                  src="/images/merriman/pic13.png"
                  width="500"
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

export default ContactBottom;
