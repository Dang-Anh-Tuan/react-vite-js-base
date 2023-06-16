import { NavLink, Outlet } from "react-router-dom"
import { NAV_LINK } from "@constants/layout"

function Default() {
  return (
    <>
      <nav>
        {NAV_LINK && NAV_LINK.map(item => (
          <div
            key={item.path}
          >
            <NavLink
              to={item.path}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""}
            >
              {item.title}
            </NavLink>
            <br />
          </div>
        ))}
      </nav >
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Default