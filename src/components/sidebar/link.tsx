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
    IconCalendarEvent,
    IconMail,
    IconPlus
  } from '@tabler/icons-react'
  
  export const links = [
    {
           label: 'Dashboard',
           href: '/',
           icon: <IconBrandTabler className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Add Blogs',
           href: '/blogs/add',
           icon: <IconPlus className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Users',
           href: '/users',
           icon: <IconUser className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Vendors',
           href: '/vendors',
           icon: <IconUsersGroup className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Pending Requests',
           href: '/pending-requests',
           icon: <IconClockHour10 className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Tours',
           href: '/tours',
           icon: <IconBus className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Tours Request',
           href: '/tours/request',
           icon: <IconClipboardCheck className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Add Tours',
           href: '/tours/add',
           icon: <IconPlus className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Events',
           href: '/events',
           icon: <IconCalendarEvent className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Events Request',
           href: '/events/request',
           icon: <IconClipboardCheck className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Add Event',
           href: '/events/add',
           icon: <IconPlus className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Email',
           href: '/email',
           icon: <IconMail className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Email Templates',
           href: '/email/templates',
           icon: <IconTemplate className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Home Page Data',
           href: '/home',
           icon: <IconHome2 className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Library',
           href: '/library',
           icon: <IconFolder className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Other',
           href: '/other',
           icon: <IconList className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Category',
           href: '/category',
           icon: <IconCategory className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Contact Us',
           href: '/contact',
           icon: <IconPhoneCall className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Forms Submission',
           href: '/forms',
           icon: <IconForms className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Coupons',
           href: '/coupons',
           icon: <IconDiscount2 className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Bookings',
           href: '/bookings',
           icon: <IconClipboardCheck className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Api\'s',
           href: '/apis',
           icon: <IconApi className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Profile',
           href: '/profile',
           icon: <IconUserBolt className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Settings',
           href: '/settings',
           icon: <IconSettings className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         },
         {
           label: 'Logout',
           href: '/logout',
           icon: <IconArrowLeft className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
         }
  ]
  