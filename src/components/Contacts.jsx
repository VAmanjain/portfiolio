import React from "react";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full h-auto   flex justify-center items-center p-4 text-gray-700 py-10  "
    >
      <div className="grid  tablet:grid-cols-2">
        <div></div>
        <div className="mx-auto">
          <form
            method="POST"
            action="https://getform.io/f/3a91ce58-1c8a-4b95-9309-7c281be8e257"
            className=" flex flex-col max-w-[480px]   pt-[90px]"
          >
            <div className="pb-8 ">
              <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                Contact
              </p>
              <p className="text-gray-300 py-4">
                // Submit the form below or shoot me email-
                <span className="font-semibold">vaman.jain@17gmail.com</span>
              </p>
            </div>
            <input
              className="bg-[#ccd6f6] p-2  "
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 bg-[#ccd6f6] p-2 "
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-[#ccd6f6] p-2"
              name="message"
              placeholder="Message"
              cols="20"
              rows="5"
            ></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-300 py-3 px-4 mx-auto my-8 flex items-center ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
