import React from "react";

import ContactForm from "../Component/ContactForm";

function contact() {
  const contacts = [
    {
      id: 1,
      text: "1 Grafton Street,Dublin, Ireland University.",
      icon: "",
    },
    { id: 2, text: "+255 872 051 9340", icon: "" },
    { id: 3, text: "example@gmail.com", icon: "" },
  ];
  return (
    <div className="bg-white grid gap-20 grid-cols-2 p-6 m-6">
      <div>
        <ContactForm />
        {/* <p className="font-bold">If You Have Any Question</p>
        <ContactInput placeholder="Your Name" />
        <ContactInput placeholder="Your Email" />
        <textarea
          rows={4}
          placeholder="Your Messages"
          className="bg-gray-100 rounded-tl-xl px-4 py-1 text-sm mt-2 w-full"
        />
        <ButtobBlue text="Submit Now" width="full" /> */}
      </div>
      <div className="flex flex-col justify-between">
        <p>GET IN TOUCH</p>
        <p className="font-bold text-3xl">Need A Consultation?</p>
        <p className="">
          if you need a consultation, then leave you details in the feedback
          form and we will connect you as soon as possible
        </p>
        <div className="flex flex-col justify-between">
          {contacts.map((contact) => {
            return (
              <div
                key={contact.id}
                className="flex flex-col justify-between mt-2"
              >
                <p className="text-sm">{contact.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default contact;
