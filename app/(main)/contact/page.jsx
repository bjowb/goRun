import React from "react";

// <section className="w-full ">
//         <div className="mx-auto py-24 gradient rounded-lg">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground  sm:text-4xl md:text-5xl">Ready for setting Goals?</h2>
//             <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
//               Join Thousands of professionals who are healty by AI-powered Guidance.
//             </p>
//             <Link href="/dashboard" passHref>
//               <Button size="lg" variant="secondary" className="h-11 mt-5 animate-bounce">
//                 Start Your Journey Today<ArrowRight className="ml-2 h-4 w-4"></ArrowRight>
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
const ContactPage = () => {
  return (
    // <div className="container mx-auto mt-24 mb-20 px-4 text-center">
    //   <h1 className="text-4xl font-bold text-">Thank You for Using Our App!</h1>
    //   <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
    //     We're so glad you're taking a step toward a healthier lifestyle. If you have
    //     any questions, feedback, or just want to say hello — we’d love to hear from you!
    //   </p>

    //   <div className="mt-12 bg-white shadow-md rounded-xl p-6 max-w-xl mx-auto border border-gray-200">
    //     <h2 className="text-2xl font-semibold text-blue-500 mb-4">Contact Us</h2>
    //     <div className="space-y-2 text-gray-600">
    //       <p>
    //         📧 Email us at:{" "}
    //         <a href="mailto:support@fixurlyf.app" className="text-blue-600 underline">
    //           support@fixurlyf.app
    //         </a>
    //       </p>
    //       <p>
    //         🐦 Follow us on Twitter:{" "}
    //         <a href="https://twitter.com/fixurlyf" className="text-blue-600 underline">
    //           @fixurlyf
    //         </a>
    //       </p>
    //       <p>
    //         💬 Join our Discord:{" "}
    //         <a href="https://discord.gg/your-invite-link" className="text-blue-600 underline">
    //           discord.gg/fixurlyf
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-6xl font-bold mb-4 gradient-title">Thank You</h2>
          <p className="text-muted-foreground">
            Thanks a lot guys for your love and support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Email */}
          <div className="bg-white dark:bg-muted shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-lg font-semibold mb-2 text-primary-background">
              📧 Email
            </h3>
            <p className="text-muted-foreground">
              <a href="mailto:pulktchhr@gmail.com" className="hover:underline">
                SeProject@gmail.com
              </a>
            </p>
          </div>

          {/* Twitter */}
          <div className="bg-white dark:bg-muted shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-lg font-semibold mb-2 text-primary-background">
              🐦 Twitter
            </h3>
            <p className="text-muted-foreground">
              <a
                href="https://twitter.com/fixurlyf"
                target="_blank"
                className="hover:underline"
              >
                @seproject
              </a>
            </p>
          </div>

          {/* Discord */}
          <div className="bg-white dark:bg-muted shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-lg font-semibold mb-2 text-primary-background">
              💬 Discord
            </h3>
            <p className="text-muted-foreground">
              <a
                href="https://discord.gg/your-invite-link"
                target="_blank"
                className="hover:underline"
              >
                seProject
              </a>
            </p>
          </div>

          {/* Instagram or GitHub */}
          <div className="bg-white dark:bg-muted shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-lg font-semibold mb-2 text-primary-background">
              📸 Instagram
            </h3>
            <p className="text-muted-foreground">
              <a
                href="https://instagram.com/fixurlyf"
                target="_blank"
                className="hover:underline"
              >
                seProject
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
