import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

function Home() {
        const router = useRouter();

     const handleSignin = (e) => {
         e.preventDefault();
         signIn("github");
     };
    return (
        <div className="w-full py-3 bg-white shadow justify-center items-center inline-flex">
            <div className="relative flex-row justify-between items-center flex gap-16">
                <div className="py-2 text-black text-xl font-bold font-['VT323'] items-center mx-6">
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
                    <button className="text-center text-gray-600 text-sm font-normal font-['Source Sans 3'] leading-none" onClick={handleSignin}>
                        LOG IN
                    </button>
                    <div className="h-10 px-5 pt-2 rounded-full border border-green-300 justify-center items-center inline-flex">
                        <div className="w-30 h-6 text-center text-green-300 text-sm font-normal font-['Source Sans 3'] uppercase leading-none">
                            GET STARTED
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
