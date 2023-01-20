import React from "react";
import contactData from "../data/ContactData";
import ContactItem from "./ContactItem";

const Contact = () => {
  const allContacts = contactData.map((item) => (
    <ContactItem
      key={item.id}
      icon={item.icon}
      adress={item.adress}
      type={item.type}
      send={item.send}
    />
  ));
  return (
    <div id="contact" className=" mt-16 pb-16 max-w-[1440px] xs:w-[80%] m-auto">
      <h2 className="text-4xl text-bold  font-serif mb-2 text-[#001b5e] pb-16 text-center">
        Get in touch
      </h2>
      <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
        {allContacts}
      </div>
    </div>
  );
};

export default Contact;
