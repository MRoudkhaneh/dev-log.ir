import {Box, Button, Group, Stack, Text, Title} from '@mantine/core';
import {LOGOS} from '@/lib/logos';
import {SvgHeader} from '../index';

export const BannerHome = () => {
  const generateRandomLogo = LOGOS.sort(() => Math.random() - 0.53);
  return (
    <Box
      sx={theme => ({
        background: 'linear-gradient(to right, #1488cc, #2b32b2)',
        padding: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl,
        borderRadius: theme.radius.lg,
        position: 'sticky',
      })}
    >
      <div className="banner" />
      <Group
        position="apart"
        align="center"
        sx={theme => ({
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            justifyContent: 'center',
          },
        })}
      >
        <Stack
          sx={theme => ({
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              width: '100%',
            },
          })}
        >
          <Title order={2}>دِولاگ پلتفرمی </Title>{' '}
          <Title order={3}>برای انتقال تجربه و دانش به زبان فارسی </Title>
          <Text>در این مسیر با ما همراه شو . . .</Text>
          <Group>
            <Button>درباره دِولاگ</Button>
            <Button>همین الان عضو شو</Button>
          </Group>
        </Stack>
        <SvgHeader logos={generateRandomLogo} />
      </Group>
    </Box>
  );
};
