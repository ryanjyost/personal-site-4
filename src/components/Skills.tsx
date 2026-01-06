"use client";
import { Flex, Text, Badge } from "@radix-ui/themes";
import { skills as skillsConfig } from "@/configs/skills";

export function Skills() {
  return (
    <Flex direction="column" gap="30px" className="max-w-full">
      {skillsConfig.map((skillSection) => (
        <SkillSection
          key={skillSection.title}
          title={skillSection.title}
          skills={skillSection.skills}
        />
      ))}
    </Flex>
  );
}

function SkillSection(props: { title: string; skills: string[] }) {
  const { title, skills } = props;
  return (
    <Flex direction="column" gap="8px">
      <Text size="4" className="font-bold">
        {title}
      </Text>
      <Flex direction="row" gap="12px" className="flex-wrap">
        {skills.map((skill, index) => (
          <SkillItem key={skill} skill={skill} light={index % 2 !== 0} />
        ))}
      </Flex>
    </Flex>
  );
}

function SkillItem(props: { skill: string; light?: boolean }) {
  const { skill, light } = props;

  return (
    <Badge
      color="teal"
      size="3"
      variant={"surface"}
    //   className={light ? "opacity-85" : ""}
    >
      {skill}
    </Badge>
  );
}
