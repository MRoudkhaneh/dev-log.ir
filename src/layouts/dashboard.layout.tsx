import {ReactNode} from 'react';
import {Container, Grid} from '@mantine/core';
import {DashboardSidebar, Header} from '@/components/common';

export const DashboardLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Header />
      <Container>
        <Grid>
          <Grid.Col span={3}>
            <DashboardSidebar />
          </Grid.Col>
          <Grid.Col span={9}>{children}</Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
