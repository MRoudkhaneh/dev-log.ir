import {Box, Grid, Paper, Stack} from '@mantine/core';
import {AuthForm} from './components';
import {useAuth} from './hooks/useAuth';

export const AuthModule = () => {
  const {onSubmit, handleFormType, formType} = useAuth();
  return (
    <Paper
      sx={theme => ({
        background: theme.colors.dark[6],
        borderRadius: theme.radius.md,
        overflow: 'hidden',
        borderBlockColor: '#2d4886',
      })}
      withBorder
      my="lg"
    >
      <Grid grow gutter={0}>
        <Grid.Col span={6}>
          <Box
            sx={theme => ({
              backgroundColor: '#2d4886',
              height: '100%',
              padding: theme.spacing.xl,
            })}
          >
            <Stack>کسشرات</Stack>
          </Box>
        </Grid.Col>

        <Grid.Col span={6}>
          <Box
            sx={theme => ({
              height: '100%',
              padding: theme.spacing.xl,
            })}
          >
            <AuthForm
              onSubmit={onSubmit}
              handleFormType={handleFormType}
              formType={formType}
              formLoading={false}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
