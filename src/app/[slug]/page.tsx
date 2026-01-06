import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "#velite";
import { Box, Heading, Text } from "@radix-ui/themes";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Box className="max-w-4xl mx-auto w-full py-8">
      <Box className="mb-8">
        <Heading size="8" className="markdown-main-title">
          {post.title}
        </Heading>
        {post.description && (
          <Text size="4" className="opacity-80">
            {post.description}
          </Text>
        )}
      </Box>
      <Box
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Box>
  );
}

