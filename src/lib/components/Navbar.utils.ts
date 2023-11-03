import React from 'react'
import { NavbarItem } from './Navbar'

export function isNavbarItem(child: React.ReactNode): boolean {
  return !!child && React.isValidElement(child) && child.type === NavbarItem
}
