import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full bg-[#FFE8E3] ">
        <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 py-3">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <Link
              href="/"
              className="text-xs md:text-sm leading-7 hover:text-primary-light transition-colors duration-300 text-[#42302D]"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 h-4" />
            <Link
              href="/t&c"
              className="text-sm  md:text-sm leading-7 font-semibold hover:text-primary-light transition-colors duration-300 text-[#42302D]"
            >
              Terms & Conditions
            </Link>
          </div>
          <div className="w-full my-5 lg:my-20">
            <div className="flex items-center justify-center mb-2.5">
              <Image
                src="/vector1.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-16 md:w-[200px] lg:w-[350px]"
              />
              <h2 className="mx-1 text-2xl lg:text-[42px] lg:leading-[46px] text-[#322A29]  font-semibold whitespace-nowrap">
                Terms <span className="text-primary-base">&</span> Conditions
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

      <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-10 py-3 lg:py-5 pb-6 lg:pb-10">
        <h4 className="text-[#322A29]  text-lg md:text-xl lg:text-[22px] leading-10 font-semibold lg:mb-2">
          Price Validity
        </h4>
        <ol className="list-decimal pl-3 lg:pl-6 space-y-2 text-xs md:text-sm lg:text-base  font-light">
          <li className=" leading-6 md:leading-7 lg:leading-9">
            The exact price of the Customer project will depend on measurements,
            scope of work and change in designs / material / finishes. Based on
            these revisions, Customers can expect the quote value to rise or
            drop by approximately 5-10%. However, in case of non standard
            product selection / customization / additional scope of work, the
            prices may substantially increase from the initial quote value.
          </li>
          <li className=" leading-6 md:leading-7 lg:leading-9">
            Based on Customer's initial discussion with the HomeLane
            representatives, Customer shall make an initial payment of either 5%
            of quote value or INR 25,000, whichever is higher, for booking the
            order with HomeLane, subject to terms and conditions mentioned
            herein, if applicable.
          </li>
          <li className=" leading-6 md:leading-7 lg:leading-9">
            The Price structure has 4 Installments:
            <p>
              a. First Installment - 5% of the quote value or INR 25,000,
              whichever is higher, and is paid at the time of order booking.
            </p>
            <p>
              b. Second Installment - 15% of the quote value, which is payable
              at the time of First Cut Design Finalization. The Customer order
              shall move to the site masking and design finalization stage only
              after payment of the Second Installment.
            </p>
            <p>
              c. Third Installment - 30% of the quote value, which is payable at
              the time of signing of the Works Contract. The Customer order
              shall move to the production stage only after payment of the Third
              Installment.
            </p>
            <p>
              d. Fourth/Final Installment - Remaining 50% of the quote value,
              which is payable as per the due date mentioned in the “Ready to
              Dispatch” email sent to the Customer.
            </p>
          </li>
        </ol>
        <p className=" leading-6 lg:leading-7 text-sm lg:text-base font-medium my-1.5 lg:my-2">
          Note: A non-refundable Convenience fee of 2% (including GST) on
          payment amount may be levied on certain modes of payment including
          Credit card.
        </p>

        <ol className="list-decimal pl-3 lg:pl-6 space-y-1 lg:space-y-2 text-xs md:text-sm lg:text-base  font-light">
          <li className=" leading-6 md:leading-7 lg:leading-9">
            The name used for order booking should be in line with the KYC of
            the customer. No name change or GST number inclusion is possible
            once order is booked. Disclosing complete names at the time of order
            booking will help for all legal communications, availing finance
            options, GST Invoice in case of registered person and processing
            refund if in case of cancellation as specified in this terms and
            conditions.
          </li>
          <li className=" leading-6 md:leading-7 lg:leading-9">
            For booking an order with HomeLane, Customer quote value should
            include a minimum of INR 1,50,000 of "woodwork". In case of the
            quote value having woodwork less than INR 1,50,000, the same shall
            not be accepted.
          </li>
          <li className=" leading-6 md:leading-7 lg:leading-9">
            The initial quote value provided by HomeLane at the time of order
            booking may not include civil, plumbing, gas-piping or electrical
            work. The exact value of the quote will depend on the site
            conditions.
          </li>
          <li className=" leading-6 md:leading-7 lg:leading-9">
            The Fourth/ final installment payment has to be completed before the
            material dispatch from the factory and not before installation.
            HomeLane shall not dispatch the materials, unless the Final
            Installment is received and approved by HomeLane.
          </li>
          <li className=" leading-6 md:leading-7 lg:leading-9">
            Between First Installment and Third Installment payment stage of
            Customer order brand partnered categories such as appliances, lights
            and loose furniture etc. are subject to price fluctuation and may
            not be available due to stock issues from the manufacturer’s end. In
            such cases, the Customer will have an option to choose the other
            available products.
          </li>
          <li className=" leading-6 md:leading-7 lg:leading-9">
            We have categorised the work of HomeLane as interior solutions and
            has been considered as “Works Contract Services of Interior
            Solutions” (SAC 995476). Place of supply will be considered based on
            the state where the installation is to be carried out irrespective
            of bill to state. GST will be collected on each advance payment and
            GST invoices are raised upon completion of the project.
          </li>
          <li className=" leading-6 md:leading-7 lg:leading-9">
            If a customer wishes to make payments in cash, Homelane can accept
            cash up to Rs.199,999/- between all the stages of the respective
            project.
            <p>
              a. Maximum amount of cash that Homelane accepts without PAN is
              Rs.49,999/-
            </p>
            <p>
              b. Maximum amount of cash that Homelane accepts with PAN is
              Rs.1,99,999/- and note that, PAN should belong to the customer
              ONLY and it is mandatory to obtain copy of the PAN from a customer
              and to be shared with Finance team to approve payments.
            </p>
            <p>
              c. Orders can not be split to accommodate additional cash from a
              customer.
            </p>
          </li>
          <li className=" leading-6 md:leading-7 lg:leading-9">
            If the fourth installment (i.e. the final 50 % of the estimate) is
            not paid by the Customer within the time stipulated in the “Ready to
            dispatch” email sent to the Customer, then the Customer shall be
            liable to pay a demurrage charge of INR 500 per day, from the second
            day that the instalment becomes due till such time that the same is
            paid in full.
          </li>
          <li className=" leading-6 md:leading-7 lg:leading-9">
            The final quote value shall be valid for a period of six (6) months.
            In case of extension of the quote validity beyond 6 months, then the
            prices shall vary, as per the then existing pricing.
          </li>
          <li className=" leading-6 md:leading-7 lg:leading-9">
            All payments made by the Customer throughout their engagement with
            HomeLane should be approved by HomeLane via email communication, and
            only on such approval, the payment shall be deemed effective.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Page;
