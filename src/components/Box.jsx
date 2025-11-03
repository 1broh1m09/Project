import React from 'react'

function Box() {
    return (
        <div className="bg-white w-[519px] h-[437px] rounded-12px p-[50px 50px]">
            <p className="text-[80px] font-bold ml-[400px] ">01</p>
            <p className="text-[24px] font-semibold mt-[50px] ml-[50px]">
                Flexible Learning Schedule
            </p>
            <p className="text-[18px] font-regular mt-[14px] ml-[50px] w-[420px]">
                Fit your coursework around your existing commitments and
                obligations.
            </p>
            <img
                src={Vector}
                alt=""
                className="mt-[70px] ml-[415px] cursor-pointer"
            />
        </div>
    )
}

export default Box
