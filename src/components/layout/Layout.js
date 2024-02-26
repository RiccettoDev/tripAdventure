import { Outlet } from 'react-router-dom'

import Header from './Header.js'

export default function Layout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  )
}