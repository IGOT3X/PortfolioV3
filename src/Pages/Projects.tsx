const Projects = () => {
    return (
        <div className="flex sm:flex-row flex-col gap-[24px] text-black-100 fade-in pb-[64px]">
            <div className="flex flex-col gap-[302px] min-w-[140px] pl-[31px] pt-[24px]">
                <button onClick={() => history.back()} className="flex items-center gap-[12px]">
                    <div className="bg-black-100 w-[24px] h-[24px] rounded-[8px] flex items-center justify-center">
                        <img src="back.svg" alt="" />
                    </div>
                    <p className=" underline font-semibold">Go back</p>
                </button>
                <h1 className="hidden sm:block transform vertical-text text-[96px] rotate-[-90deg]">Projects</h1>
            </div>
            <div className="flex flex-col sm:gap-[162px] gap-[84px] sm:pt-[190px] pt-[64px]">
                <div className="flex lg:flex-row flex-col items-start">
                    <div className="vertical-text text-[24px] text-black-200 sm:mr-[12px] ml-[12px] sm:ml-0">
                        #001
                    </div>
                    <div className="flex flex-col gap-[27px]">
                        <img src="unknown-big.png" className="sm:w-[779px]" alt="" />
                        <div className="flex flex-wrap mx-auto sm:mx-0 justify-center gap-[16px]">
                            <img src="figma.svg" alt="" />
                            <img src="html.svg" alt="" />
                            <img src="css.svg" alt="" />
                            <img src="js.svg" alt="" />
                            <img src="node.svg" alt="" />
                            <img src="python.svg" alt="" />
                            <img src="git.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col ml-[27px] max-w-[707px]">
                        <div className="flex gap-[12px] items-center pt-[24px] sm:pt-0">
                            <div className="relative">
                                <h1 className="font-semibold text-[24px]">unkwn</h1>
                                <div className="absolute w-[46px] h-[3px] bg-green-300 rounded-full"></div>
                            </div>
                            <a target="_blank" href="https://github.com/coeex/unkwn">
                                <img src="github.svg" alt="" />
                            </a>
                        </div>
                        <p className="text-black-200 pt-[10px]"><span className="text-green-300 font-semibold">World's most advanced</span> Twitch view bot which was capable of the following:</p>
                        <div className="flex flex-col gap-[13px] pt-[34px]">
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Voice recognition</span>, bot is able to respond to what was being said in the stream.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Realistic chat</span>, with the realistic chat feature bots were chatting about the game that was being played.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Response bot</span>, if the bot was tagged it was able to reply to that person coherently. </p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Converse feature</span>, bots talked between themselves from time to time, which made them seem even more realistic. </p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Kasada bypass</span>, my bot was able to bypass “Kasada” which is an anti-bot protection system used by Amazon.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">CDP and 1pixel exploit</span>, CPU usage was significantly lowered on all bots once I found these 2 methods to fake livestream views.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Online panel</span>, users had a seamless experience as they only had to press one button to start the bot via the online panel.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-start">
                    <div className="vertical-text text-[24px] text-black-200 sm:mr-[12px] ml-[12px] sm:ml-0">
                        #002
                    </div>
                    <div className="flex flex-col gap-[27px]">
                        <img src="vf-big.png" className="w-[779px]" alt="" />
                        <div className="flex flex-wrap justify-center gap-[16px] mx-auto sm:mx-0">
                            <img src="figma.svg" alt="" />
                            <img src="html.svg" alt="" />
                            <img src="css.svg" alt="" />
                            <img src="js.svg" alt="" />
                            <img src="react.svg" alt="" />
                            <img src="node.svg" alt="" />
                            <img src="git.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col ml-[27px] max-w-[707px]">
                        <div className="flex gap-[12px] items-center pt-[24px] sm:pt-0">
                            <div className="relative">
                                <h1 className="font-semibold text-[24px]">Vertical Future</h1>
                                <div className="absolute w-[46px] h-[3px] bg-green-300 rounded-full"></div>
                            </div>
                            <a target="_blank" href="https://verticalfuturee.com">
                                <img src="globe.svg" alt="" />
                            </a>
                        </div>
                        <p className="text-black-200 pt-[10px]"><span className="text-green-300 font-semibold">A website which provided personalized workouts for different kinds of sports.</p>
                        <div className="flex flex-col gap-[13px] pt-[34px]">
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Front and Back end development</span>, I have worked on the design, front end and back end.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Stripe integration</span>, Integrated stripe so users can purchase a plan from the website.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Authentication system</span>, So users can register and use the website effectively.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Workout mixer</span>, I created a workout mixer that mixes workouts based on what muscle group it works so users can have fresh workout routines all the time while having the correct muscle groups targeted.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Online panel</span>, this is where users can unlock new workouts, check water consumption, get rewards and check meal plans.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-start">
                    <div className="vertical-text text-[24px] text-black-200 sm:mr-[12px] ml-[12px] sm:ml-0">
                        #003
                    </div>
                    <div className="flex flex-col gap-[27px]">
                        <img src="tech-big.png" className="w-[779px]" alt="" />
                        <div className="flex flex-wrap justify-center gap-[16px] mx-auto sm:mx-0">
                            <img src="figma.svg" alt="" />
                            <img src="html.svg" alt="" />
                            <img src="css.svg" alt="" />
                            <img src="js.svg" alt="" />
                            <img src="react.svg" alt="" />
                            <img src="node.svg" alt="" />
                            <img src="git.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col ml-[27px] max-w-[707px]">
                        <div className="flex gap-[12px] items-center pt-[24px] sm:pt-0">
                            <div className="relative">
                                <h1 className="font-semibold text-[24px]">Tech Oglasi</h1>
                                <div className="absolute w-[46px] h-[3px] bg-green-300 rounded-full"></div>
                            </div>
                            <a target="_blank"href="https://github.com/coeex/unkwn">
                                <img src="github.svg" alt="" />
                            </a>
                            <a target="_blank" href="https://tech-oglasi.com">
                                <img src="globe.svg" alt="" />
                            </a>
                        </div>
                        <p className="text-black-200 pt-[10px]">Online marketplace for technology, like ebay for technology. Work done:</p>
                        <div className="flex flex-col gap-[13px] pt-[34px]">
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Front and Back end development</span>, I have worked on the design, front end and back end.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">User chat system</span>, Users can chat between themselves, negotiate prices and talk about anything related to the product in question.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Review system</span>, Ability for users to leave reviews after every purchase. </p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Smart filters</span>, The filter system has been made to be as intuitive and as easy to use as possible. Everything can be filtered, from color to amount of GPU cards. </p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Filter saving</span>, Didn't find what you were looking for? Save the filters you have set and once a listing that matches your filters get's posted you will get notified.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Networking and bot mitigation via Cloudflare</span>, Used cloudflare for DNS resolution, Turnstile for bot mitigation and Vultr for hosting a VPS where the server operates.</p>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <img src="check-circle.svg" alt="" />
                                <p className="text-black-200"><span className="font-semibold">Stripe integration</span>, Had to integrate stripe so users can purchase items off of the website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
