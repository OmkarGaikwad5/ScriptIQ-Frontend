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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-zinc-900 dark:to-black px-4"
    >
      <div className="max-w-3xl w-full text-center flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-700 dark:text-white">
          Welcome to ScriptIQ
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          ScriptIQ is your intelligent blog hub focused on the latest in computer science, AI,
          web development, and software engineering. Read, write, and explore technology-driven insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            onClick={() => router.push("/login")}
            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer w-full sm:w-auto"
          >
            Login
          </Button>
          <Button
            onClick={() => router.push("/register")}
            className="cursor-pointer w-full sm:w-auto"
            variant="outline"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
