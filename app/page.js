"use client"
import { useRef } from "react";

import Image from "next/image";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Card } from "@/components/card";
import Experience from "@/components/experience";
import { Footer } from "@/components/footer";
export default function Home() {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    price: useRef(null),
    blog: useRef(null),
  }
  
  const handleScroll = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="m-6 flex flex-col gap-6" ref={refs.home}>
      <Header onNavigate={handleScroll} />
      <div ref={refs.about}>
        <Hero />
      </div>
      <div className="bg-gray-100 rounded-md">
        <div ref={refs.portfolio}>
          <Container/>
          <Card/>
        </div>
      </div>
      <div ref={refs.price}>
        <Experience/>
      </div>
      <div ref={refs.blog}>
        <Footer/>
      </div>
    </div>
  );
}