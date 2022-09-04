import {
  Avatar,
  Box,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from '@mantine/core';
import {
  IconArticle,
  IconMessages,
  IconDatabase,
  IconChevronLeft,
  IconCirclePlus,
  IconUser,
  IconDoorExit,
} from '@tabler/icons';
import {useRouter} from 'next/router';
import Link from 'next/link';
const data = [
  {
    link: 'dashboard',
    icon: <IconUser size={16} />,
    color: 'blue',
    label: 'داشبورد',
  },
  {
    link: 'post',
    icon: <IconArticle size={16} />,
    color: 'teal',
    label: 'پست ها',
  },
];
export const DashboardSidebar = () => {
  const {pathname} = useRouter();
  return (
    <Box
      sx={theme => ({
        padding: theme.spacing.md,
        borderRadius: theme.radius.lg,
        background: theme.colors.dark[5],
      })}
    >
      <Title order={4} my="xl">
        حساب کاربری
      </Title>
      <Stack>
        <Box
          sx={theme => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color:
              theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          })}
        >
          <Group>
            <Avatar size={30}>M7</Avatar>
            <Box sx={{flex: 1}}>
              <Text size="sm" weight={500}>
                خوش اومدی
              </Text>
              <Text color="dimmed" size="xs">
                mprince7
              </Text>
            </Box>
          </Group>
        </Box>

        {data.map((item, index) => (
          <Link key={`Links${index}`} href={item.link}>
            <a>
              <UnstyledButton
                sx={theme => ({
                  backgroundColor: pathname.includes(item.link)
                    ? theme.colors.dark[6]
                    : '',
                  display: 'block',
                  width: '100%',
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[0]
                      : theme.black,
                  '&:hover': {
                    backgroundColor: theme.colors.dark[6],
                  },
                })}
              >
                <Group>
                  <ThemeIcon color={item.color} variant="light">
                    {item.icon}
                  </ThemeIcon>

                  <Text size="sm">{item.label}</Text>
                </Group>
              </UnstyledButton>
            </a>
          </Link>
        ))}

        <UnstyledButton
          sx={theme => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color:
              theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            '&:hover': {
              backgroundColor: theme.colors.dark[6],
            },
          })}
        >
          <Group>
            <ThemeIcon color={'red'} variant="light">
              <IconDoorExit size={16} />
            </ThemeIcon>

            <Text size="sm">خروج از حساب کاربری</Text>
          </Group>
        </UnstyledButton>
      </Stack>
    </Box>
  );
};
