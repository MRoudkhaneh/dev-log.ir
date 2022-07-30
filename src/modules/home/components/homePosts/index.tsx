import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import {IconHeart, IconShare} from '@tabler/icons';

export const HomePosts = () => {
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
      <Group
        sx={theme => ({
          [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
            flexWrap: 'nowrap',
          },
        })}
      >
        <Image
          sx={theme => ({
            [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
              flexGrow: 1,
            },
          })}
          radius="md"
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={180}
          alt="Norway"
        />

        <Stack
          spacing={0}
          sx={theme => ({
            [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
              flexGrow: 1,
            },
          })}
        >
          <Group position="apart" align="start">
            <Group>
              <Avatar radius="xl" />
              <Stack justify="flex-end" spacing={0}>
                <Text size="sm">محمد رودخانهء</Text>
                <Text size="xs" weight="lighter">
                  ۳۱ دقیقه پیش - خواندن ۸ دقیقه
                </Text>
              </Stack>
            </Group>
            <Badge color="yellow" variant="light">
              Js
            </Badge>
          </Group>
          <Text weight={500} my="lg">
            پیاده‌سازی توابع Throttle و Debounce در جاوااسکریپت
          </Text>
          <Text size="sm" color="dimmed">
            با دو تابع آشنا می‌شیم که کمک می‌کنن برنامهٔ بهینه‌تر و سریع‌تر و
            کاربرد پذیرتر داشته باشیم
          </Text>
          <Group spacing="xs" position="right">
            <ActionIcon radius="xl" variant="transparent">
              <IconHeart size={18} color="#fa5252" stroke={1.5} />
            </ActionIcon>
            <ActionIcon radius="xl" variant="transparent">
              <IconShare size={18} color="#f59f00" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Stack>
      </Group>
    </Card>
  );
};
