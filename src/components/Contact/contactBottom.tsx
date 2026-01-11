import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const ContactBottom = () => {
  return (
    <>
      <section className="bg-bg py-5 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-left">
            <div className="grid gap-0 lg:grid-cols-2">
              {" "}
              {/* Parent div becomes a flex container */}
              <div className="w-full p-4">
                {" "}
                {/* First child div */}
                <p className="max-w-3'xl mx-auto text-left text-xl md:text-xl">
                  <span className="mb-5 block text-3xl font-bold">
                    Enrollment Process
                  </span>
                  1. <span className="font-bold">Contact Us</span> – Reach out
                  by phone, email, or our website form to express your interest.{" "}
                  <br />
                  2. <span className="font-bold">Schedule a Tour</span> – Visit
                  our center, meet the teachers, and see our classrooms and
                  learning environment. <br />
                  3. <span className="font-bold">
                    Complete Enrollment Form
                  </span>{" "}
                  – Fill out the enrollment packet and submit required
                  documents. <br />
                  4. <span className="font-bold">Start Date Confirmed</span> –
                  Once accepted, we confirm your child’s start date and warmly
                  welcome your family to Merriman Childcare and Learning Center.
                </p>
              </div>
              <div className="grid w-full grid-cols-2 gap-2 p-4">
                {" "}
                {/* Second child div */}
                <Image
                  src="/images/merriman/pic11.png"
                  width="250"
                  height="350"
                  alt=""
                />
                <Image
                  src="/images/merriman/pic12.png"
                  width="250"
                  height="350"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-5 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-left">
            <div className="grid gap-0 lg:grid-cols-2">
              {" "}
              {/* Parent div becomes a flex container */}
              <div className="w-full p-4">
                {" "}
                {/* First child div */}
                <p className="max-w-3'xl mx-auto text-left text-xl md:text-xl">
                  <span className="mb-5 block text-3xl font-bold">
                    Afterschool Program 课后项目
                  </span>
                  We support school-age children by:
                </p>
                <ul>
                  <li>Helping them complete homework</li>
                  <li>Providing healthy snacks</li>
                  <li>
                    Offering a multilingual environment (English, Chinese,
                    Spanish)
                  </li>
                  <li>Extra lessons in Math, Chinese, Spanish, and chess</li>
                  <li>Chess club</li>
                </ul>
                <p className="max-w-3'xl mx-auto mt-10 text-left text-xl md:text-xl">
                  我们课后项目提供：
                </p>
                <ul>
                  <li>辅导完成作业</li>
                  <li>健康零食</li>
                  <li>多语言环境（英文、中文、西班牙文）</li>
                  <li>数学、中文和西班牙文的教学</li>
                  <li>业余国际象棋俱乐部</li>
                </ul>
              </div>
              <div className="w-full p-4">
                {" "}
                {/* Second child div */}
                <Image
                  src="/images/merriman/pic10.png"
                  width="500"
                  height="350"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg dark:bg-gray-dark py-20">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
                Field Trips & Community Learning
              </h2>
              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                At{" "}
                <span className="font-bold">
                  Merriman Childcare and Learning Center
                </span>
                , learning goes beyond the classroom. We believe children thrive
                when they explore the world around them. That’s why we plan
                regular field trips to enrich our curriculum and spark
                curiosity.
              </p>
              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                One of our favorite destinations will be{" "}
                <span className="font-bold">KidsQuest Children’s Museum</span>,
                located just 0.2 miles from our center. Our children will have
                the chance to engage in hands-on activities, story times, art
                workshops, and interactive play that build creativity,
                problem-solving, and social skills. After morning activities,
                children will enjoy lunch together at the museum before
                returning to our center for a restful nap.
              </p>
              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                Another favorite destination for our children will be the
                Bellevue Public Library, located just{" "}
                <span className="font-bold">0.2 miles away</span>, right next to
                KidsQuest Children’s Museum.
              </p>
              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                At our center, we believe that{" "}
                <span className="font-bold">
                  reading habits should start very young
                </span>
                . By visiting the library regularly, children will see books as
                part of everyday life. We encourage them to explore stories,
                pictures, and ideas, helping them build a lifelong love of
                books.
              </p>
              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                All field trips are guided by our teachers and parent
                chaperones, with small group ratios (around{" "}
                <span className="font-bold">2 adults for every 6 children</span>
                ) to ensure safety and individualized attention.
              </p>
              <div className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                These experiences allow children to:
                <ul>
                  <li>Discover new ideas and ways of thinking </li>
                  <li>
                    Practice independence and confidence in real-world
                    settings{" "}
                  </li>
                  <li>Build connections with the local community </li>
                  <li>Explore through art, science, history, and play </li>
                </ul>
              </div>

              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                ✨ At Merriman Childcare and Learning Center, every outing is
                designed to support our purpose: <br />
                <span className="font-bold">helping every child thrive</span>.
              </p>

              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                💡 <span className="font-bold">Parent Involvement</span>
                <br /> Parents are warmly encouraged to join as chaperones on
                our field trips. This shared experience helps strengthen the
                connection between home and school while creating joyful
                memories for both children and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg dark:bg-gray-dark py-20">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
                参观与社区学习
              </h2>
              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                在{" "}
                <span className="font-bold">
                  Merriman Childcare and Learning Center
                </span>
                ，学习不仅仅局限于教室。我们相信，孩子们在探索周围世界时才能真正茁壮成长。因此，我们会定期组织外出参观活动，丰富课程内容，激发孩子们的好奇心。
              </p>
              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                我们最喜欢的目的地之一是距离中心仅{" "}
                <span className="font-bold">
                  0.2 英里 的 KidsQuest 儿童博物馆
                </span>
                。孩子们将在那里参与动手活动、故事时间、艺术工作坊和互动游戏，培养创造力、解决问题的能力以及社交技巧。上午活动结束后，孩子们会在博物馆一起享用午餐，然后返回中心午休。
              </p>
              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                另一个目的地将是贝尔维尤公共图书馆，它距离中心仅有 0.2
                英里，就在 KidsQuest 儿童博物馆旁边。
                从小培养孩子的阅读习惯，把阅读融入到他们的日常生活中。让孩子们从小做起，热爱读书，并在阅读中感受到不一样的快乐。
              </p>
              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                参观活动由教师全程带领，小组比例控制在
                <span className="font-bold">
                  每 6 个孩子配 2 位老师或者家长义工
                </span>
                ，以确保安全。
              </p>
              <div className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                这些体验将帮助孩子们：
                <ul>
                  <li>发现新想法和新思维方式 </li>
                  <li>在真实环境中练习独立性和自信心</li>
                  <li>建立与社区的联系 </li>
                  <li>在艺术、科学、历史和游戏中探索 </li>
                  <li>养成热爱读书的好习惯 </li>
                </ul>
              </div>

              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                ✨ 在 Merriman Childcare and Learning
                Center，每一次外出活动都旨在实现我们的目标：: <br />
                <span className="font-bold">帮助每一个孩子茁壮成长</span>。
              </p>

              <p className="mx-auto max-w-5xl pb-10 text-left text-2xl text-gray-600 md:text-xl dark:text-gray-100">
                💡 <span className="font-bold">家长参与</span>
                <br />{" "}
                我们诚挚地邀请家长作为陪同人员参加我们的实地考察活动。这种共同的体验有助于加强家校之间的联系，同时为孩子和家人创造快乐的回忆。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBottom;
