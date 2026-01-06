import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "#velite";
import { Box, Heading, Text } from "@radix-ui/themes";
import { formatDate } from "@/utils/date";

export const metadata: Metadata = {
  title: "Blog | Ryan J. Yost",
  description: "Technical writing and tutorials by Ryan J. Yost",
};

export default function BlogPage() {
  // Sort posts by date, newest first
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <Box className="max-w-4xl mx-auto w-full py-8">
      <Box className="mb-8">
        <Heading as="h1" size="8">
          Blog
        </Heading>
      </Box>

      {sortedPosts.length === 0 ? (
        <Text size="4" className="opacity-80">
          No posts yet. Check back soon!
        </Text>
      ) : (
        <section aria-label="Blog posts" className="space-y-8">
          {sortedPosts.map((post) => (
            <article key={post.slug} className="pb-8 last:border-b-0">
              <Link href={post.permalink} className="mb-4">
                <Heading as="h2" size="5" className="hover:underline">
                  {post.title}
                </Heading>
              </Link>

              {post.description && (
                <Box className="mt-1">
                  <Text size="4" className="opacity-80 mb-2 block">
                    {post.description}
                  </Text>
                </Box>
              )}

              <Box className="mt-1">
                <Text size="2" className="opacity-60">
                  {formatDate(post.date)}
                </Text>
              </Box>
            </article>
          ))}
        </section>
      )}
    </Box>
  );
}
