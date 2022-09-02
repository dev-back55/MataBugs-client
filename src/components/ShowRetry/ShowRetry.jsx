import React from 'react';
import ShowBox from '../ShowBox/ShowBox';

export default function ShowNotFound({ message = "Retry", retryCB }) {
  return (
    <ShowBox
      type = {"RETRY"}
      message = {message}
      retryCB = {retryCB}
    />
  );
}