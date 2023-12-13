import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { RiLogoutCircleLine } from 'react-icons/ri';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarTweetButton from './SidebarTweetButton';

const Sidebar = () => {
  const items = [
    {
      label: 'Home',
      href: '/',
      icon: BsHouseFill,
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: BsBellFill,
    },
    {
      label: 'Profile',
      href: '/users/${userId}',
      icon: FaUser,
    },
  ];

  return (
    <div className="col-span-1 h-full pt-2 pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
          <SidebarItem
            label="Logout"
            icon={RiLogoutCircleLine}
            onClick={() => {}}
          />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
