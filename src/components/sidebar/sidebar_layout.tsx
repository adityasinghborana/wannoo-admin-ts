'use client'
import React, { useState } from 'react'
import { Sidebar, SidebarBody, SidebarLink } from '../ui/sidebar'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Logo, LogoIcon } from './logo'
import { links } from './link'

const SidebarLayout = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn('transition-all duration-300 mx-auto flex flex-col overflow-hidden md:flex-row dark:border-neutral-700 dark:bg-neutral-800 h-screen', open ? 'w-64' : 'w-16')}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className='justify-between gap-10'>
          <div className='flex flex-1 flex-col overflow-x-hidden overflow-y-auto hide-scrollbar'>
            {open ? <Logo /> : <LogoIcon />}
            <div className='mt-8 flex flex-col gap-2'>
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={{
                    ...link,
                    icon: React.cloneElement(link.icon, {
                      className: 'h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200'
                    })
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: 'Manu Arora',
                href: '#',
                icon: (
                  <Image
                    src='https://assets.aceternity.com/manu.png'
                    className='h-7 w-7 shrink-0 rounded-full'
                    width={50}
                    height={50}
                    alt='Avatar'
                  />
                )
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  )
}

export default SidebarLayout
