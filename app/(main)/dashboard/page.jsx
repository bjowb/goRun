import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

const DashBoardPage = async() => {
    // const {isOnboarding} = await getUserOnboardingStatus();

    // if(!isOnboarding){
    //     redirect("/onboarding");
    // }

    return <div>Dashboard Page</div>
}

export default DashBoardPage;