import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "#velite";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { formatDate } from "@/utils/date";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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
      <Link href="/blog" className="flex items-center gap-2 text-teal-link">
        <ArrowLeftIcon />
        Back to blog
      </Link>

      <Box className="mt-8">
        <Heading size="8" className="markdown-main-title">
          {post.title}
        </Heading>

        <Box className="mt-2">
          {post.description && (
            <Text size="5" className="opacity-80">
              {post.description}
            </Text>
          )}
        </Box>

        <Box className="mt-2">
          <Text size="2" className="opacity-80">
            {formatDate(post.date)}
          </Text>
        </Box>
      </Box>
      <Box className="my-8 h-1 w-full bg-foreground/10" />
      <Box
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Box>
  );
}
