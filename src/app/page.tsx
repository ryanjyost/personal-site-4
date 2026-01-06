"use client";

import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { SectionTitle } from "@/components/SectionTitle";
import { Skills } from "@/components/Skills";
import { TableOfContents } from "@/components/TableOfContents";
import { Writing } from "@/components/Writing";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex } from "@radix-ui/themes";
import { useCallback } from "react";

export default function Home() {
  const scrollToTop = useCallback(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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

        <Box className="h-[100px]" />

        <SectionTitle id="skills-and-tech" title="Skills & Tech" />
        <Box className="h-4" />
        <Skills />

        <Box className="h-[100px]" />

        <Flex justify="center">
          <Button variant="ghost" onClick={scrollToTop}>
            Scroll back to top <ArrowUpIcon />
          </Button>
        </Flex>
      </Flex>
    </main>
  );
}
