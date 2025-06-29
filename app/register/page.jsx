'use client';

import { useState } from 'react';
import { register } from '@/lib/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Cookies from 'js-cookie';


export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await register(form);

    // ✅ Save token in localStorage
    localStorage.setItem("token", res.data.token);

    // ✅ Set token in cookie so middleware can detect auth
    Cookies.set("token", res.data.token, { expires: 1 });

    toast.success("Account created 🎉");
    router.push("/");
  } catch (err) {
    console.error("Registration error:", err);
    toast.error("Registration failed ❌");
  }
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-purple-200 dark:from-zinc-900 dark:to-zinc-800"
    >
      <Card className="w-full max-w-md shadow-2xl border-0 rounded-3xl backdrop-blur-sm bg-white/90 dark:bg-zinc-900/80">
        <CardContent className="p-8 space-y-6">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl font-bold text-blue-600 dark:text-blue-400"
            >
              🚀 Join ScriptIQ
            </motion.h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Start your journey with the intelligent blog network.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full mt-2 text-base font-semibold cursor-pointer">
              ✨ Register
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Already a member?{' '}
            <Link
              href="/login"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Login here
            </Link>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
