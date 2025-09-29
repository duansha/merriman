import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Missions1 from "@/components/Missions";
import Mission2 from "@/components/Missions/Mission2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Page | MERRIMAN Childcare and Learning Center",
  description:
    "This is Curriculum Page for MERRIMAN Childcare and Learning Center",
  // other metadata
};

const Missions = () => {
  return (
    <>
      <Missions1 />
    </>
  );
};

export default Missions;
