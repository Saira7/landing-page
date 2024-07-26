import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Empower Your Business with Our Expertise",
  desc: "Discover the advantages of partnering with our software company. Our team delivers cutting-edge solutions that drive growth and efficiency. Here’s how we can transform your business.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Innovative Solutions",
      desc: "We leverage the latest technologies to provide innovative solutions tailored to your business needs.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Expert Team",
      desc: "Our team consists of experienced professionals who are experts in their respective fields.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Custom Development",
      desc: "We deliver custom software solutions that are specifically designed to meet your unique requirements.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Why Choose Us?",
  desc: "We offer comprehensive services that ensure your business stays ahead in a competitive market. Here are more reasons why partnering with us is the right choice.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile & Web Expertise",
      desc: "Our expertise in mobile and web development ensures your solutions are optimized for all platforms.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Cutting-Edge Technologies",
      desc: "We utilize the latest tools and technologies to build robust and scalable solutions.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "End-to-End Support",
      desc: "From initial consultation to post-launch support, we provide comprehensive services to ensure your success.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
