import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export function AboutMe() {
  const yearsSince2018 = new Date().getFullYear() - 2018;

  return (
    <Flex direction="column" gap="4">
      <Text>I started my career in financial planning.</Text>
      <Text>
        Within a few months, I found myself obsessively customizing a WordPress
        website {`I'd`} built to share and discuss books with friends, when I
        should have been taking lecture notes about inheritance-tax loopholes.{" "}
      </Text>
      <Text>
        {`I'd`} found a passion for building web interfaces that I {`didn't`}{" "}
        know was possible, and a new career path I had to pursue.
      </Text>
      <Text>
        So, while still working full-time in financial planning, I spent 2 years
        learning and building all I could until I was ready to make the jump
        into my first frontend developer role.
      </Text>
      <Text className="font-bold">
        And in the {yearsSince2018} years since, {`I've`} expanded my skillset
        and built a whole lot of software...
      </Text>

      <ul>
        <li>
          <strong>...including</strong> static websites, single-page web apps,
          backend processes, agentic workflows, serverless functions, databases,
          APIs, data visualisations, native apps, Slack apps, web scrapers, open
          source projects, test suites, a group-text chatbot game, and more.
        </li>
        <li>
          <strong>...for</strong> big companies, small companies, startups,
          clients, and fun.
        </li>
        <li>
          <strong>...as</strong> a junior frontend developer, senior software
          engineer, team lead, freelance fullstack engineer, and edtech startup
          CTO.
        </li>
        <li>
          <strong>...contributing</strong> code, roadmap planning, PR reviews,
          architecture plans, unit tests, E2E tests, UX designs, cloud
          infrastructure orchestration, documentation, prototype iteration,
          logging, AI solutions, analytics, monitoring, deployment management,
          performance optimizations, process improvements, user research, and
          more.
        </li>
        <li>
          <Link
            href="#skills-and-tech"
            className="text-teal-link"
          >
            <strong>...using</strong> a wide range of technologies, frameworks,
            and tools.
          </Link>
        </li>
      </ul>

      <Text>
        New tech and challenges keep me just as motivated as I was when I built
        that first WordPress site.
      </Text>
      <Flex align="center" gap="1">
        <Text className="italic">Onward and upward </Text>
        <ArrowTopRightIcon fontSize={24} />
      </Flex>
    </Flex>
  );
}
