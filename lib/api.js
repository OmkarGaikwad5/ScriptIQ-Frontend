"use client";
import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

API.interceptors.request.use((req) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Blog APIs
export const getAllBlogs = () => API.get("/api/blogs");
export const getBlogBySlug = (slug) => API.get(`/api/blogs/${slug}`);
export const createBlog = (data) => API.post("/api/blogs", data); // Optional (for admin)

// Auth APIs
export const login = (data) => API.post("/api/auth/login", data);
export const register = (data) => API.post("/api/auth/register", data);
