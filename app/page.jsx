import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import features from "./data/features";
import { Card, CardContent } from "@/components/ui/card";
import { howItWorks } from "./data/howitWorks";
import { testimonials } from "./data/testimonial";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// import HeroSection from '@/components/hero'

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection></HeroSection>

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Powerful Features of Our Application
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-colors duration-300"
                >
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                      {feature.icon}
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground pt-2">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="text-muted-foreground">Foods in Database</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-muted-foreground">Personalized Meal Plans</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">99%</h3>
              <p className="text-muted-foreground">Tracking Accuracy</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">
                Real-time Calorie Info API
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How it Works</h2>
            <p className="text-muted-foreground">
              4 simple steps to use our produt :
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-background shadow-lg rounded-2xl p-6"
              >
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image}
                      width={48}
                      height={48}
                      alt={testimonial.author}
                      className="rounded-full object-cover border-2 border-primary/30"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-primary font-semibold">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <blockquote className="relative text-muted-foreground italic pl-4 border-l-4 border-primary/30">
                    <span className="text-xl text-primary font-bold mr-1">
                      “
                    </span>
                    {testimonial.quote}
                    <span className="text-xl text-primary font-bold ml-1">
                      ”
                    </span>
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full ">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground  sm:text-4xl md:text-5xl">Ready for setting Goals?</h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join Thousands of professionals who are healty by AI-powered Guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button size="lg" variant="secondary" className="h-11 mt-5 animate-bounce">
                Start Your Journey Today<ArrowRight className="ml-2 h-4 w-4"></ArrowRight>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
