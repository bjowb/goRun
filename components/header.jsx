import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  Bot,
  CalculatorIcon,
  CircleChevronDown,
  HeartPulseIcon,
  Phone,
  StarsIcon,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkUser } from "@/lib/inngest/CheckUser";

const Header = async () => {
  await checkUser();
  return (
    <header
      className="fixed  top-0 w-full border-b bg-background/80 backdrop:blur-md z-50
        supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images.png"
            alt="goRun"
            width={200}
            height={60}
            className="h-12 py-1 w-auto  object-contain"
          ></Image>
        </Link>

        <div className="flex items-center spacex-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">
                <CalculatorIcon className="h-4 w-4" />
                <span className="hidden md:block">Get-Calorie</span>
              </Button>
            </Link>
          </SignedIn>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarsIcon className="h-4 w-4" />
                <span className="hidden md:block">Additional Options</span>
                <CircleChevronDown></CircleChevronDown>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  href="/profile"
                  className="flex items-center justify-center md:justify-start w-full md:w-auto gap-2"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden md:block items-center">
                    Update User Info
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/meals"
                  className="flex items-center justify-center md:justify-start w-full md:w-auto gap-2"
                >
                  <Bot className="h-4 w-4" />
                  <span className="hidden md:block items-center">
                    Get Meal Suggestion
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/progress"
                  className="flex items-center justify-center md:justify-start w-full md:w-auto gap-2"
                >
                  <HeartPulseIcon className="h-4 w-4" />
                  <span className="hidden md:block items-center">
                    Get Progress Report
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/contact"
                  className="flex items-center justify-center md:justify-start w-full md:w-auto gap-2"
                >
                  <Phone className="h-4 w-4" />
                  <span className="hidden md:block items-center">
                    Contact Us
                  </span>
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
            {/* <SignUpButton /> */}
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
