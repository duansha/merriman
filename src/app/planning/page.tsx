import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Donates from "@/components/Donates";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teaching Planning Page | MERRIMAN Childcare and Learning Center",
  description:
    "This is Teaching Planning Page for MERRIMAN Childcare and Learning Center",
  // other metadata
};

const Donations = () => {
  return (
    <>
      <Donates />
    </>
  );
};

export default Donations;
