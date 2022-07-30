import {BarIcon} from 'assets/icons';
import {Drawer, MediaQuery} from '@mantine/core';
import {useState} from 'react';

export const ResponsiveMenu = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <MediaQuery largerThan="sm" styles={{display: 'none'}}>
        <BarIcon
          style={{width: '2rem', height: '2rem'}}
          onClick={() => setOpened(true)}
        />
      </MediaQuery>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="دِو لاگ"
        padding="xl"
        size="xl"
      >
        {/* Drawer content */}
      </Drawer>
    </>
  );
};
