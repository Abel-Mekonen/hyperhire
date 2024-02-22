import { CarouselBanner } from "@/components/main-banner";
import { Collections } from "@/components/collections";
import { Navbar } from "@/components/header";
import { Shortcuts } from "@/components/main-shortcuts";


export default async function Home() {

  return (
    <div className="
      max-w-[420px]
      lg:max-w-none
      min-w-[360px]
      m-auto
      bg-white
      mb-4
      text-black">

      <Navbar/>
      <CarouselBanner />
      <div className="px-[20px] lg:px-0 lg:w-[960px] lg:m-auto lg:mt-[40px]">
        <Shortcuts/>
        <Collections />
      </div>
    </div>
  );
}
