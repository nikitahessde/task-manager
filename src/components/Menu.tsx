import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className='flex gap-2'>
      <NavLink to={'/'} className='bg-primary px-3 py-2 rounded-lg'>
        <p className='text-secondary text-xs'>Home</p>
      </NavLink>
      <NavLink to={'/create-task'} className='bg-primary px-3 py-2 rounded-lg'>
        <p className='text-secondary text-xs'>Create Task</p>
      </NavLink>
      <NavLink to={'/task-list'} className='bg-primary px-3 py-2 rounded-lg'>
        <p className='text-secondary text-xs'>Task List</p>
      </NavLink>
      <NavLink to={'/task-details'} className='bg-primary px-3 py-2 rounded-lg'>
        <p className='text-secondary text-xs'>Task Details</p>
      </NavLink>
    </div>
  );
};

export default Menu;

