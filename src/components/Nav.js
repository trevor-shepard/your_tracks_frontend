import React from 'react';


function Nav(props) {

  const logged_in = props.current_user

  const display_form = (url) => {
    return () => {
      props.history.push(url)
    }
  };

  const logged_out_nav = (
    <ul>
      <li onClick={display_form('login')}>login</li>
      <li onClick={display_form('signup')}>signup</li>
    </ul>
  );

  

  const logged_in_nav = (
    <ul>
      <li onClick={props.logout}>logout</li>
    </ul>
  );
  return <div>{logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

