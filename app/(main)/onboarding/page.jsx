import React from "react";
import OnboardingForm from "./_components/on-boarding-form";
import { dietaryPreferences } from "@/app/data/food";
import { getUserOnboardingStatus } from "@/actions/user";

const OnboardingPage = async () =>{

//     //check if already onboarded
//     const { isOnboarded } = await getUserOnboardingStatus();

//     if (isOnboarded) {
//       redirect("/dashboard");
//     }

    return <main><OnboardingForm dietaryPreferences = "dietaryPreferences"/></main>
}

export default OnboardingPage;
