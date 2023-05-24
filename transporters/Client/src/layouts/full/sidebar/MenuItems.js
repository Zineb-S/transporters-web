import {
  IconUsers, IconMessageDots, IconLayoutDashboard, IconMoodHappy, IconCoin, IconUserPlus, IconTruckDelivery
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Management',
  },
  {
    id: uniqueId(),
    title: 'Demands',
    icon: IconTruckDelivery,
    href: '/demands',
  },
  {
    id: uniqueId(),
    title: 'Offers',
    icon: IconCoin,
    href: '/offers',
  },
  {
    id: uniqueId(),
    title: 'Messages',
    icon: IconMessageDots,
    href: '/messages',
  },
  {
    id: uniqueId(),
    title: 'Members',
    icon: IconUsers,
    href: '/members',
  },
  
  {
    navlabel: true,
    subheader: 'Others',
  },
  {
    id: uniqueId(),
    title: 'Reviews',
    icon: IconMoodHappy,
    href: '/reviews',
  },

];

export default Menuitems;
