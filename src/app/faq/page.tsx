import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactTop from "@/components/Faq/contactTop";
import ContactBottom from "@/components/Faq/contactBottom";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Page | MERRIMAN Childcare and Learning Center",
  description: "This is FAQ Page for MERRIMAN Childcare and Learning Center",
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
