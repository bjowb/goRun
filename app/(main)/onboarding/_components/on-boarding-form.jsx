"use client";

import { onboardingSchema } from "@/app/lib/schema";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { dietaryPreferences, activityLevels } from "@/app/data/food";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
// import { updateUser } from "@/app/actions/user"; // Uncomment and use your server action

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const OnboardingForm = () => {
  const router = useRouter();

  const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updateResult,
  } = useFetch(updateUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      age: "",
      weight: "",
      height: "",
      gender: "",
      activityLevel: "",
      dietaryPreference: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data) => {
    // await updateUser(data); // Uncomment and use your server action
    // router.push("/dashboard"); // Redirect after onboarding
    // alert(JSON.stringify(data, null, 2)); // For demo
    // console.log("Form Data:", data); /// For demo

    try {
      // console.log("Form Data:", data); /// For demo
      const formattedFood = `${data.dietaryPreference}-${data.activityLevel
        .toLowerCase()
        .replace(/ /g, "-")}`;

      await updateUserFn({
        ...data,
        dietaryPreference: formattedFood,
      });
    } catch (error) {
      console.error("Onboarding Error:", error);
    }
  };

  useEffect(() => {
    if (updateResult?.success && !updateLoading) {
      // router.push("/dashboard");
      toast.success("Profile updated successfully!");
      router.push("/dashboard");
      router.refresh();
    }
  }, [updateResult, updateLoading]);

  return (
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2">
        <CardHeader>
          <CardTitle className="gradient-title text-4xl">
            Complete Your Profile
          </CardTitle>
          <CardDescription>
            Fill in your details to get personalized food and activity
            recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                {...register("age", { valueAsNumber: true })}
                className="input"
                placeholder="Enter your age "
              />
              {errors.age && (
                <p className="text-[0.6rem] text-accent-foreground pl-3">
                  {errors.age.message}
                </p>
              )}
            </div>
            {/* Weight */}
            <div className="space-y-2">
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                type="number"
                {...register("weight", { valueAsNumber: true })}
                className="input"
                placeholder="Enter your weight (kg)"
              />
              {errors.weight && (
                <p className="text-[0.6rem] text-accent-foreground pl-3">
                  {errors.age.message}
                </p>
              )}
            </div>
            {/* Height */}
            <div className="space-y-2">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                type="number"
                {...register("height", { valueAsNumber: true })}
                className="input"
                placeholder="Enter your Height (cm)"
              />
              {errors.height && (
                <p className="text-[0.6rem] text-accent-foreground pl-3">
                  {errors.age.message}
                </p>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                // className="w-full "
                onValueChange={(value) => setValue("gender", value)}
                value={watch("gender")}
              >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  {genderOptions.map((g) => (
                    <SelectItem key={g.value} value={g.value}>
                      {g.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>
            {/* Activity Level */}
            <div className="space-y-2">
              <Label htmlFor="activityLevel">Activity Level</Label>
              <Select
                onValueChange={(value) => setValue("activityLevel", value)}
                value={watch("activityLevel")}
              >
                <SelectTrigger id="activityLevel">
                  <SelectValue placeholder="Select Activity Level" />
                </SelectTrigger>
                <SelectContent>
                  {activityLevels.map((level) => (
                    <SelectItem key={level.id} value={level.id}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.activityLevel && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.activityLevel.message}
                </p>
              )}
            </div>
            {/* Dietary Preference */}
            <div className="space-y-2">
              <Label
                htmlFor="dietaryPreference"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Diet Preference
              </Label>
              <Select
                onValueChange={(value) => setValue("dietaryPreference", value)}
                value={watch("dietaryPreference")}
              >
                <SelectTrigger id="dietaryPreference">
                  <SelectValue placeholder="Select Food Preference" />
                </SelectTrigger>
                <SelectContent>
                  {dietaryPreferences.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.dietaryPreference && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dietaryPreference.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={updateLoading}>
              {updateLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Complete Profile"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;
