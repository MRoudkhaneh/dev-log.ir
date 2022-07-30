import {ActionIcon, Card, Group, Title} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons';

export const HomeSocialMedia = () => {
  return (
    <Card
      shadow="sm"
      p="md"
      mb="lg"
      radius="lg"
      withBorder
      sx={{
        background: '#2d3748',
      }}
    >
      <Title order={5} align="center">
        ما را در شبکه‌های اجتماعی دنبال کنید
      </Title>
      <Group spacing="xs" mt="xl" position="center" noWrap>
        <ActionIcon size="lg" variant="outline" radius="xl">
          <IconBrandTwitter size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" variant="outline" radius="xl">
          <IconBrandGithub size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" variant="outline" radius="xl">
          <IconBrandInstagram size={18} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
};
