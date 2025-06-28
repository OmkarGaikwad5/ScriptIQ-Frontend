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
        <Card className="max-w-2xl mx-auto mt-10 shadow-xl">
            <CardContent className="p-6 space-y-5">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-blue-600">📝 Create a New Blog</h2>
                    <Button variant="ghost" size="sm" onClick={onClose}>
                        Close
                    </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" name="title" value={form.title} onChange={handleChange} required />
                    </div>

                    <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" name="description" value={form.description} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label htmlFor="image">Upload Image</Label>
                        <Input
                            id="image"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImageFile(e.target.files[0])}
                            required
                        />
                    </div>


                    <div>
                        <Label htmlFor="author">Author</Label>
                        <Input id="author" name="author" value={form.author} onChange={handleChange} required />
                    </div>

                    <div>
                        <Label htmlFor="createdAt">Created At</Label>
                        <Input id="createdAt" name="createdAt" value={new Date(form.createdAt).toLocaleString()} readOnly />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button type="submit" className="w-full">
                        Submit Blog
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
