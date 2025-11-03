import React from "react";
import Header from "./components/Header";
import Container from "./assets/Container.png";
import Humans from "./assets/Humans.png";
import Boxes from "./components/Boxes";
import Cards from "./components/Cards";
import Coments from "./components/Coments";
import Table from "./components/Table";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <h1 className="text-[48px] font-semibold text-center mt-[100px]">
        <span className="text-[48px] font-semibold text-[#FF9500]">
          Unlock
        </span>
        Your Creative Potential
      </h1>
      <p className="text-[38px] font-medium text-center mt-[20px]">
        with Online Design and Development Courses.
      </p>
      <p className="text-[18px] font-regular text-center mt-[10px]">
        Learn from Industry Experts and Enhance Your Skills.
      </p>
      <div className="flex justify-center mt-[60px]">
        <button className="cursor-pointer w-[195px] h-[63px] bg-[#FF9500] rounded-[8px] text-[18px] font-semibold text-white text-center">
          Explore Courses
        </button>
        <button className="cursor-pointer w-[159px] h-[63px] bg-white rounded-[8px] text-[18px] font-medium text-black text-center ml-[12px]">
          View Pricing
        </button>
      </div>
      <img className="mt-[100px] m-auto" src={Container} alt="Container" />
      <img src={Humans} alt="Humans" className="m-auto w-[1569px] mt-[100px]" />
      <div className="flex justify-between">
        <div>
          <p className="text-[48px] font-semibold mt-[150px] ml-[161px]">
            Benefits
          </p>
          <p className="text-18px font-regular text-[#59595A] w-[1177px] mt-[6px] ml-[161px]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className="w-[162px] h-[63px] bg-white border-1px-solid-black cursor-pointer rounded-[8px] mt-[237px] mr-[162px] text-[18px] font-medium text-center">
          VIEW ALL
        </button>
      </div>
      <Boxes />
      <div className="flex justify-between">
        <div>
          <p className="text-[48px] font-semibold mt-[100px] ml-[161px]">
            Our Courses
          </p>
          <p className="w-[1111px] text-[18px] font-regular text-[#59595A] mt-[6px] ml-[161px]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className="w-[162px] h-[63px] bg-white border-1px-solid-black cursor-pointer rounded-[8px] mt-[170px] mr-[162px] text-[18px] font-medium text-center">
          VIEW ALL
        </button>
      </div>
      <Cards />
      <div className="flex justify-between">
        <div>
          <p className="text-[48px] font-semibold mt-[108px] ml-[161px]">
            Our Testimonials
          </p>
          <p className="w-[1111px] text-[18px] font-regular text-[#59595A] mt-[6px] ml-[161px]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className="w-[162px] h-[63px] bg-white border-1px-solid-black cursor-pointer rounded-[8px] mt-[170px] mr-[162px] text-[18px] font-medium text-center">
          VIEW ALL
        </button>
      </div>
      <Coments />
      <div className="flex justify-between">
        <div>
          <p className="text-[48px] font-semibold mt-[168px] ml-[161px]">
            Our Pricing
          </p>
          <p className="w-[1111px] text-[18px] font-regular text-[#59595A] mt-[6px] ml-[161px]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="w-[272px] h-[79px] bg-white mt-[221px] flex justify-center pt-[12px] mr-[162px]">
          <button class="w-[132px] h-[55px] rounded-[8px] cursor-pointer bg-white text-gray-600 px-4 py-2 text-[18px] font-medium hover:bg-[#FF9500] hover:text-[white]">
            Monthly
          </button>
          <button class="w-[132px] h-[55px] rounded-[8px] cursor-pointer bg-white text-gray-600 px-4 py-2 text-[18px] font-medium hover:bg-[#FF9500] hover:text-[white]">
            Yearly
          </button>
        </div>
      </div>
      <Table />
      <Footer />
    </div >
  );
}

export default App;
