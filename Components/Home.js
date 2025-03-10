import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

import meeting from "../public/assets/meeting.jpg";
import UseCaseCards from "./UseCaseCards";
import FeatureSection from "./FeatureSection";

function Home() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push("/repos");
        }
    }, [session, router]);

    return (
        <div className="w-full flex-col xl:px-60 lg:px-45 md:px-32 px-12 pb-9 bg-slate-100 shadow justify-center items-center inline-flex">
            {!session && (
                <>
                    <div id="main" className="flex-row mt-16">
                        <div
                            id="main-left"
                            className="grid grid-rows-3 grid-cols-1 float-left w-6/12 gap-2">
                            <div className="flex text-zinc-700 text-5xl font-semibold  ">
                                GiT Monger for all projects
                            </div>

                            <div className="text-gray-600 text-lg font-normal   leading-relaxed">
                                Crafted to aid you in maintaining focus and
                                accomplishing tasks efficiently.
                                <br />
                                Stripped of unnecessary clutter or complications
                                that might hinder your progress.
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
                            className="flex float-right rounded-xl sm:w-0 md:w-6/12 h-full">
                            <Image
                                src={meeting}
                                alt="meeting-image"
                                width={500}
                                height={500}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Features Section */}
                    <div id="features" className="mt-16">
                        <div id="title" className="text-center mb-12">
                            <h2 className="text-zinc-700 text-3xl font-semibold leading-10">
                                The simplest way to manage and document projects
                            </h2>
                            <p className="text-gray-600 text-lg font-normal leading-relaxed">
                                For teams that dont want to overcomplicate their
                                workflows.
                            </p>
                        </div>
                        <div className="flex justify-center mt-5">
                            <Image
                                src={meeting}
                                alt="meeting-image"
                                width={700}
                                height={500}
                                className="rounded-lg"
                            />
                        </div>
                        <div id="features-1" className="flex lg:flex-row my-24">
                            <FeatureSection
                                title="Create lightweight project boards"
                                direction="left"
                                description="Designed to be simple and intuitive in every way, GiT Monger enables anyone to be productive right away, tech-savvy or not."
                                list={[
                                    "Board View",
                                    "Custom fields",
                                    "Filters",
                                ]}
                            />
                        </div>
                        <div id="features-2" className="flex lg:flex-row my-24">
                            <FeatureSection
                                title="Plan and document your work"
                                direction="right"
                                description="Every card on your GiT Monger board is a long-form doc, where you can add tasks, document project goals, reference other related docs, embed files, and more."
                                list={[
                                    "Task Lists",
                                    "Due Dates & Reminders",
                                    "Easy Editor",
                                    "Media Embeds",
                                ]}
                            />
                        </div>
                        <div id="features-3" className="flex lg:flex-row my-24">
                            <FeatureSection
                                title="Collaborate with ease"
                                direction="left"
                                description="Communicate with full context, directly in GiT Monger. Don't let important discussions scatter across emails."
                                list={[
                                    "Real-time collaboration",
                                    "Comments",
                                    "Mentions",
                                ]}
                            />
                        </div>
                    </div>

                    {/* Use Cases Section */}
                    {/* Use Cases Section */}
                    <div className="justify-center items-center mb-0 px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-zinc-700 text-3xl font-semibold leading-10">
                                Templates for every team
                            </h2>
                            <p className="text-gray-600 text-lg font-normal leading-relaxed">
                                Simplify project management, company-wide.
                            </p>
                        </div>
                        <div className="grid gap-8">
                            <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 justify-items-center">
                                <UseCaseCards
                                    imgLink="https://via.placeholder.com/300x187"
                                    imgHeight={187}
                                    imgWidth={300}
                                    title="Projects"
                                    description="Plan, track, and document all your projects in one place."
                                />
                                <UseCaseCards
                                    imgLink="https://via.placeholder.com/300x187"
                                    imgHeight={187}
                                    imgWidth={300}
                                    title="Marketing Tasks"
                                    description="Manage your marketing campaigns, projects, and tasks."
                                />
                                <UseCaseCards
                                    imgLink="https://via.placeholder.com/300x187"
                                    imgHeight={187}
                                    imgWidth={300}
                                    title="Game Dev Tasks"
                                    description="Plan and manage the progress of your game development project."
                                />
                            </div>
                            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 justify-items-center">
                                <UseCaseCards
                                    imgLink="https://via.placeholder.com/300x187"
                                    imgHeight={187}
                                    imgWidth={300}
                                    title="Sprint"
                                    description="Keep pace with the rollout of new features and iterations."
                                />
                                <UseCaseCards
                                    imgLink="https://via.placeholder.com/300x187"
                                    imgHeight={187}
                                    imgWidth={300}
                                    title="Issue Tracker"
                                    description="Capture, prioritize, and resolve issues quickly."
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
