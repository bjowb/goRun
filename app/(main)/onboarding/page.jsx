import React from "react";
import OnboardingForm from "./_components/onboarding-form";
import { gettingUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import { foodCategories } from "@/app/data/food";

const OnboardingPage = async () => {

    const onBoarded = await gettingUserOnboardingStatus();

    if(onBoarded){
        redirect("/dashboard");
    }


    return(
        <main>
            <OnboardingForm foodCategories = {foodCategories}/>

        </main>
    )
}

export default OnboardingPage;