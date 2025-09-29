import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <>
      <section className="bg-bg dark:bg-gray-dark py-20">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-4xl px-4">
              <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
                Our Philosophy/我们的理念
              </h2>
              <p className="mx-auto max-w-4xl pb-10 text-left text-lg text-gray-600 md:text-xl dark:text-gray-100">
                Build strong, positive relationships. These relationships help
                children adapt happily and confidently in a safe environment.
                Believe in genuine care and presence. Children can feel our
                love, encouragement, and support, which helps them grow with
                trust and confidence. Respect every child. Each child is unique,
                with strengths waiting to be discovered and nurtured. Early
                Childhood Matters. From birth through third grade is a child’s
                most extraordinary period of development, and interactions with
                caring adults play a key role in brain development.
                <br />
                建立积极的师生关系。正向的关系能帮助孩子在安全的环境中快乐适应并建立自信。
                高质量的陪伴与关爱。孩子能感受到我们的爱、鼓励与支持，从而在信任和自信中茁壮成长。
                尊重每一个孩子。每个孩子都是独特的，会按照自己的步调成长；我们发现并培养他们的优势。
                早期教育至关重要。
                从出生到三年级是儿童发展最关键的阶段，高质量的陪护和关爱，对大脑发育起着决定性作用。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionTwo;
