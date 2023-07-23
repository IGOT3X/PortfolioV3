import Profile from "../Components/Profile";

const Home = () => {
    return (
        <div className="w-screen sm:h-screen bg-black-900 sm:flex text-black-100">
            <div className="absolute sm:w-[1200px] sm:h-[1200px] rounded-full radial-bubble top-[-600px] left-[-200px]"></div>
            <div className="absolute sm:w-[1200px] sm:h-[1200px] rounded-full radial-bubble bottom-[-600px] right-[-200px]"></div>
            <div className="sm:ml-[123px] pt-[64px] sm:pt-0 w-full h-full flex flex-col sm:items-start items-center justify-center sm:max-w-[513px] z-40 fade-in">
                <Profile />
                <h1 className="font-semibold sm:text-[96px] text-[64px] pt-[24px]">Full-Stack <br /> developer;</h1>
                <p className="text-green-300 font-semibold sm:text-[24px] pt-[8px] text-center sm:text-left px-[16px] sm:px-0">Proficient in crafting dynamic and user-centric web applications.</p>
                <div className="w-[130px] h-[60px] mt-[17px] items-center justify-center flex sm:block">
                    <a href="#" className="p-[10px] bg-black-100 text-[18px] font-semibold text-black-900 rounded-[8px] transition-[padding] ease-in-out duration-300 hover:p-[12px]">Projects</a>
                </div>
                <div className="flex flex-col items-center mx-auto gap-[17px] pt-[24px] sm:pt-0">
                    <p className="text-black-400 font-semibold">Technology stack:</p>
                    <div className="flex flex-wrap max-w-[294px] sm:max-w-full justify-center gap-[16px]">
                        <img src="figma.svg" alt="" />
                        <img src="html.svg" alt="" />
                        <img src="css.svg" alt="" />
                        <img src="react.svg" alt="" />
                        <img src="js.svg" alt="" />
                        <img src="node.svg" alt="" />
                        <img src="python.svg" alt="" />
                        <img src="docker.svg" alt="" />
                        <img src="git.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="md:flex hidden sm:overflow-auto xl:overflow-visible flex-col transition ease-in-out duration-700 2xl:rotate-[-32deg] xl:rotate-[-24deg] sm:rotate-[0deg] items-center gap-[75px] fade-in">
                <img className="w-[720px]" src="unknown-big.png" alt="" />
                <img className="w-[1018px]" src="vf-big.png" alt="" />
                <img className="w-[720px]" src="tech-big.png" alt="" />
            </div>
            <div className="flex flex-col sm:hidden transition ease-in-out duration-700 items-center gap-[75px] pt-[64px]">
                <h1 className="font-semibold text-[18px]">Some of the projects inlcude:</h1>
                <a  href="" className="flex flex-col gap-[8px]">
                    <img className="w-[294px]" src="unknown-big.png" alt="" />
                    <h1 className="font-semibold">unkwn.</h1>
                </a>
                <a  href="" className="flex flex-col gap-[8px]">
                    <img className="w-[294px]" src="vf-big.png" alt="" />
                    <h1 className="font-semibold">Vertical Future.</h1>
                </a>
                <a  href="" className="flex flex-col gap-[8px]">
                    <img className="w-[294px]" src="tech-big.png" alt="" />
                    <h1 className="font-semibold">Tech Oglasi.</h1>
                </a>
            </div>
        </div>
    )
}

export default Home;