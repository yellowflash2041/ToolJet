import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { setCookie } from '@/_helpers/cookie';
import { authenticationService } from '@/_services';

export const PrivateRoute = ({ component: Component, switchDarkMode, darkMode, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = authenticationService.currentUserValue;
      if (!currentUser && !props.location.pathname.startsWith('/applications/')) {
        // not logged in so redirect to login page with the return url
        props.location.pathname && setCookie('redirectPath', props.location.pathname);
        return (
          <Redirect
            to={{
              pathname: '/login',
              search: `?redirectTo=${props.location.pathname}`,
              state: { from: props.location },
            }}
          />
        );
      }

      // authorised so return component
      return <Component {...props} switchDarkMode={switchDarkMode} darkMode={darkMode} />;
    }}
  />
);
