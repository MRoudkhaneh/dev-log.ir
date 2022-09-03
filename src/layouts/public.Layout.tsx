import {Button, Container, Grid, Group} from '@mantine/core';
import {ReactNode} from 'react';
import {PublicHeader, ResponsiveMenu} from '@/components/common';
import {Logo} from '@/assets/icons';
export const PublicLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <div style={{background: '#2d3748'}}>
        <Container>
          <Grid
            justify="space-between"
            sx={theme => ({
              paddingTop: theme.spacing.xl,
              paddingBottom: theme.spacing.xl,
              marginBottom: theme.spacing.md,
            })}
          >
            <Group>
              <Logo style={{width: '3rem', height: '3rem'}} />
              <PublicHeader />
            </Group>

            <Group>
              <Button size="xs">ورود</Button>
              <Button size="xs">ثبت نام</Button>
              <ResponsiveMenu />
            </Group>
          </Grid>
        </Container>
      </div>
      <Container>
        <>{children}</>
      </Container>
    </>
  );
};
