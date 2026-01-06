"use client";
import { Flex, Text, Bad, Badge } from "@radix-ui/themes";
import { skills as skillsConfig } from "@/configs/skills";

export function Skills() {
  return (
    <Flex direction="column" gap="20px">
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
    <Flex gap="8px">
      {title}
      {skills.map((skill) => (
        <SkillItem key={skill} skill={skill} />
      ))}
    </Flex>
  );
}

function SkillItem(props: { skill: string }) {
  const { skill } = props;
    

  return <Badge color="cyan">{skill}</Badge>;
}
