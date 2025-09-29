import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactTop from "@/components/Contact/contactTop";
import ContactBottom from "@/components/Contact/contactBottom";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enrollment Page | MERRIMAN Childcare and Learning Center",
  description:
    "This is Enrollment Page for MERRIMAN Childcare and Learning Center",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <ContactTop />
      <ContactBottom />
    </>
  );
};

export default ContactPage;
