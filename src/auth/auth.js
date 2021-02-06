import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookie from 'react-cookies'


export const ProtectedRouteUser = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {

        const logindata = localStorage.getItem('qbuserlogin') === 'true'
        // const logindata = cookie.load('qbuserlogin') === 'true';
  
      
        if (logindata) {

          //Check Email Verify
          // var data = JSON.parse(localStorage.getItem('qbuserdata'));
          // var data = localStorage.getItem('qbuseremailverify');
          // var data=cookie.load('qbuserdata');


          if(localStorage.getItem('qbuseremailverify') !=='Verified'){
            return <Redirect to="/emailverify" />
          }else{
            return <Component {...props} />;
          }

        //   return <Component {...props} />;

        } else {

          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );

        }
      }}
    />
  );
};