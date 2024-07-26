import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import styles from '../styles/animation.module.css';

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <div id="hero">
        <Hero />
      </div>

      <div id="benefits">
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </div>

      <div id="video">
        <SectionTitle
          preTitle="Watch a video"
          title="Learn how to fulfill your needs"
        >
          Watch How our Employees work to give you a better and outstanding result
        </SectionTitle>
        <Video videoId="fZ0D0cnR88E" />
      </div>

      <div id="testimonials">
        <SectionTitle
          preTitle="Testimonials"
          title="Here's what our customers said"
        >
          Our Customers are our Brand.
        </SectionTitle>
        <Testimonials />
      </div>

      <div id="faq">
        <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
          Some of the Questions you may be wondering about.
        </SectionTitle>
        <Faq />
      </div>

<div id="contact">
      <Cta /></div>
    </Container>
  );
}
