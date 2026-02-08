import { useSession, signIn } from "next-auth/react";
import UserBio from "@/Components/UserBio";
import Link from "next/link";
import Image from "next/image";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import logo from "@/assets/image.png";
import useGuestLogin from "@/utils/useGuestLogin";

const Navigation = ({ children }) => {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const handleGuestLogin = useGuestLogin();

    const handleSignin = () => {
        signIn("github");
    };

    // Menu items depending on session
    const unauthenticatedMenuItems = [
        "Why GiT Monger?",
        "Use Cases",
        "Pricing",
        "Support",
        "Blog",
    ];

    const authenticatedMenuItems = [
        { name: "Home", href: "/repos" },
        { name: "New Repository", href: "/add_repo" },
    ];

    return (
        <>
            <Navbar
                onMenuOpenChange={setIsMenuOpen}
                isBordered
                className="bg-neutral-900 px-6 rounded-xl shadow-md border-b-2 ">
                {/* Mobile Hamburger + Brand */}
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden text-xl text-neutral-100"
                    />
                    <NavbarBrand>
                        <Link
                            className="md:text-nowrap text-neutral-200 font-serif text-3xl font-bold vt323-xlarge items-center lg:mx-6"
                            href="/">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={400}
                                height={50}
                                className="hidden sm:block"
                            />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                {/* Center Nav Items (for larger screens) */}
                <NavbarContent
                    className="hidden sm:flex gap-6"
                    justify="center">
                    {session
                        ? authenticatedMenuItems.map((item) => (
                              <NavbarItem key={item.name}>
                                  <Link
                                      className="text-neutral-100 hover:text-primary-400 transition duration-200"
                                      href={item.href}>
                                      {item.name}
                                  </Link>
                              </NavbarItem>
                          ))
                        : unauthenticatedMenuItems.map((item) => (
                              <NavbarItem key={item}>
                                  <Link
                                      className="text-neutral-100 hover:text-primary-400 transition duration-200"
                                      href="#">
                                      {item}
                                  </Link>
                              </NavbarItem>
                          ))}
                </NavbarContent>

                {/* Right Side Buttons */}
                <NavbarContent className="flex" justify="end">
                    {!session ? (
                        <>
                            <NavbarItem>
                                <Button
                                    onPress={handleSignin}
                                    className="text-100 bg-secondary-500 hover:bg-primary-500 border-2 border-accent-100 hover:border-primary-500">
                                    Login
                                </Button>
                            </NavbarItem>
                            <NavbarItem>
                                <Button
                                    color="primary"
                                    variant="flat"
                                    onPress={handleGuestLogin}
                                    className="text-neutral-900 bg-primary-500 hover:bg-primary-600">
                                    Guest Login
                                </Button>
                            </NavbarItem>
                        </>
                    ) : (
                        <UserBio
                            username={session.user.name}
                            avatar={session.user.image}
                        />
                    )}
                </NavbarContent>

                {/* Mobile Menu Items */}
                <NavbarMenu >
                    {session
                        ? authenticatedMenuItems.map((item) => (
                              <NavbarMenuItem key={item.name}>
                                  <Link
                                      className="w-full text-neutral-100 hover:text-primary-400 transition duration-200"
                                      href={item.href}
                                      size="lg">
                                      {item.name}
                                  </Link>
                              </NavbarMenuItem>
                          ))
                        : unauthenticatedMenuItems.map((item, index) => (
                              <NavbarMenuItem key={`${item}-${index}`}>
                                  <Link
                                      color={
                                          index === 2
                                              ? "primary"
                                              : index ===
                                                unauthenticatedMenuItems.length -
                                                    1
                                              ? "danger"
                                              : "foreground"
                                      }
                                      className="w-full text-neutral-100 hover:text-primary-400 transition duration-200"
                                      href="#"
                                      size="lg">
                                      {item}
                                  </Link>
                              </NavbarMenuItem>
                          ))}
                </NavbarMenu>
            </Navbar>
            {children}
        </>
    );
};

export default Navigation;
