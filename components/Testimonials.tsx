import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 py-14 border border-gray-200 rounded-2xl shadow-md dark:bg-trueGray-800 dark:border-trueGray-700">
            <p className="text-2xl leading-normal bg-indigo-50 p-4 rounded-lg dark:bg-indigo-900 dark:text-indigo-200">
              <Mark>“Our business transformed</Mark> after using their custom software solutions. Their innovative approach and dedicated support have been outstanding.”
            </p>
            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 py-14 border border-gray-200 rounded-2xl shadow-md dark:bg-trueGray-800 dark:border-trueGray-700">
            <p className="text-2xl leading-normal bg-indigo-50 p-4 rounded-lg dark:bg-indigo-900 dark:text-indigo-200">
              <Mark>“Their mobile and web development expertise</Mark> ensured our platform was optimized for all devices, resulting in a seamless user experience.”
            </p>
            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead Marketer at Netflix"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 py-14 border border-gray-200 rounded-2xl shadow-md dark:bg-trueGray-800 dark:border-trueGray-700">
            <p className="text-2xl leading-normal bg-indigo-50 p-4 rounded-lg dark:bg-indigo-900 dark:text-indigo-200">
              <Mark>“Their end-to-end support</Mark> and cutting-edge technologies have been crucial for our project’s success. We highly recommend their services.”
            </p>
            <Avatar
              image={userThreeImg}
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="56"
          height="56"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-semibold">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>
    </>
  );
}
