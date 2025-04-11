// components/sidebar/links.ts
import {
  IconBrandTabler,
  IconUserBolt,
  IconSettings,
  IconArrowLeft,
  IconUser,
  IconUsersGroup,
  IconClockHour10,
  IconBus,
  IconTemplate,
  IconHome2,
  IconFolder,
  IconList,
  IconCategory,
  IconPhoneCall,
  IconForms,
  IconDiscount2,
  IconClipboardCheck,
  IconApi,
  IconPlus
} from '@tabler/icons-react'

export const links = [
  {
    label: 'Dashboard',
    href: '/',
    icon: (
      <IconBrandTabler className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Add Blogs',
    href: '/dashboard/addblogs',
    icon: (
      <IconPlus className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Users',
    href: '/dashboard/users',
    icon: (
      <IconUser className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Vendors',
    href: '/dashboard/vendors',
    icon: (
      <IconUsersGroup className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Pending Requests',
    href: '/dashboard/pending-requests',
    icon: (
      <IconClockHour10 className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Tours',
    href: '/dashboard/tours',
    icon: (
      <IconBus className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Tours Request',
    href: '/dashboard/toursrequest',
    icon: (
      <IconClipboardCheck className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Add Tours',
    href: '/dashboard/addtour',
    icon: (
      <IconPlus className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },

  {
    label: 'Email Templates',
    href: '/dashboard/email',
    icon: (
      <IconTemplate className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Home Page Data',
    href: '/dashboard/homepagedata',
    icon: (
      <IconHome2 className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Library',
    href: '/dashboard/library',
    icon: (
      <IconFolder className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Other',
    href: '/dashboard/other',
    icon: (
      <IconList className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Category',
    href: '/dashboard/category',
    icon: (
      <IconCategory className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Contact Us',
    href: '/dashboard/contact',
    icon: (
      <IconPhoneCall className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Forms Submission',
    href: '/dashboard/forms',
    icon: (
      <IconForms className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Coupons',
    href: '/dashboard/coupons',
    icon: (
      <IconDiscount2 className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Bookings',
    href: '/dashboard/bookings',
    icon: (
      <IconClipboardCheck className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: "Api's",
    href: '/dashboard/apis',
    icon: (
      <IconApi className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Profile',
    href: '/dashboard/profile',
    icon: (
      <IconUserBolt className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: (
      <IconSettings className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  },
  {
    label: 'Logout',
    href: '/logout',
    icon: (
      <IconArrowLeft className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    )
  }
]
