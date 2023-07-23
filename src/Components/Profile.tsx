import { useState } from "react";

const Profile = ()=>{

    const [toolTip,setToolTip] = useState("Luka Igrutinović");
    const [bSpinImage,setbSpinImage] =useState(false);

    const ResetToolTip = ()=>{
        setToolTip("Luka Igrutinović");
    }

    const SwitchImageSpin = ()=>{
        setbSpinImage(!bSpinImage);
    }

    return(
        <div className="flex items-center gap-[23px]">
        <img onClick={SwitchImageSpin} className={`w-[64px] h-[64px] transition ease-in-out duration-300 cursor-pointer ${bSpinImage?"sm:animate-spin":"hover:scale-105"}`} src="pfp.png" alt="" />
        <div className="relative">
            <h1 className="font-semibold text-[24px] w-[183px]">{toolTip}</h1>
            <div className="sm:absolute flex gap-[8px] sm:top-[-16px] sm:right-[-80px] justify-center">
                <a onMouseOver={()=>setToolTip("GitHub")} onMouseLeave={ResetToolTip} href="https://github.com/IGOT3X" className="transition ease-in-out duration-300 hover:scale-105" target="_blank"><img src="github.svg" alt="" /></a>
                <a onMouseOver={()=>setToolTip("Download CV")} onMouseLeave={ResetToolTip} href="#" className="transition ease-in-out duration-300 hover:scale-105"><img src="cv.svg" alt="" /></a>
            </div>
        </div>
    </div>
    )
}

export default Profile;