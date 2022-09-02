import React from 'react';

const UserMenu = ({ userData }) => {
  const { avatar_url, name, location } = userData;
  return (
    <div className="menu">
      <span className="menu__greeting">Hello, {name}</span>
      <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
    </div>
  );
};
export default UserMenu;
