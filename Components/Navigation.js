import { useSession, signIn } from "next-auth/react";

import UserBio from "@/Components/UserBio";
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@nextui-org/react";

const Navigation = (props) => {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Why GiT Monger?",
        "Use Cases",
        "Pricing",
        "Support",
        "Blog",
    ];
    return (
        <>
            {!session && (
                <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="bg-teal-400 rounded">
                    <NavbarContent>
                        <NavbarMenuToggle 
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden text-xl"
                        />
                        <NavbarBrand>
                            <p className="py-2 md:text-nowrap text-white text-xl lg:text-2xl font-bold font-['VT323'] items-center lg:mx-6">
                                Git Monger
                            </p>
                        </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent
                        className="hidden sm:flex gap-4"
                        justify="center">
                        {menuItems?.map((item) => (
                            <NavbarItem key={item}>
                                <Link color="foreground" href="#">
                                    {item}
                                </Link>
                            </NavbarItem>
                        ))}
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem className="hidden lg:flex">
                            <Link href="#">Login</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button
                                as={Link}
                                color="primary"
                                href="#"
                                variant="flat">
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarMenu>
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color={
                                        index === 2
                                            ? "primary"
                                            : index === menuItems.length - 1
                                            ? "danger"
                                            : "foreground"
                                    }
                                    className="w-full"
                                    href="#"
                                    size="lg">
                                    {item}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </Navbar>
            )}

            {session && (
                <Navbar className="flex items-center justify-between flex-wrap bg-teal-500 p-6 rounded-lg">
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
                </Navbar>
            )}
            {props.children}
        </>
    );
};

export default Navigation;
