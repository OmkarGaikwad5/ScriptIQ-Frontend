'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function BlogForm({ token, onClose, onBlogCreated }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        imageUrl: '',
        author: '',
        createdAt: new Date().toISOString(),
    });
    const [error, setError] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('title', form.title);
            formData.append('description', form.description);
            formData.append('createdAt', form.createdAt);
            formData.append('image', imageFile); // 👈 this is crucial

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message);
            }

            const newBlog = await res.json();
            onBlogCreated(newBlog);
            setImageFile(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    return (
           <Card className="max-w-2xl mx-auto mt-16 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl">
      <CardContent className="p-8 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-3xl font-bold text-blue-600">📝 Create a New Blog</h2>
          <Button variant="ghost" size="sm" className="text-sm cursor-pointer" onClick={onClose}>
            Close
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-md">Title</Label>
            <Input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-md">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={5}
              placeholder="Write a short description..."
              required
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label htmlFor="image" className="text-md">Upload Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              required
            />
          </div>

          {/* Author */}
          <div className="space-y-2">
            <Label htmlFor="author" className="text-md">Author</Label>
            <Input
              id="author"
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Author name"
              required
            />
          </div>

          {/* Created At */}
          <div className="space-y-2">
            <Label htmlFor="createdAt" className="text-md">Created At</Label>
            <Input
              id="createdAt"
              name="createdAt"
              value={new Date(form.createdAt).toLocaleString()}
              readOnly
              className="bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <Button type="submit" className="w-full text-md py-2 cursor-pointer">
            🚀 Submit Blog
          </Button>
        </form>
      </CardContent>
    </Card>
    );
}
