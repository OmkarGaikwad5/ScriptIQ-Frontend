// components/Navbar.jsx
"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Home, FileText, Info, Mail, LogIn, UserPlus, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white/40 dark:bg-gray-950/40 backdrop-blur-md shadow-md">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-blue-600">Script</span>
                    <span className="text-purple-500">IQ</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:scale-105 transform">
                        <Home className="w-5 h-5" />
                        Home
                    </Link>
                    <Link href="/blogs" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:scale-105 transform">
                        <FileText className="w-5 h-5" />
                        Blogs
                    </Link>
                    <Link href="/about" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:scale-105 transform">
                        <Info className="w-5 h-5" />
                        About
                    </Link>
                    <Link href="/contact" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:scale-105 transform">
                        <Mail className="w-5 h-5" />
                        Contact
                    </Link>

                    <div className="flex gap-2 ml-4">
                        <Link href="/login">
                            <Button className="flex items-center gap-2 hover:scale-105 transform" variant="outline">
                                <LogIn className="w-4 h-4" />
                                Login
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button className="flex items-center gap-2 hover:scale-105 transform">
                                <UserPlus className="w-4 h-4" />
                                Signup
                            </Button>
                        </Link>
                        <Button
                            className="cursor-pointer hover:scale-110 transform"
                            variant="outline"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center gap-2">
                    <Button
                        className="cursor-pointer"
                        variant="outline"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </Button>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="cursor-pointer">
                                <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-64 p-6">
                            <SheetHeader>
                                <SheetTitle className="text-xl font-semibold text-center">
                                    <span className="text-blue-600">Script</span>
                                    <span className="text-purple-500">IQ</span>
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-6 text-center">
                                <Link href="/" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 text-lg font-medium hover:scale-110 transition-transform duration-300">
                                    <Home className="w-5 h-5" />
                                    Home
                                </Link>
                                <Link href="/blogs" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 text-lg font-medium hover:scale-110 transition-transform duration-300">
                                    <FileText className="w-5 h-5" />
                                    Blogs
                                </Link>
                                <Link href="/about" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 text-lg font-medium hover:scale-110 transition-transform duration-300">
                                    <Info className="w-5 h-5" />
                                    About
                                </Link>
                                <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 text-lg font-medium hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-5 h-5" />
                                    Contact
                                </Link>
                                <div className="flex justify-center gap-2 mt-6">
                                    <Link href="/login" onClick={() => setOpen(false)}>
                                        <Button className="cursor-pointer flex items-center gap-2" variant="outline">
                                            <LogIn className="w-4 h-4" />
                                            Login
                                        </Button>
                                    </Link>
                                    <Link href="/register" onClick={() => setOpen(false)}>
                                        <Button className="cursor-pointer flex items-center gap-2">
                                            <UserPlus className="w-4 h-4" />
                                            Signup
                                        </Button>
                                    </Link>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
