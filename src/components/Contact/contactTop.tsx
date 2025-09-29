import SectionTitle from "../Common/SectionTitle";

const ContactTop = () => {
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
                  招生计划 Enrollment Plan
                </h1>

                <div className="mx-auto max-w-7xl px-4 py-6">
                  <div className="overflow-x-auto rounded-lg border">
                    <table className="min-w-full divide-y">
                      <thead className="sticky top-0">
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-xs font-bold tracking-wider"
                          >
                            Age Group
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-xs font-bold tracking-wider"
                          >
                            Capacity
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-xs font-bold tracking-wider"
                          >
                            Enrollment Options
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y">
                        <tr>
                          <td className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                            Under 1 year old
                          </td>
                          <td className="px-4 py-3 text-left text-sm whitespace-nowrap">
                            2
                          </td>
                          <td className="px-4 py-3 text-left text-sm whitespace-nowrap">
                            Full-day / Half-day / Mon-Wed-Fri / Tue-Thu
                          </td>
                        </tr>

                        <tr>
                          <td className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                            Ages 1-3
                          </td>
                          <td className="px-4 py-3 text-left text-sm whitespace-nowrap">
                            10
                          </td>
                          <td className="px-4 py-3 text-left text-sm whitespace-nowrap">
                            Full-day / Half-day / Mon-Wed-Fri / Tue-Thu
                          </td>
                        </tr>

                        <tr>
                          <td className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                            Ages 3-5
                          </td>
                          <td className="px-4 py-3 text-left text-sm whitespace-nowrap">
                            5
                          </td>
                          <td className="px-4 py-3 text-left text-sm whitespace-nowrap">
                            Full-day / Half-day / Mon-Wed-Fri / Tue-Thu
                          </td>
                        </tr>

                        <tr>
                          <td className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                            Ages 5-12 <br /> (Afterschool only)
                          </td>
                          <td className="px-4 py-3 text-left text-sm whitespace-nowrap">
                            10
                          </td>
                          <td className="px-4 py-3 text-left text-sm whitespace-nowrap">
                            Homework help / Healthy snacks <br /> Multilingual
                            environment (English, Chinese, Spanish) <br /> Extra
                            Math & Language support
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default ContactTop;
