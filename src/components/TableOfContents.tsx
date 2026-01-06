"use client";
import {
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import { Box, Button, Code, Flex, Link, Text } from "@radix-ui/themes";
import { useCallback, useMemo, useState } from "react";

export function TableOfContents() {
  const [isCopied, setIsCopied] = useState(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("ryanjyost@gmail.com");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, []);

  const mainButtons = useMemo(() => {
    return [
      {
        label: "Download resume",
        icon: FileTextIcon,
        href: "/Yost_Ryan_Resume.pdf",
        target: "_blank",
      },

      {
        label: "Connect on LinkedIn",
        icon: LinkedInLogoIcon,
        href: "https://www.linkedin.com/in/ryan-yost-b5b2bb65",
        target: "_blank",
      },
      {
        label: "View GitHub",
        icon: GitHubLogoIcon,
        href: "https://github.com/ryanjyost",
        target: "_blank",
      },
      {
        label: isCopied ? "Copied!" : "Copy my email",
        icon: isCopied ? CheckIcon : EnvelopeClosedIcon,
        // href: "mailto:ryanjyost@gmail.com",
        onClick: handleCopyEmail,
      },
    ];
  }, [handleCopyEmail, isCopied]);

  const inPageLinks = useMemo(() => {
    return [
      {
        label: "About Me",
        href: "#about-me",
      },
      {
        label: "Projects",
        href: "#projects",
      },
      {
        label: "Technical Writing",
        href: "#technical-writing",
      },
      {
        label: "Skills & Tech",
        href: "#skills-and-tech",
      },
    ];
  }, []);

  const MainButtons = useMemo(() => {
    const buttonColor = "teal";
    return (
      <Flex gap="3" className="flex-wrap">
        {mainButtons.map((button) =>
          button.href ? (
            <Link
              key={button.label}
              href={button.href}
              target={button.target}
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Button
                variant="surface"
                size="2"
                radius="full"
                className="cursor-pointer"
                color={buttonColor}
              >
                <button.icon />
                {button.label}
              </Button>
            </Link>
          ) : (
            <Button
              key={button.label}
              variant="surface"
              size="2"
              radius="full"
              className="cursor-pointer text-foreground!"
              color={buttonColor}
              onClick={button.onClick}
            >
              <button.icon />
              {button.label}
            </Button>
          )
        )}
      </Flex>
    );
  }, [mainButtons]);

  return (
    <Flex direction="column" gap="0" style={{ marginLeft: -6 }}>
      {MainButtons}
      <Box className="h-14" />

      <Flex align="center" gap="2" className="flex-wrap ml-1">
        <Text size="8" className="pl-1">
          <strong>{`Hi, I'm Ryan.`}</strong>{" "}
          {/* <strong className="opacity-80">{`I build software for work and fun.`}</strong> */}
        </Text>
      </Flex>

      <Flex className="h-2" />

      <Flex align="center" gap="3" className="flex-wrap ml-1">
        <Text size="7" className="pl-1">
          <strong className="opacity-80">{`I build software for work and fun.`}</strong>
        </Text>
        <Code
          variant="ghost"
          color="gray"
          size="6"
        >{`// most often both`}</Code>
      </Flex>

      <Box className="h-3" />

      <Flex gap="4" className="flex-wrap ml-2">
        {inPageLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="cursor-pointer"
            onClick={(e) => handleAnchorClick(e, link.href)}
          >
            {link.label}
          </Link>
        ))}
      </Flex>

      <Box className="h-4" />
    </Flex>
  );
}
