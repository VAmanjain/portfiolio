import React from "react";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full h-auto   flex justify-center items-center p-4 text-gray-700 py-10  "
    >
      <form
        method="POST"
        action="https://getform.io/f/3a91ce58-1c8a-4b95-9309-7c281be8e257"
        className=" flex flex-col max-w-[600px]   pt-[90px]"
      >
        <div
          className="pb-8 ">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me email-vaman.jain@17gmail.com{" "}
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 "
          type="text"
          placeholder="Name"
          name="name"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400"
        />
        <input
          className="my-4 bg-[#ccd6f6] p-2 "
          type="email"
          placeholder="Email"
          name="email"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="500"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          placeholder="Message"
          cols="20"
          rows="5"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="600"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-300 py-3 px-4 mx-auto my-8 flex items-center ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacts;
