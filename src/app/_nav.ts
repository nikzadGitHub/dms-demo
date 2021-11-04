import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    icon: 'cil-home',
  },
  {
    divider: true,
  },
  {
    name: 'Leads',
    url: 'leads/index',
    icon: 'cil-user-plus'
  },
  {
    name: 'Prospects',
    url: 'prospects/index',
    icon: 'cil-user-plus'
  },
  {
    name: 'Opportunities',
    url: '/opportunity',
    icon: 'cil-money',
  },
  {
    name: 'DMS',
    url: '/dms',
    icon: 'cil-file',
    children: [
      {
        name: 'Inventory',
        url: '/dms/inventory',
      },
      {
        name: 'Bookings',
        url: '/dms/bookings',
      },
      {
        name: 'Approvals',
        url: '/dms/approvals',
      },
      {
        name: 'Calendar',
        url: '/dms/calendar',
      },
    ]
  },
  {
    name: 'Activities',
    url: '/activities',
    icon: 'cil-calendar',
  },
  {
    divider: true,
  },
  {
    name: 'Quote',
    url: 'quote/index',
    icon: 'cil-dollar',
  },
  {
    name: 'SOCI',
    url: '/soci/index',
    icon: 'cil-storage'
  },
  {
    name: 'Sales Target',
    url: '/salestarget',
    icon: 'cil-scrubber'
  },
  {
    name: 'Reports',
    url: '/reports',
    icon: 'cil-chart-line'
  },
  {
    divider: true,
  },
  {
    name: 'Customers',
    url: '/customers',
    icon: 'cil-briefcase',
  },
  {
    name: 'Contact',
    url: '/contact/index',
    icon: 'cil-address-book',
  },
  {
    divider: true,
  },
  {
    name: 'Manager View',
    url: '/managerview',
    icon: 'cil-group',
    children: [
      {
        name: 'Approval',
        url: '/managerview/approval',
      },
      {
        name: 'Reassignment',
        url: '/managerview/reassignment',
      },
      {
        name: 'Deactivate/Active',
        url: '/managerview/active',
      },
      {
        name: 'Sales Target Setup',
        url: '/managerview/salestargetsetup',
      },
    ]
  },
  {
    divider: true,
  },
  {
    name: 'System Admin',
    url: '/systemadmin',
    icon: 'cil-settings',
  },
  /*
  {
    name: 'USER ACCESS SETUP',
    url: '/accesssetup',
    icon: 'cil-user-plus',
  },
  {
    name: 'USER',
    url: '/user',
    icon: 'cil-voice-over-record',
    children: [
      {
        name: 'Add User',
        url: '/user/adduser',
      },
      {
        name: 'User LOA',
        url: '/user/userloa',
      },
    ]
  },
  {
    name: 'UNIT SETUP',
    url: '/unitsetup',
    icon: 'cil-screen-smartphone',
  },
  {
    name: 'SETTING',
    url: '/setting',
    icon: 'cil-cog',
  },
*/
  {
    divider: true,
  },
  {
    name: 'Profile',
    url: '/rofile',
    icon: 'cil-user'
  },
  {
    name: 'Logout',
    url: '/logout',
    icon: 'cil-account-logout'
  },

];
