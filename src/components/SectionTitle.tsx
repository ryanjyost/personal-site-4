import { Flex, Text } from "@radix-ui/themes";

export function SectionTitle({ id, title }: { id: string; title: string }) {
  return (
    <Flex id={id} className="w-full py-3" style={{ scrollMarginTop: "4rem" }}>
      <Text size="6" className="font-bold opacity-95">
        {title}
      </Text>
    </Flex>
  );
}
