import { MIDDLEWARE_LIST } from '@constants/middleware'

const Middleware = function ({ listMiddleware, children }) {
  let component = children

  for (const item of listMiddleware) {
    const MiddlewareComponent = MIDDLEWARE_LIST[item.name]
    component = <MiddlewareComponent {...item.props}>{component}</MiddlewareComponent>
  }
  
  return component
}

export default Middleware