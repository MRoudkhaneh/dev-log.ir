import {Group, MediaQuery} from '@mantine/core';
import Link from 'next/link';
import {MENU_ITEMS} from '@/lib/menu';
import {useRouter} from 'next/router';

export const PublicHeader = () => {
  const {pathname} = useRouter();
  return (
    <>
      <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
        <Group spacing="xl">
          {MENU_ITEMS.map((menu, index) => (
            <Link href={menu.url} key={index}>
              <a className="mx-2">
                <span
                  className={`menu-item ${pathname === menu.url && 'active'}`}
                >
                  {menu.name}
                </span>
              </a>
            </Link>
          ))}
        </Group>
      </MediaQuery>
    </>
  );
};
