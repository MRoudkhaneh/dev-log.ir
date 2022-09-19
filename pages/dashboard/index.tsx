import {ReactElement} from 'react';
import {DashboardLayout} from '@/layouts/dashboard.layout';

const Dashboard = () => {
  return <></>;
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
