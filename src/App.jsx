import React from 'react'
import Header from "./components/Header"
import Container from "./assets/Container.png"
import Humans from "./assets/Humans.png"
import Vector from "./assets/Vector.png"
import ImageOne from "./assets/Image1.png"
import ImageTwo from "./assets/Image2.png"
import ImageThree from "./assets/Image3.png"
import ImageFour from "./assets/Image4.png"
import ImageFive from "./assets/Image5.png"
import ImageSix from "./assets/Image6.png"
import ProfileOne from "./assets/Profile1.png"
import ProfileTwo from "./assets/Profile2.png"
import ProfileThree from "./assets/Profile3.png"
import ProfileFour from "./assets/Profile4.png"


function App() {

  return (
    <div>
      <Header />
      <h1 className='text-[48px] font-semibold text-center mt-[100px]'><span className='text-[48px] font-semibold text-[#FF9500]'>Unlock </span>Your Creative Potential</h1>
      <p className='text-[38px] font-medium text-center mt-[20px]'>with Online Design and Development Courses.</p>
      <p className='text-[18px] font-regular text-center mt-[10px]'>Learn from Industry Experts and Enhance Your Skills.</p>
      <div className='flex justify-center mt-[60px]'>
        <button className='cursor-pointer w-[195px] h-[63px] bg-[#FF9500] rounded-[8px] text-[18px] font-semibold text-white text-center'>Explore Courses</button>
        <button className='cursor-pointer w-[159px] h-[63px] bg-white rounded-[8px] text-[18px] font-medium text-black text-center ml-[12px]'>View Pricing</button>
      </div>
      <img className='mt-[100px] m-auto' src={Container} alt="Container" />
      <img src={Humans} alt="Humans" className='m-auto w-[1569px] mt-[100px]' />
      <div className='flex justify-between'>
        <div>
          <p className='text-[48px] font-semibold mt-[150px] ml-[161px]'>Benefits</p>
          <p className='text-18px font-regular text-[#59595A] w-[1177px] mt-[6px] ml-[161px]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        </div>
        <button className='w-[162px] h-[63px] bg-white border-1px-solid-black cursor-pointer rounded-[8px] mt-[237px] mr-[162px] text-[18px] font-medium text-center'>VIEW ALL</button>
      </div>
      <div className="flex flex-wrap mt-[80px] justify-center gap-[20px]">
        <div className="bg-white w-[519px] h-[437px] rounded-12px p-[50px 50px]">
          <p className='text-[80px] font-bold ml-[400px] '>01</p>
          <p className='text-[24px] font-semibold mt-[50px] ml-[50px]'>Flexible Learning Schedule</p>
          <p className='text-[18px] font-regular mt-[14px] ml-[50px] w-[420px]'>Fit your coursework around your existing commitments and obligations.</p>
          <img src={Vector} alt="" className='mt-[70px] ml-[415px] cursor-pointer' />
        </div>
        <div className="bg-white w-[519px] h-[437px] rounded-12px p-[50px 50px]">
          <p className='text-[80px] font-bold ml-[400px] '>02</p>
          <p className='text-[24px] font-semibold mt-[50px] ml-[50px]'>Flexible Learning Schedule</p>
          <p className='text-[18px] font-regular mt-[14px] ml-[50px] w-[420px]'>Fit your coursework around your existing commitments and obligations.</p>
          <img src={Vector} alt="" className='mt-[70px] ml-[415px] cursor-pointer' />
        </div>
        <div className="bg-white w-[519px] h-[437px] rounded-12px p-[50px 50px]">
          <p className='text-[80px] font-bold ml-[400px] '>03</p>
          <p className='text-[24px] font-semibold mt-[50px] ml-[50px]'>Flexible Learning Schedule</p>
          <p className='text-[18px] font-regular mt-[14px] ml-[50px] w-[420px]'>Fit your coursework around your existing commitments and obligations.</p>
          <img src={Vector} alt="" className='mt-[70px] ml-[415px] cursor-pointer' />
        </div>
        <div className="bg-white w-[519px] h-[437px] rounded-12px p-[50px 50px]">
          <p className='text-[80px] font-bold ml-[400px] '>04</p>
          <p className='text-[24px] font-semibold mt-[50px] ml-[50px]'>Flexible Learning Schedule</p>
          <p className='text-[18px] font-regular mt-[14px] ml-[50px] w-[420px]'>Fit your coursework around your existing commitments and obligations.</p>
          <img src={Vector} alt="" className='mt-[70px] ml-[415px] cursor-pointer' />
        </div>
        <div className="bg-white w-[519px] h-[437px] rounded-12px p-[50px 50px]">
          <p className='text-[80px] font-bold ml-[400px] '>05</p>
          <p className='text-[24px] font-semibold mt-[50px] ml-[50px]'>Flexible Learning Schedule</p>
          <p className='text-[18px] font-regular mt-[14px] ml-[50px] w-[420px]'>Fit your coursework around your existing commitments and obligations.</p>
          <img src={Vector} alt="" className='mt-[70px] ml-[415px] cursor-pointer' />
        </div>
        <div className="bg-white w-[519px] h-[437px] rounded-12px p-[50px 50px]">
          <p className='text-[80px] font-bold ml-[400px] '>06</p>
          <p className='text-[24px] font-semibold mt-[50px] ml-[50px]'>Flexible Learning Schedule</p>
          <p className='text-[18px] font-regular mt-[14px] ml-[50px] w-[420px]'>Fit your coursework around your existing commitments and obligations.</p>
          <img src={Vector} alt="" className='mt-[70px] ml-[415px] cursor-pointer' />
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <p className='text-[48px] font-semibold mt-[100px] ml-[161px]'>Our Courses</p>
          <p className='w-[1111px] text-[18px] font-regular text-[#59595A] mt-[6px] ml-[161px]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum habitasse in velit fringilla feugiat senectus in.</p>
        </div>
        <button className='w-[162px] h-[63px] bg-white border-1px-solid-black cursor-pointer rounded-[8px] mt-[170px] mr-[162px] text-[18px] font-medium text-center'>VIEW ALL</button>
      </div>
      <div className='flex flex-wrap ml-[161px] gap-[30px] mt-[80px]'>
        <div className='w-[783.5px] h-[807px] bg-white rounded-[12px] p-[50px]'>
          <img src={ImageOne} alt="" />
          <div className='flex mt-[40px] justify-between'>
            <p className='text-[18px] font-regular ml-[16px] text-[#4C4C4D]'>4 Weeks</p>
            <p className='text-[18px] font-regular mr-[335px] text-[#4C4C4D]'>Beginner</p>
            <p className='text-[20px] font-medium'>By John Smith</p>
          </div>
          <p className='text-[24px] font-semibold mt-[30px]'>Web Design Fundamentals</p>
          <p className='text-[18px] font-regular text-[#4C4C4D] mt-[14px] w-[630px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
          <button className='w-[683px] h-[63px] bg-[#F7F7F8] rounded-[8px] text-[18px] font-medium text-center mt-[30px] cursor-pointer'>Get it Now</button>
        </div>
        <div className='w-[783.5px] h-[807px] bg-white rounded-[12px] p-[50px]'>
          <img src={ImageTwo} alt="" />
          <div className='flex mt-[40px] justify-between'>
            <p className='text-[18px] font-regular ml-[16px] text-[#4C4C4D]'>6 Weeks</p>
            <p className='text-[18px] font-regular mr-[335px] text-[#4C4C4D]'>Intermediate</p>
            <p className='text-[20px] font-medium'>By Emily Jhonson</p>
          </div>
          <p className='text-[24px] font-semibold mt-[30px]'>UI/UX Design</p>
          <p className='text-[18px] font-regular text-[#4C4C4D] mt-[14px] w-[630px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
          <button className='w-[683px] h-[63px] bg-[#F7F7F8] rounded-[8px] text-[18px] font-medium text-center mt-[30px] cursor-pointer'>Get it Now</button>
        </div>
        <div className='w-[783.5px] h-[807px] bg-white rounded-[12px] p-[50px]'>
          <img src={ImageThree} alt="" />
          <div className='flex mt-[40px] justify-between'>
            <p className='text-[18px] font-regular ml-[16px] text-[#4C4C4D]'>8 Weeks</p>
            <p className='text-[18px] font-regular mr-[335px] text-[#4C4C4D]'>Intermediate</p>
            <p className='text-[20px] font-medium'>By David Brown</p>
          </div>
          <p className='text-[24px] font-semibold mt-[30px]'>Mobile App Development</p>
          <p className='text-[18px] font-regular text-[#4C4C4D] mt-[14px] w-[630px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
          <button className='w-[683px] h-[63px] bg-[#F7F7F8] rounded-[8px] text-[18px] font-medium text-center mt-[30px] cursor-pointer'>Get it Now</button>
        </div>
        <div className='w-[783.5px] h-[807px] bg-white rounded-[12px] p-[50px]'>
          <img src={ImageFour} alt="" />
          <div className='flex mt-[40px] justify-between'>
            <p className='text-[18px] font-regular ml-[16px] text-[#4C4C4D]'>10 Weeks</p>
            <p className='text-[18px] font-regular mr-[335px] text-[#4C4C4D]'>Beginner</p>
            <p className='text-[20px] font-medium'>By Sarah Thompson</p>
          </div>
          <p className='text-[24px] font-semibold mt-[30px]'>Graphic Design for Beginners</p>
          <p className='text-[18px] font-regular text-[#4C4C4D] mt-[14px] w-[630px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
          <button className='w-[683px] h-[63px] bg-[#F7F7F8] rounded-[8px] text-[18px] font-medium text-center mt-[30px] cursor-pointer'>Get it Now</button>
        </div>
        <div className='w-[783.5px] h-[807px] bg-white rounded-[12px] p-[50px]'>
          <img src={ImageFive} alt="" />
          <div className='flex mt-[40px] justify-between'>
            <p className='text-[18px] font-regular ml-[16px] text-[#4C4C4D]'>10 Weeks</p>
            <p className='text-[18px] font-regular mr-[335px] text-[#4C4C4D]'>Intermediate</p>
            <p className='text-[20px] font-medium'>By Michael Adams</p>
          </div>
          <p className='text-[24px] font-semibold mt-[30px]'>Front-End Web Development</p>
          <p className='text-[18px] font-regular text-[#4C4C4D] mt-[14px] w-[630px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
          <button className='w-[683px] h-[63px] bg-[#F7F7F8] rounded-[8px] text-[18px] font-medium text-center mt-[30px] cursor-pointer'>Get it Now</button>
        </div>
        <div className='w-[783.5px] h-[807px] bg-white rounded-[12px] p-[50px]'>
          <img src={ImageSix} alt="" />
          <div className='flex mt-[40px] justify-between'>
            <p className='text-[18px] font-regular ml-[16px] text-[#4C4C4D]'>6 Weeks</p>
            <p className='text-[18px] font-regular mr-[335px] text-[#4C4C4D]'>Advance</p>
            <p className='text-[20px] font-medium'>By Jennifer Wilson</p>
          </div>
          <p className='text-[24px] font-semibold mt-[30px]'>Advanced JavaScript</p>
          <p className='text-[18px] font-regular text-[#4C4C4D] mt-[14px] w-[630px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
          <button className='w-[683px] h-[63px] bg-[#F7F7F8] rounded-[8px] text-[18px] font-medium text-center mt-[30px] cursor-pointer'>Get it Now</button>
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <p className='text-[48px] font-semibold mt-[108px] ml-[161px]'>Our Testimonials</p>
          <p className='w-[1111px] text-[18px] font-regular text-[#59595A] mt-[6px] ml-[161px]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum habitasse in velit fringilla feugiat senectus in.</p>
        </div>
        <button className='w-[162px] h-[63px] bg-white border-1px-solid-black cursor-pointer rounded-[8px] mt-[170px] mr-[162px] text-[18px] font-medium text-center'>VIEW ALL</button>
      </div>
      <div className='flex flex-wrap justify-center mt-[80px] gap-[30px]'>
        <div className='w-[783.5px] h-[304px] bg-white p-[50px] relative'>
          <p className='w-[683px] text-[#4C4C4D] text-[18px] font-regular'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
          <div className='w-[783.5px] h-[123px] bg-[#FCFCFD] flex justify-between left-[0px] absolute bottom-[0px]'>
            <img src={ProfileOne} alt="" className='mt-[31.5px] ml-[50px] mb-[31.5px]' />
            <p className='text-[#333333] text-[18px] font-semibold mr-[350px] mt-[48px]'>Sarah L</p>
            <button className='w-[182px] h-[63px] bg-[#F7F7F8] mt-[30px] mr-[50px] rounded-[8px] cursor-pointer'>Read Full Story</button>
          </div>
        </div>
        <div className='w-[783.5px] h-[304px] bg-white p-[50px] relative'>
          <p className='w-[683px] text-[#4C4C4D] text-[18px] font-regular'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
          <div className='w-[783.5px] h-[123px] bg-[#FCFCFD] flex justify-between left-[0px] absolute bottom-[0px]'>
            <img src={ProfileTwo} alt="" className='mt-[31.5px] ml-[50px] mb-[31.5px]' />
            <p className='text-[#333333] text-[18px] font-semibold mr-[350px] mt-[48px]'>Sarah L</p>
            <button className='w-[182px] h-[63px] bg-[#F7F7F8] mt-[30px] mr-[50px] rounded-[8px] cursor-pointer'>Read Full Story</button>
          </div>
        </div>
        <div className='w-[783.5px] h-[304px] bg-white p-[50px] relative'>
          <p className='w-[683px] text-[#4C4C4D] text-[18px] font-regular'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
          <div className='w-[783.5px] h-[123px] bg-[#FCFCFD] flex justify-between left-[0px] absolute bottom-[0px]'>
            <img src={ProfileThree} alt="" className='mt-[31.5px] ml-[50px] mb-[31.5px]' />
            <p className='text-[#333333] text-[18px] font-semibold mr-[350px] mt-[48px]'>Sarah L</p>
            <button className='w-[182px] h-[63px] bg-[#F7F7F8] mt-[30px] mr-[50px] rounded-[8px] cursor-pointer'>Read Full Story</button>
          </div>
        </div>
        <div className='w-[783.5px] h-[304px] bg-white p-[50px] relative'>
          <p className='w-[683px] text-[#4C4C4D] text-[18px] font-regular'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
          <div className='w-[783.5px] h-[123px] bg-[#FCFCFD] flex justify-between left-[0px] absolute bottom-[0px]'>
            <img src={ProfileFour} alt="" className='mt-[31.5px] ml-[50px] mb-[31.5px]' />
            <p className='text-[#333333] text-[18px] font-semibold mr-[350px] mt-[48px]'>Sarah L</p>
            <button className='w-[182px] h-[63px] bg-[#F7F7F8] mt-[30px] mr-[50px] rounded-[8px] cursor-pointer'>Read Full Story</button>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <p className='text-[48px] font-semibold mt-[168px] ml-[161px]'>Our Pricing</p>
          <p className='w-[1111px] text-[18px] font-regular text-[#59595A] mt-[6px] ml-[161px]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum habitasse in velit fringilla feugiat senectus in.</p>
        </div>
        <div className='w-[272px] h-[79px] bg-white mt-[221px] flex justify-center pt-[12px] mr-[162px]'>
          <button class="w-[132px] h-[55px] rounded-[8px] cursor-pointer bg-white text-gray-600 px-4 py-2 text-[18px] font-medium hover:bg-[#FF9500] hover:text-[white]">Monthly</button>
          <button class="w-[132px] h-[55px] rounded-[8px] cursor-pointer bg-white text-gray-600 px-4 py-2 text-[18px] font-medium hover:bg-[#FF9500] hover:text-[white]">Yearly</button>
        </div>
      </div>
    </div >

  )
}

export default App
