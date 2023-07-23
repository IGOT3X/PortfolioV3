import { useState } from "react";

const Profile = ()=>{

    const [toolTip,setToolTip] = useState("Luka Igrutinović");

    const ResetToolTip = ()=>{
        setToolTip("Luka Igrutinović");
    }

    return(
        <div className="flex items-center gap-[23px]">
        <img className="w-[64px] h-[64px]" src="pfp.png" alt="" />
        <div className="relative">
            <h1 className="font-semibold text-[24px] w-[183px]">{toolTip}</h1>
            <div className="absolute flex gap-[8px] top-[-16px] right-[-80px]">
                <a onMouseOver={()=>setToolTip("IGot3X")} onMouseLeave={ResetToolTip} href="https://github.com/IGOT3X" target="_blank"><img src="github.svg" alt="" /></a>
                <a onMouseOver={()=>setToolTip("Download CV")} onMouseLeave={ResetToolTip} href="#"><img src="cv.svg" alt="" /></a>
            </div>
        </div>
    </div>
    )
}

export default Profile;