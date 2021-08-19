import {Route, Redirect} from "react-router-dom";

const privateRoute = ({component: Component, auth, to, ...rest}) => {
    const token = localStorage.getItem('authorization')
    return (
      <Route
          {...rest}
          render={props => {
              if (auth === !!token) {
                  return <Component {...props}/>
              } else {
                  return <Redirect to={{
                      pathname: to,
                      state: {
                          from: props.location
                      }
                  }
                  }/>
              }
          }}
      />
  )
}
export default privateRoute;