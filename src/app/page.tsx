import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { SectionTitle } from "@/components/SectionTitle";
import { TableOfContents } from "@/components/TableOfContents";
import { Writing } from "@/components/Writing";
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background max-w-full">
      <Flex direction="column" className="pb-[200px] max-w-full">
        <Box className="h-4" />

        <TableOfContents />

        <Box className="h-[50px]" />

        <SectionTitle id="about-me" title="About Me" />
        <AboutMe />

        <Box className="h-[100px]" />

        <SectionTitle id="projects" title="Projects" />
        <Projects />

        <Box className="h-[100px]" />

        <SectionTitle id="technical-writing" title="Technical Writing" />
        <Writing />
      </Flex>
    </main>
  );
}
