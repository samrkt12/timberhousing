import Image from "next/image";
import WoodenCottageSeries from "./WoodenCottageSeries";
import WoodenHouseSeries from "./WoodenHouseSeries";
import WoodenCafeSeries from "./WoodenCafeSeries";

type Props = {};

const Series = (props: Props) => {
  return (
    <section className="relative w-full overflow-hidden pt-8 lg:pt-12 pb-6 lg:pb-16">
      <div className="relative z-20 h-full flex flex-col items-center max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-1 lg:mb-1.5">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          />
          <h2 className="mx-1  text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
            Series
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          />
        </div>
        <p className="text-sm lg:text-base mb-10 lg:mb-16 max-w-[58ch] mx-auto font-light text-center text-[#636363] px-6 lg:px-0">
          A series of timber houses designed with direct-angle views, allowing
          you to see the construction details of your home from every
          perspective.
        </p>
        <WoodenCottageSeries />
        <WoodenCafeSeries />
        <WoodenHouseSeries />
      </div>
    </section>
  );
};

export default Series;
