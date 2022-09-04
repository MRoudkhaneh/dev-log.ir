import {Button, Container, Grid, Group} from '@mantine/core';
import {ResponsiveMenu} from '../responsiveMenu';
import {Logo} from '../../../assets/icons';
import {PublicHeader} from '../publicHeader';
import Link from 'next/link';
import {useEffect, useState} from 'react';

export const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    // cookies.get('username') ? setIsLogin(true) : setIsLogin(false);
  }, []);
  return (
    <div style={{background: '#2d3748'}}>
      <Container>
        <Grid
          justify="space-between"
          sx={theme => ({
            paddingTop: theme.spacing.xl,
            paddingBottom: theme.spacing.xs,
            marginBottom: theme.spacing.md,
          })}
        >
          <Group>
            <ResponsiveMenu />
            <Logo style={{width: '3rem', height: '3rem'}} />
            <PublicHeader />
          </Group>

          <Group>
            {isLogin ? (
              <Link href="dashboard">
                <a>
                  <Button size="xs">mprince7</Button>
                </a>
              </Link>
            ) : (
              <Link href="auth">
                <a>
                  <Button size="xs">ورود / ثبت نام</Button>
                </a>
              </Link>
            )}
          </Group>
        </Grid>
      </Container>
    </div>
  );
};
