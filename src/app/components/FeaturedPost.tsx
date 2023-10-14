import { getFeaturedPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPost() {
  const posts = await getFeaturedPosts();

  return (
    <section className="px-[16px] lg:px-[144px]">
      <h2 className="text-2xl font-bold my-2">Featured Post</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
