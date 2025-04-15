"use client";

import react, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const HandleScroll = () => {
      const scrollPosition = window.scrollY;
      const scroolThreshold = 300;

      if (scrollPosition > scroolThreshold) {
        imageElement.classList.add("scrolled");
      }
      else{
        imageElement.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll',HandleScroll);

    return () => window.removeEventListener('scroll',HandleScroll)
  },[]);
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-16 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="gradient-title text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
            Track today.
            <br />
            Flex tomorrow
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Log the snacks. Dodge the breakdowns. Stay hot.
            <br /> It’s giving... "I tried." And that’s enough.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="/onboarding">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>

          <Link href="https://www.youtube.com/shorts/y2EY3jUWtlE">
            <Button size="lg" className="px-8" variant="outline">
              Cry like bich
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/gym.jpg"
              width={900}
              height={1200}
              alt="Banner"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
