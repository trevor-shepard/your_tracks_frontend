import React from 'react';


function Nav(props) {

  
  const display_form = (url) => {
    return () => {
      props.history.push(url)
    }
  };

  if (props.logged_in) {
    return (
      <ul>
        <li>{props.currentUser.username}</li>
        <li onClick={props.logout}>logout</li>
      </ul>
    )
  } else {
    return (
      <ul>
        <li onClick={display_form('/login')}>login</li>
        <li onClick={display_form('/signup')}>signup</li>
      </ul>
    );
  }
  
}

export default Nav;

