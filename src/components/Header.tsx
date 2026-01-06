import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <Flex
      align="center"
      justify="between"
      className="py-3 border-b border-border fixed top-0 left-0 right-0 z-50 bg-background"
    >
      <Flex className="max-w-5xl mx-auto px-6 w-full">
        <Link href="/" className="flex-1">
          <Flex gap="2" align="center" className="flex-1">
            <Image
              src="/images/headshot.jpg"
              alt="Ryan J. Yost headshot"
              width={100}
              height={100}
              className="rounded-full sm:w-9 sm:h-9 w-10 h-10 object-cover"
            />
            <Text className="font-bold opacity-95">Ryan J. Yost</Text>
            <Text className="hidden sm:block opacity-80">
              Fullstack Software Engineer
            </Text>
          </Flex>
        </Link>

        <Flex className="mt-1">
          <ThemeToggle />
        </Flex>
      </Flex>
    </Flex>
  );
}
