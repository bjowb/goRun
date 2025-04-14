import { gettingUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout = async () => {
    const onBoarded = await gettingUserOnboardingStatus();
  
      if(!onBoarded){
          redirect("/onboarding");
      }

  return <div className="container mx-auto mt-24 mb-20">Dashboard Page</div>;
}
export default DashboardLayout;