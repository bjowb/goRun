import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100vh] mb-4">
        <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="mt-6 text-lg text-gray-600 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" >
        <Button>Return Home</Button>
        </Link>
        </div>
    );
    }

export default NotFoundPage;