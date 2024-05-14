import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import meeting from "../public/assets/meeting.jpg";

function Home() {
    const router = useRouter();

    const handleSignin = (e) => {
        e.preventDefault();
        signIn("github");
    };
    return (
        <div className="w-full flex-col px-60 bg-slate-100 shadow justify-center items-center inline-flex">
            <div
                id="navbar-home"
                className="w-full p-2 relative flex-row justify-between items-center flex lg:gap-16"
                style={{
                    boxShadow: "0px 20px 60px 0px rgba(0,0,0,.2)",
                    borderRadius: "20px",
                }}>
                <div className="py-2 md:text-nowrap text-black lg:text-2xl font-bold font-['VT323'] items-center lg:mx-6">
                    GiT Monger
                </div>
                <div className="pr-3 py-2.5 items-center inline-flex mx-6">
                    <div className="self-stretch justify-start items-start gap-5 inline-flex">
                        <div className="w-28 h-4 text-center text-gray-600 text-sm font-normal font-['Source Sans 3'] leading-none">
                            Why GiT Monger?
                        </div>
                        <div className="w-16 h-4 text-center text-gray-600 text-sm font-bold font-['Source Sans 3'] leading-none">
                            Use Cases
                        </div>
                        <div className="w-10 h-4 text-center text-gray-600 text-sm font-normal font-['Source Sans 3'] leading-none">
                            Pricing
                        </div>
                        <div className="w-12 h-4 text-center text-gray-600 text-sm font-normal font-['Source Sans 3'] leading-none">
                            Support
                        </div>
                        <div className="w-7 h-4 text-center text-gray-600 text-sm font-normal font-['Source Sans 3'] leading-none">
                            Blog
                        </div>
                    </div>
                </div>
                <div className="items-center gap-5 inline-flex my-auto">
                    <button
                        className="text-center text-gray-600 lg:text-sm font-normal md:text-xs md:text-nowrap font-['Source Sans 3'] leading-none"
                        onClick={handleSignin}>
                        LOG IN
                    </button>
                    <div className=" px-5 lg:pt-2 rounded-full border border-green-300 justify-center lg:items-center inline-flex">
                        <div className="w-30 h-6 lg:mt-0 md:mt-1 md:text-xs text-center text-green-300 text-sm font-normal font-['Source Sans 3'] uppercase leading-none">
                            GET STARTED
                        </div>
                    </div>
                </div>
            </div>

            <div id="main" className="flex-row mt-16">
                <div
                    id="main-left"
                    className="flex-col float-left w-6/12 h-full
                    ">
                    <div className=" flex text-zinc-700 text-6xl font-semibold font-['Inter'] leading-10">
                        GiT Monger for all projects
                    </div>

                    <div className="flex text-gray-600 text-lg font-normal font-['Inter'] leading-relaxed">
                        Crafted to aid you in maintaining focus and
                        accomplishing tasks efficiently.
                        <br />
                        Stripped of unnecessary clutter or complications that
                        might hinder your progress.
                    </div>
                    <div className="gap-6 flex">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="name@company.com"
                            className="bg-white shadow rounded-full p-1 pl-3"
                        />
                        <div className="w-28 bg-green-300 rounded-full shadow border border-white justify-center items-center inline-flex">
                            <button className="text-center text-stone-600 text-[10px] font-semibold font-['Source Sans 3'] uppercase leading-none">
                                GET STARTED
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    id="main-right"
                    className="flex float-right w-6/12 rounded-xl">
                    <Image
                        src={meeting}
                        alt="meeting-image"
                        width={500}
                        height={500}
                        style={{ borderRadius: "20px" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
