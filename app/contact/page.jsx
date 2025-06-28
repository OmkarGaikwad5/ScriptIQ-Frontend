"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import { toast } from "sonner"; // Make sure you're using react-hot-toast or similar

export default function ContactPage() {
  const formRef = useRef();

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_erix3yp",     // 👉 Replace with actual Service ID
        "template_k9bi674",    // 👉 Replace with actual Template ID
        formRef.current,
        "HomCMzlgcCIFra2Ih"      // 👉 Replace with your Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully! ✅");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-4 sm:px-6 lg:px-20 py-24 bg-gradient-to-br from-white to-purple-50 dark:from-zinc-900 dark:to-black"
    >
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-purple-600 dark:text-purple-400 mb-6"
      >
        Get in Touch with <span className="text-blue-600">ScriptIQ</span>
      </motion.h1>

      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg mb-12">
        Have questions or ideas? Drop us a message and we’ll get back to you!
      </p>

      <div className="max-w-3xl mx-auto">
        <Card className="rounded-2xl shadow-xl border border-purple-100 dark:border-zinc-800 dark:bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-purple-600 dark:text-white">
              Contact Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form ref={formRef} onSubmit={handleSend} className="space-y-6">
  <Input type="text" name="name" placeholder="Your Name" required />
  <Input type="email" name="email" placeholder="Your Email" required />
  <Textarea name="message" rows={5} placeholder="Your Message..." required />

  <div className="flex justify-center">
    <Button
      type="submit"
      className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white"
    >
      Send Message
    </Button>
  </div>
</form>


            <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-6">
              Or email us directly at{" "}
              <a
                href="mailto: gaikwadomkarofficial5@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                gaikwadomkarofficial5@gmail.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
