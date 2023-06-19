import { NAV_LINK } from "@constants/layout"
import '@css/Default.css'
import { useAuth } from "@hooks/auth"
import { NavLink, Outlet } from "react-router-dom"

function Default() {
  const { token, currentUser, logout } = useAuth()
  const avatar = 'https://ss-images.saostar.vn/w800/pc/1676739061999/saostar-inxbpwvck5wi6n4r.png'

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-container-menu">
          {NAV_LINK && NAV_LINK.map(item => (
            <div
              key={item.path}
              className="container-nav-link"
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
        </div>
        <div className="nav-container-user">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${avatar})` }}>
          </div>
          {
            token ? (
              <>
                <p>Hello, {currentUser?.name}</p>
                <button
                  style={{ marginLeft: '10px' }}
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to='/login'>
                  <button>Login</button>
                </NavLink>
              </>
            )
          }

        </div>
      </nav >
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Default