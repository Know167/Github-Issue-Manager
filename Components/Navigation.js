import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

import UserBio from "@/Components/UserBio";

const Navigation = (props) => {
    const { data: session } = useSession();
    
    return (
        <>
            {session && (
                <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 rounded-lg">
                    <div className="flex items-center flex-shrink-0 text-white mr-8">
                        <span className="font-semibold text-2xl tracking-tight">
                            GiT Monger
                        </span>
                    </div>
                    <div className="flex flex-grow lg:flex lg:items-center">
                        <div className="lg:mt-0 text-teal-200 hover:text-white mr-4">
                            {session && <Link href="/repos">Home</Link>}
                        </div>
                        <div className="lg:mt-0 text-teal-200 hover:text-white mr-4">
                            {session && (
                                <Link href="/add_repo">New Repository</Link>
                            )}
                        </div>
                        <div className="absolute inset-y-0 right-0 mt-3 mr-4">
                            {session && (
                                <UserBio
                                    username={session.user.name}
                                    avatar={session.user.image}
                                />
                            )}
                        </div>
                    </div>
                </nav>
            )}
            {props.children}
        </>
    );
};

export default Navigation;
