import Image from "next/image";

import { getPostData } from "@/service/posts";
import PostContent from "@/app/components/PostContent";
import AdjacentPostCard from "@/app/components/AdjacentPostCard";
import { Metadata } from "next";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: PostPageProps): Promise<Metadata> {
  const post = await getPostData(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4 lg:px-[144px]">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        height={760}
        width={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type={"prev"} />}
        {next && <AdjacentPostCard post={next} type={"next"} />}
      </section>
    </article>
  );
}
