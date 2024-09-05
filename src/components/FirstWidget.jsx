import { useState } from 'react';
import Box from "../assets/box.svg";
import Question from "../assets/question.svg";

const FirstWidget = () => {

    const [isActive, setIsActive] = useState("aboutme");

    const clicked = (e, active) => {
        setIsActive(active);
    }

   
    return (
        <div className="h-[50%] w-[100%] bg-[#363c43] rounded-[27px] shadow-lg shadow-black">
            <div className="p-4 flex gap-4">
                <div>
                    <img src={Question} className="" alt="" />
                </div>
                <div className="h-[56px] bg-black rounded-2xl flex justify-evenly items-center font-semibold text-[12px]">
                    <div
                        onClick={(e) => clicked(e, "aboutme")}
                        className={`rounded-xl text-sm px-[39px] h-[40px]  ${isActive === "aboutme" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        flex justify-center items-center ml-2 hover:cursor-pointer 
                        ${isActive !== "aboutme" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                    
                    >
                        About Me
                    </div>
                    <div
                        onClick={(e) => clicked(e, "exp")}
                        className={`rounded-xl text-sm px-[54px] h-[40px] ${isActive === "exp" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        flex justify-center items-center ml-2 hover:cursor-pointer   
                        ${isActive !== "exp" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                    
                    >
                        Experiences
                    </div>
                    <div
                        onClick={(e) => clicked(e, "rec")}
                        className={`rounded-xl text-sm px-[48px] h-[40px] ${isActive === "rec" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'}
                        flex justify-center items-center ml-2 mr-2 hover:cursor-pointer
                        ${isActive !== "rec" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                    
                    >
                        Recommended
                    </div>
                </div>
            </div>
            <div className="flex gap-4 p-2 ml-2.5">
                <div className="mt-5">
                    <img src={Box} alt="" />
                </div>
                <div className="">
                    <p className="text-[#969696]">
                    I am a hardworking and enthusiastic college student pursuing my B.Tech degree in Information Technology from KGEC .
                    Being a Front-end developer and enthusiastic in data science and machine learning , I’m looking for a new opportunity
                    to develop my skills and expertise in my goal.
                    </p>
                </div>
                <div className="">
                    <div className="h-[48px] w-[6px] bg-gradient-to-t from-[#4A4E54] to-[#888989] rounded-full shadow-[2px_2px_3px_1px_#23222299] "></div>
                </div>
            </div>
        </div>
    )
}

export default FirstWidget
