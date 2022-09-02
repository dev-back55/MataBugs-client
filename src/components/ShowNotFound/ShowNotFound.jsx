import React from 'react';
import ShowBox from '../ShowBox/ShowBox';

export default function ShowNotFound({ message = "Error" }) {
  return (
    <ShowBox
      type = {"NOTFOUND"}
      message = {message}
    />
  );
}