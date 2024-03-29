import React from "react";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import TestimonialCard from "@/components/testimonialCard";

const testimonialData = [
  {
    name: "Shivank Kacker",
    title: "Founder, Writeroo",
    image:
      "https://res.cloudinary.com/df0aad0ku/image/upload/v1695793089/blogs/pages/shivank_writeroo_e0oevg.jpg",
    description:
      "Jayash in his tenure as React Developer Intern at Writeroo built various components of demanding complexity crucial to the platform and it's ecosystem. His work has been excellent and production ready. He has a clear understanding of the requirements and is quick to adapt to new technologies and practices.",
  },
];

function HireMe() {
  return (
    <>
      <div className="mx-auto max-w-[55%] min-h-[25rem] my-16 md:max-w-[85%]">
        <h1>🤝 Let's work together </h1>
        <p className="mb-5">
          Looking for challenging opportunities to work as a software developer
          and solve real world problems. Recently Completed my internship tenure
          at{" "}
          <Link
            href="https://www.writeroo.net/"
            target="_blank"
            className="p-redirect"
          >
            Writeroo
          </Link>{" "}
          as a Frontend React Developer Intern.
        </p>

        <Link
          href="/resume"
          className="w-full text-primary flex justify-center items-center rounded-xl p-2 gap-2 text-lg font-semibold bg-gray-200/90 shine-p "
        >
          Get my resume
          <IoDocumentText size="20" className="text-primary" color="black" />
          <span className="shine"></span>
        </Link>

        <br />
        <br />

        <h1> Testimonials </h1>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-2">
          {testimonialData.map((testimonial, ind) => (
            <TestimonialCard testimonial={testimonial} key={ind} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HireMe;
