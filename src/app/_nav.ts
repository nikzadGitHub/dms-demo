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
        url: '/managerview/setup',
      },
    ]
  },
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
