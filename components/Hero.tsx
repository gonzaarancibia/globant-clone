import { NextPage } from "next";
import Image from "next/image";
import arrowImg from "@/public/arrow.png";
import stars from "@/public/stars.svg";

const HeroSection: NextPage = ({}) => {
  return (
    <section className="relative h-screen" aria-labelledby="hero-title">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://statics.globant.com/com/public/styles/webp/public/2024-08/ai-bg-desktop_0.jpg.webp?itok=7SEbZLJD")',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-center items-center lg:items-start lg:pl-16 xl:pl-[8%] 
        mx-auto lg:text-left px-4 sm:px-4 max-md:px-10 lg:pb-10 max-lg:items-start"
      >
        {/* Title */}
        <h1
          id="hero-title"
          className="text-6xl md:text-7xl lg:text-8xl font-medium text-gray-600 max-w-3xl
          tracking-tight leading-tight"
        >
          Technology
          <br />
          that dares to
          <br />
          <span className="bg-gradient-to-r to-yellow-400 from-green-500 bg-clip-text text-transparent">
            delight
          </span>
        </h1>

        {/* Search Input */}
        <div className="mt-10">
          <form
            className="flex sm:flex-row gap-1 items-center space-y-4 sm:space-y-0 sm:space-x-4"
            role="search"
            aria-label="Search chatbot assistance"
          >
            <div className="relative flex-1 max-w-[60vw] max-md:w-full">
              <label htmlFor="question-input" className="sr-only">
                Search for assistance
              </label>
              <input
                id="question-input"
                name="question"
                type="search"
                placeholder="Hello! How may I help you?"
                aria-label="Search for assistance"
                className="w-full bg-[#eaeef5] border-0 rounded-[20rem]
                text-[#575c65] placeholder:text-[#757575] font-medium text-[1.6rem] leading-[2.8rem] h-[6rem] 
                px-[2.5rem] py-[2rem] focus:outline-none focus:ring-2 focus:ring-green-500
                max-md:text-sm max-md:leading-6 max-md:h-14 max-md:px-5 max-md:py-3"
              />

              <button
                type="submit"
                aria-label="Send search query"
                className="absolute right-10 max-md:right-6 top-1/2 transform -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <Image
                  src={arrowImg}
                  alt="Send search query"
                  className="w-[41px] h-[41px] rounded-[8px] bg-[#969BA3] p-[0.6rem]
                  max-md:w-6 max-md:h-7 max-md:p-[0.4rem]"
                />
              </button>
            </div>

            <Image
              className="max-md:relative bottom-2"
              src={stars}
              alt="Decorative stars"
            />
          </form>

          <p className="mt-4 text-sm text-gray-600 w-2/3 max-md:w-full">
            This chatbot is powered by Globant. AI-generated responses may be
            inaccurate, please double-check information. By using this chat, you
            confirm that you agree to Globant’s{" "}
            <a
              href="https://www.globant.com/privacy-policy"
              className="text-green-500 underline focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
