import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => dispatch(updateFilter(e.target.value))}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
