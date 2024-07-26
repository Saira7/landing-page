"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What services does your software company offer?",
    answer: "We offer a wide range of services including custom software development, mobile and web application development, UI/UX design, and cloud solutions.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on the complexity and scope of the project. Typically, a standard project can take anywhere from 2 to 6 months. We work closely with our clients to establish a timeline that meets their needs.",
  },
  {
    question: "What is your pricing model?",
    answer: "Our pricing model is flexible and depends on the project's requirements. We offer both fixed-price and hourly rate models. We provide a detailed proposal after understanding the project scope and requirements.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance services. We ensure that your software remains up-to-date and continues to meet your business needs.",
  },
  {
    question: "Can you help with the design as well as development?",
    answer: "Absolutely. Our team includes experienced UI/UX designers who work closely with our developers to create intuitive and user-friendly designs.",
  },
  {
    question: "How do you ensure the quality of your software?",
    answer: "We follow industry best practices and have a robust quality assurance process in place. Our QA team conducts thorough testing to ensure that the software is reliable, secure, and performs well.",
  },
];

