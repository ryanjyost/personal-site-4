"use client";
import { Button, Flex, Link, Text } from "@radix-ui/themes";
import { projects } from "@/configs/projects";
import Image from "next/image";
import {
  GitHubLogoIcon,
  GlobeIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import GitHubButton from "react-github-btn";

export function Projects() {
  return (
    <Flex direction="column" gap="40px">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </Flex>
  );
}

function Project({ project }: { project: (typeof projects)[number] }) {
  const imageWidth = 300;
  const imageHeight = imageWidth * (9 / 16);

  return (
    <Flex className="pt-4 flex-wrap max-w-full" align="start" gap="4">
      <Link
        href={`/images/projects/${project.preview}-preview.png`}
        target="_blank"
        className="min-w-[300px] shrink-0"
      >
        <Image
          src={`/images/projects/${project.preview}-preview.png`}
          alt={project.name}
          width={imageWidth}
          height={imageHeight}
          className="rounded-sm w-[300px] max-w-full"
        />
      </Link>

      <Flex direction="column" gap="1" className="flex-1 py-1 min-w-[300px]">
        <Link href={project.link || project.github} target="_blank">
          <Flex align="center" gap="2">
            <Text size="4" className="font-bold opacity-95 text-foreground">
              {project.name}
            </Text>
            {project.link && <ArrowTopRightIcon className="opacity-80" />}
          </Flex>
        </Link>
        <Text size="3" className="opacity-80">
          {project.desc}
        </Text>
        <Flex className="h-1" />
        <Flex gap="4" align="start">
          {project.github && (
            project.showGithubButton ? (
              <GitHubButton
                href={project.github}
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label={`Check out ${project.github} on GitHub`}
              >
                Star
              </GitHubButton>
            ) : (
              <GitHubButton
                href={project.github}
                data-icon="octicon-code"
                data-size="large"
                data-show-count="false"
                aria-label={`Check out ${project.github} on GitHub`}
              >
                View code
              </GitHubButton>
            )
          )}
          {project.npm && (
            <Link href={project.npm} target="_blank">
              <Button size="2" variant="soft" radius="full" className="whitespace-nowrap">
                <GlobeIcon /> View on npm
              </Button>
            </Link>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
