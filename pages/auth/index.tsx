import {ReactElement} from 'react';
import {Container} from '@mantine/core';
import {BlankLayout} from '@/layouts/blank.Layout';
import {AuthModule} from '@/modules/auth';
import {GetServerSidePropsContext} from 'next';
import {getCookie} from 'cookies-next';

const Auth = () => {
  return (
    <Container size="lg">
      <AuthModule />
    </Container>
  );
};

export default Auth;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const accessToken = getCookie('accessToken', {req: ctx.req, res: ctx.res});
  if (accessToken) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
  return {
    props: {},
  };
};

Auth.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
