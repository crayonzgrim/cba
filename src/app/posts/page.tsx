import { getAllPosts } from "@/service/posts";
import React from "react";
import FilterablePosts from "../components/FilterablePosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Blog post about full-stack",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}
