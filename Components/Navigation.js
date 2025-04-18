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
import useGuestLogin from "@/utils/useGuestLogin";

const Navigation = () => {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const handleGuestLogin = useGuestLogin();
    const menuItems = [
        "Why GiT Monger?",
        "Use Cases",
        "Pricing",
        "Support",
        "Blog",
    ];
    const handleSignin = (e) => {
        e.preventDefault();
        signIn("github");
    };
    return (
        <>
            {!session && (
                <Navbar
                    onMenuOpenChange={setIsMenuOpen}
                    isBordered
                    className="rounded bg-slate-100 px-32">
                    {/* Small screens: Navbar with brand and hamburger menu on the left */}
                    <NavbarContent className="flex justify-between items-center">
                        <div className="flex items-center">
                            <NavbarMenuToggle
                                aria-label={
                                    isMenuOpen ? "Close menu" : "Open menu"
                                }
                                className="text-xl mr-4"
                            />
                            <NavbarBrand>
                                <p className="py-2 text-slate-900 font-bold vt323-xlarge items-center">
                                    Git Monger
                                </p>
                            </NavbarBrand>
                        </div>
                    </NavbarContent>

                    {/* Larger screens content */}
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

                    {/* <NavbarContent className="hidden sm:flex" justify="end">
                        <NavbarItem>
                            <Button onClick={handleSignin}>Login</Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button as={Link} color="primary" variant="flat">
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </NavbarContent> */}

                    {/* Small screens - only show Login and Sign Up */}
                    <NavbarContent className="flex" justify="end">
                        <NavbarItem>
                            <Button onClick={handleSignin}>Login</Button>
                        </NavbarItem>
                        {/* <NavbarItem>
                            <Button as={Link} color="primary" variant="flat">
                                Sign Up
                            </Button>
                        </NavbarItem> */}
                        <NavbarItem>
                            <Button
                                as={Link}
                                color="primary"
                                variant="flat"
                                onClick={handleGuestLogin}>
                                Guest Login
                            </Button>
                        </NavbarItem>
                    </NavbarContent>

                    {/* Hamburger menu - visible on small screens */}
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
                <>
                    {/* <Navbar className="flex items-center justify-between flex-wrap bg-teal-500 p-6 rounded-lg">
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
                    </Navbar> */}
                    <Navbar
                        onMenuOpenChange={setIsMenuOpen}
                        isBordered
                        className="rounded bg-slate-100 px-32">
                        <NavbarContent>
                            <NavbarMenuToggle
                                aria-label={
                                    isMenuOpen ? "Close menu" : "Open menu"
                                }
                                className="sm:hidden text-xl"
                            />
                            <NavbarBrand>
                                <p className=" md:text-nowrap text-slate-900 font-serif- text-6xl font-bold vt323-xlarge items-center lg:mx-6">
                                    Git Monger
                                </p>
                            </NavbarBrand>
                        </NavbarContent>

                        <NavbarContent
                            className="hidden sm:flex gap-4"
                            justify="center">
                            <NavbarMenuItem>
                                <Link color="foreground" href="/repos">
                                    Home
                                </Link>
                            </NavbarMenuItem>
                            <NavbarMenuItem>
                                <Link color="foreground" href="/add_repo">
                                    New Repository
                                </Link>
                            </NavbarMenuItem>
                        </NavbarContent>

                        <NavbarMenu>
                            <NavbarMenuItem>
                                <Link
                                    className="w-full"
                                    href="/repos"
                                    size="lg">
                                    Home
                                </Link>
                            </NavbarMenuItem>
                            <NavbarMenuItem>
                                <Link
                                    className="w-full"
                                    href="/add_repo"
                                    size="lg">
                                    New Repository
                                </Link>
                            </NavbarMenuItem>
                        </NavbarMenu>
                        <UserBio
                            username={session.user.name}
                            avatar={session.user.image}
                        />
                    </Navbar>
                </>
            )}
        </>
    );
};

export default Navigation;
