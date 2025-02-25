import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";

type Props = {};
const faqs = [
  {
    question: "What is the difference between timber house?",
    answer:
      "The exact price of the Customer project will depend on measurements, scope of work and change in designs / material / finishes. Based on these revisions, Customers can expect the quote value to rise or drop by approximately 5-10%. However, in case of non standard product selection / customization / additional scope of work, the prices may substantially increase from the initial quote value.",
  },
  {
    question: "What is the TimberHousing referral program?",
    answer:
      "The TimberHousing referral program rewards you with ₹5000 for every friend you invite who books their dream home with us. It's our way of saying thank you for helping us grow our community of happy homeowners.",
  },
  {
    question: "How does the TimberHousing referral program work?",
    answer:
      "Once you refer a friend to TimberHousing, and they book their dream home with us, you will receive ₹5000 as a reward. Make sure your friend mentions your referral during the booking process to ensure you get credited.",
  },
  {
    question: "What does referrer mean?",
    answer:
      "A referrer is someone who invites others to use TimberHousing's services. In our referral program, the referrer is the person who receives a reward when their referred friend books a home with us.",
  },
  {
    question: "How many times can a referrer invite others?",
    answer:
      "There is no limit to how many people a referrer can invite. Each successful referral that leads to a booking earns the referrer ₹5000, so the more friends you invite, the more you can earn.",
  },
  {
    question: "Can I refer multiple friends at once?",
    answer:
      "Yes, you can refer multiple friends at once. Each friend who books a home with us will count as a separate referral, and you'll earn ₹5000 for each successful booking.",
  },
  {
    question: "Are there any conditions for receiving the referral reward?",
    answer:
      "Yes, the referral reward is only given when the referred friend completes a booking of their dream home with TimberHousing. The referral must be mentioned during the booking process to qualify for the reward.",
  },
  {
    question: "When will I receive my referral reward?",
    answer:
      "You will receive your referral reward within 30 days of the referred friend completing their booking. We will notify you via email once the reward has been processed.",
  },
];

const Page = (props: Props) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full bg-[#FFE8E3] ">
        <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 py-2">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <Link
              href="/"
              className="text-xs md:text-sm leading-7 hover:text-primary-light transition-colors duration-300 text-[#42302D]"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 h-4" />
            <Link
              href="/faq"
              className="text-sm  md:text-sm leading-7 font-semibold hover:text-primary-light transition-colors duration-300 text-[#42302D]"
            >
              FAQ
            </Link>
          </div>
          <div className="w-full my-5 lg:my-20">
            <div className="flex items-center justify-center mb-1 lg:mb-2.5">
              <Image
                src="/vector1.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-16 md:w-[200px] lg:w-[350px]"
              />
              <h2 className="mx-1 text-xl md:text-2xl lg:text-[42px] lg:leading-[46px] text-[#322A29]  font-semibold whitespace-nowrap">
                Frequently <span className="text-primary-base">Asked</span>{" "}
                Questions
              </h2>
              <Image
                src="/vector2.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-16 md:w-[200px] lg:w-[350px]"
              />
            </div>
            <p className="text-sm lg:text-xl mx-auto font-light text-[#322A29] text-center">
              Wood is a high-performance building material
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F6F6]">
        <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-4 lg:py-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full mb-3 md:mb-5 lg:mb-8 bg-whites-light"
            >
              <div className="px-2.5 py-2 md:px-4 md:py-3 lg:px-8 lg:py-4 border-x-4 shadow-md border-primary-base rounded-lg">
                <h3 className="text-sm sm:text-base md:text-lg lg::text-[22px] lg:leading-10 font-medium text-[#322A29] mb-1 lg:mb-3">
                  {faq.question}
                </h3>

                {/* <div className="py-2 px-3 lg:p-4 bg-white  shadow-md border-primary-base rounded-b-lg text-gray-700"> */}
                <p className="text-xs md:text-base md:leading-8 lg:leading-10 font-light lg:font-normal text-gray-700">
                  {faq.answer}
                </p>
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
