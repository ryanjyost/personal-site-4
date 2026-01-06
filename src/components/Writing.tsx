"use client";
import { Button, Flex, Link, Text } from "@radix-ui/themes";
import { writing } from "@/configs/writing";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import GitHubButton from "react-github-btn";

export function Writing() {
  return (
    <Flex direction="column" gap="20px" className="pt-2">
      <Flex direction="column" gap="30px">
        {writing.map((article) => (
          <WritingItem key={article.name} article={article} />
        ))}
      </Flex>

      <Flex className="h-2" />

      <Flex align="center" gap="2">
        <Text size="2" className="opacity-70 flex items-center">
          For more writing, check out my
        </Text>
        <Link href="https://medium.com/@ryanjyost" target="_blank">
          <Button variant="soft" radius="full" className="whitespace-nowrap">
            Medium articles
          </Button>
        </Link>

        <Link href="/blog">
          <Button variant="soft" radius="full" className="whitespace-nowrap">
            Personal blog posts
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

function WritingItem({ article }: { article: (typeof writing)[number] }) {
  return (
    <Flex className="pt-4 flex-wrap max-w-full" align="start" gap="4">
      <Flex direction="column" gap="1" className="flex-1 py-1 min-w-[300px]">
        <Link href={article.link || article.pub?.link} target="_blank">
          <Flex align="center" gap="2">
            <Text size="4" className="font-bold opacity-95 text-foreground">
              {article.name}
            </Text>
            <ArrowTopRightIcon className="opacity-80" />
          </Flex>
        </Link>
        <Text size="3" className="opacity-80">
          {article.desc}
        </Text>
        <Flex className="h-1" />
        <Flex gap="2" className="flex-wrap align-center">
          {article.github && (
            <Flex className="mr-2">
              <GitHubButton
                href={article.github}
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label={`Check out ${article.github} on GitHub`}
              >
                Star
              </GitHubButton>
            </Flex>
          )}

          {article.pub?.name && (
            <Flex align="center" gap="1" className="mr-2">
              <Text size="2" className="opacity-70 flex items-center">
                Published on{" "}
              </Text>
              <Text size="2" className="opacity-70 flex items-center">
                <Link className="ml-2" href={article.pub.link} target="_blank">
                  {article.pub.name}
                </Link>
              </Text>
            </Flex>
          )}

          {article.reads && (
            <Text size="2" className="opacity-70 flex items-center">
              <strong className="font-bold text-foreground pr-1 text-md">
                {article.reads}
              </strong>{" "}
              reads
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
