
// app/landing/page.jsx
"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-zinc-900 dark:to-black"
    >
      <h1 className="text-5xl font-bold mb-6 text-blue-700 dark:text-white">Welcome to ScriptIQ</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center">
        ScriptIQ is your intelligent blog hub focused on the latest in computer science, AI,
        web development, and software engineering. Read, write, and explore technology-driven insights.
      </p>
      <div className="flex gap-4 mt-8">
        <Button onClick={() => router.push("/login")} className="bg-blue-600 hover:bg-blue-700 text-white">
          Login
        </Button>
        <Button onClick={() => router.push("/register")} variant="outline">
          Sign Up
        </Button>
      </div>
    </motion.div>
  );
}







