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
        <div className="w-full flex-col px-60 pb-9 bg-slate-100 shadow justify-center items-center inline-flex">
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
                        <div className="text-center text-gray-600 text-sm font-normal font-['Source Sans 3'] leading-none">
                            Why GiT Monger?
                        </div>
                        <div className="text-center text-gray-600 text-sm font-bold font-['Source Sans 3'] leading-none">
                            Use Cases
                        </div>
                        <div className="text-center text-gray-600 text-sm font-normal font-['Source Sans 3'] leading-none">
                            Pricing
                        </div>
                        <div className="text-center text-gray-600 text-sm font-normal font-['Source Sans 3'] leading-none">
                            Support
                        </div>
                        <div className="text-center text-gray-600 text-sm font-normal font-['Source Sans 3'] leading-none">
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
                    <div className=" px-5 lg:h-10 rounded-full border border-green-300 justify-center lg:items-center inline-flex">
                        <div className="lg:mt-0 md:mt-1 md:text-xs text-center text-green-300 text-sm font-normal font-['Source Sans 3'] uppercase leading-none">
                            GET STARTED
                        </div>
                    </div>
                </div>
            </div>

            <div id="main" className="flex-row mt-16">
                <div
                    id="main-left"
                    className="grid grid-rows-3 grid-cols-1 float-left w-6/12 gap-2">
                    <div className="flex text-zinc-700 text-6xl font-semibold  ">
                        GiT Monger for all projects
                    </div>

                    <div className="text-gray-600 text-lg font-normal   leading-relaxed">
                        Crafted to aid you in maintaining focus and
                        accomplishing tasks efficiently.
                        <br />
                        Stripped of unnecessary clutter or complications that
                        might hinder your progress.
                    </div>
                    <div className="h-10 gap-6 flex">
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
                    className="flex float-right rounded-xl w-6/12 h-full">
                    <Image
                        src={meeting}
                        alt="meeting-image"
                        width={500}
                        height={500}
                        style={{ borderRadius: "20px" }}
                    />
                </div>
            </div>
            <div id="title" className="">
                <div className="text-center text-zinc-700 text-xl font-semibold   leading-10">
                    The simplest way to manage and document projects
                </div>
                <div className="text-center text-gray-600 text-base font-normal   leading-relaxed">
                    For teams that don&apost want to overcomplicate their
                    workflows.
                </div>
            </div>
            <div className="mt-5">
                <Image
                    src={meeting}
                    alt="meeting-image"
                    width={700}
                    height={500}
                    style={{ borderRadius: "20px" }}
                />
            </div>
            <div id="features-1" className="flex flex-row my-24 ">
                <div
                    id="features-1-left"
                    className="flex flex-col justify-start items-start w-6/12">
                    <div className="text-zinc-700 text-2xl font-semibold   leading-10">
                        Create lightweight project boards
                    </div>
                    <div className="h-20 justify-start items-center ">
                        <div className="text-gray-600 text-md font-normal font-['Source Sans 3'] leading-7">
                            Designed to be simple and intuitive in every way,
                            GiT Monger enables anyone to be productive right
                            away, tech-savvy or not.
                        </div>
                    </div>
                    <div className=" h-6 px-1.5 py-1.5 my-2 bg-green-300 rounded  inline-flex">
                        <div className=" text-white text-[10px] font-bold font-['Source Sans 3'] uppercase leading-3">
                            Board view
                        </div>
                    </div>
                    <div className=" h-6 px-1.5 py-1.5 my-2 bg-green-300 rounded  inline-flex">
                        <div className=" text-white text-[10px] font-bold font-['Source Sans 3'] uppercase leading-3">
                            Custom fields
                        </div>
                    </div>
                    <div className=" h-6 px-1.5 py-1.5 my-2 bg-green-300 rounded inline-flex">
                        <div className="text-white text-[10px] font-bold font-['Source Sans 3'] uppercase leading-3">
                            Filters
                        </div>
                    </div>
                </div>
                <div
                    id="features-1-right"
                    className="flex float-right rounded-xl w-6/12">
                    <Image
                        src={meeting}
                        alt="meeting-image"
                        width={500}
                        height={500}
                        style={{ borderRadius: "20px" }}
                    />
                </div>
            </div>
            <div id="features-2" className="flex flex-row my-24 ">
                <div
                    id="features-2-left"
                    className="flex float-left rounded-xl w-6/12">
                    <Image
                        src={meeting}
                        alt="meeting-image"
                        width={500}
                        height={500}
                        style={{ borderRadius: "20px" }}
                    />
                </div>
                <div
                    id="features-2-right"
                    className="flex flex-col ml-6 justify-start items-start w-6/12">
                    <div className="text-zinc-700 text-2xl font-semibold   leading-10">
                        Plan and document your work
                    </div>
                    <div className="h-20 justify-start items-center ">
                        <div className="text-gray-600 text-md font-normal font-['Source Sans 3'] leading-7">
                            Every card on your GiT Monger board is a long-form
                            doc, where you can add tasks, document project
                            goals, reference other related docs, embed files,
                            and more.
                        </div>
                    </div>
                    <div className=" h-6 px-1.5 py-1.5 my-2 bg-green-300 rounded  inline-flex">
                        <div className=" text-white text-[10px] font-bold font-['Source Sans 3'] uppercase leading-3">
                            Task Lists
                        </div>
                    </div>
                    <div className=" h-6 px-1.5 py-1.5 my-2 bg-green-300 rounded  inline-flex">
                        <div className=" text-white text-[10px] font-bold font-['Source Sans 3'] uppercase leading-3">
                            Due Dates & Reminders
                        </div>
                    </div>
                    <div className=" h-6 px-1.5 py-1.5 my-2 bg-green-300 rounded inline-flex">
                        <div className="text-white text-[10px] font-bold font-['Source Sans 3'] uppercase leading-3">
                            Easy Editor
                        </div>
                    </div>
                    <div className="h-6 px-1.5 py-1.5 my-2 bg-green-300 rounded inline-flex">
                        <div className="text-white text-[10px] font-bold font-['Source Sans 3'] uppercase leading-3">
                            Media Embeds
                        </div>
                    </div>
                </div>
            </div>
            <div id="features-3" className="flex flex-row my-24 ">
                <div
                    id="features-3-left"
                    className="flex flex-col justify-start items-start w-6/12">
                    <div className="text-zinc-700 text-2xl font-semibold   leading-10">
                        Collaborate with ease
                    </div>
                    <div className="h-20 justify-start items-center ">
                        <div className="text-gray-600 text-md font-normal font-['Source Sans 3'] leading-7">
                            Communicate with full context, directly in GiT
                            Monger. Don&apost let important discussions scatter
                            across emails.
                        </div>
                    </div>
                    <div className=" h-6 px-1.5 py-1.5 my-2 bg-green-300 rounded  inline-flex">
                        <div className=" text-white text-[10px] font-bold font-['Source Sans 3'] uppercase leading-3">
                            Real-time collaboration
                        </div>
                    </div>
                    <div className=" h-6 px-1.5 py-1.5 my-2 bg-green-300 rounded  inline-flex">
                        <div className=" text-white text-[10px] font-bold font-['Source Sans 3'] uppercase leading-3">
                            Comments
                        </div>
                    </div>
                    <div className=" h-6 px-1.5 py-1.5 my-2 bg-green-300 rounded inline-flex">
                        <div className="text-white text-[10px] font-bold font-['Source Sans 3'] uppercase leading-3">
                            Mentions
                        </div>
                    </div>
                </div>
                <div
                    id="features-3-right"
                    className="flex float-right rounded-xl w-6/12">
                    <Image
                        src={meeting}
                        alt="meeting-image"
                        width={500}
                        height={500}
                        style={{ borderRadius: "20px" }}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-center text-zinc-700 text-2xl font-semibold  leading-10">
                    Templates for every team
                </div>
                <div className="text-center text-gray-600 text-md font-normal leading-relaxed">
                    Simplify project management, company-wide.
                </div>
                <div className="justify-center items-center gap-8 mt-6 inline-flex">
                    <div className="self-stretch pb-10 bg-white rounded-lg shadow flex-col justify-center items-center gap-3.5 inline-flex">
                        <img
                            className="rounded-tl-lg rounded-tr-lg"
                            src="https://via.placeholder.com/293x183"
                        />
                        <div className="text-center text-zinc-700 text-base font-semibold leading-snug">
                            Projects
                        </div>
                        <div className="pl-3.5 pr-3 justify-center items-center inline-flex">
                            <div className="text-center text-zinc-700 text-base font-normal font-['Source Sans 3'] leading-normal">
                                Plan, track, and document all your
                                <br />
                                projects in one place.
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch pb-10 bg-white rounded-lg shadow flex-col justify-start items-center gap-3.5 inline-flex">
                        <img
                            className="rounded-tl-lg rounded-tr-lg"
                            src="https://via.placeholder.com/293x183"
                        />
                        <div className="text-center text-zinc-700 text-base font-semibold leading-snug">
                            Marketing Tasks
                        </div>
                        <div className="pl-2.5 pr-2 justify-center items-center inline-flex">
                            <div className="text-center text-zinc-700 text-base font-normal font-['Source Sans 3'] leading-normal">
                                Manage your marketing campaigns,
                                <br />
                                projects, and tasks.
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch pb-10 bg-white rounded-lg shadow flex-col justify-start items-center gap-3.5 inline-flex">
                        <img
                            className="rounded-tl-lg rounded-tr-lg"
                            src="https://via.placeholder.com/293x183"
                        />
                        <div className="text-center text-zinc-700 text-base font-semibold   leading-snug">
                            Game Dev Tasks
                        </div>
                        <div className="pl-0.5 pr-px justify-center items-center inline-flex">
                            <div className="text-center text-zinc-700 text-base font-normal font-['Source Sans 3'] leading-normal">
                                Plan and manage the progress of your
                                <br />
                                game development project.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pt-9 justify-center flex gap-x-8">
                    <div className="self-stretch pb-10 bg-white rounded-lg shadow flex-col justify-start items-center gap-3.5 inline-flex">
                        <img
                            className="rounded-tl-lg rounded-tr-lg"
                            src="https://via.placeholder.com/300x187"
                        />
                        <div className="text-center text-zinc-700 text-base font-semibold leading-snug">
                            Sprint
                        </div>
                        <div className="px-5 justify-center items-center inline-flex">
                            <div className="text-center text-zinc-700 text-base font-normal font-['Source Sans 3'] leading-normal">
                                Keep pace with the rollout of new
                                <br />
                                features and iterations.
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch pb-10 bg-white rounded-lg shadow flex-col justify-start items-center gap-3.5 inline-flex">
                        <img
                            className="rounded-tl-lg rounded-tr-lg"
                            src="https://via.placeholder.com/300x187"
                        />
                        <div className=" text-center text-zinc-700 text-base font-semibold leading-snug">
                            Issue Tracker
                        </div>
                        <div className="px-1.5 justify-center items-center inline-flex">
                            <div className="text-center text-zinc-700 text-base font-normal font-['Source Sans 3'] leading-normal">
                                Capture, prioritize, and resolve issues
                                <br />
                                quickly.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
