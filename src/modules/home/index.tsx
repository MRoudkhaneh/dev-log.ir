import {BannerHome, HomePosts, HomeSocialMedia, SvgHeader} from './components';
import {Grid, Title} from '@mantine/core';

export const HomeModules = () => {
  return (
    <>
      <BannerHome />
      <Title order={2} className="title" mb="xl">
        آخرین مطالب
      </Title>
      <Grid gutter="xl">
        <Grid.Col md={8}>
          <HomePosts />
        </Grid.Col>
        <Grid.Col md={4}>
          <HomeSocialMedia />
        </Grid.Col>
      </Grid>
    </>
  );
};
