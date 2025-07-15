"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { LucideAlignLeft, MoonIcon, SunIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { linksPages } from '@/utils/links'
import Link from 'next/link'

function SideBar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // نمنع الرندر قبل ما يتأكد المتصفح إننا على الكلاينت
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className='flex items-center gap-3'>
      {theme === "light" ? (
        <Button onClick={() => setTheme("dark")} variant="outline" size="icon">
          <MoonIcon className="lucide lucide-moon" />
        </Button>
      ) : (
        <Button onClick={() => setTheme("light")} variant="outline" size="icon">
          <SunIcon className="lucide lucide-sun" />
        </Button>
      )}

      <div className='hidden max-sm:flex'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <LucideAlignLeft />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Pages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {linksPages.map((page) => (
              <Link key={page.name} href={page.href}>
                <DropdownMenuItem>{page.name}</DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  )
}

export default SideBar
