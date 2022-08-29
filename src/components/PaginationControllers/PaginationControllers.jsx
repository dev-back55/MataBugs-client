import React from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import PaginationButton from '../PaginationButton/PaginationButton';
import s from './PaginationControllers.module.css';

export default function PaginationControllers() {

  const [ value, setValue ] = React.useState("ranking");
  const [ order, setOrder ] = React.useState("ascending");

  return (
    <div className = {s.container}>
      <CustomSelect
        valueSelected = {value}
        values = {["ranking", "nickname"]}
        handleValue = {(newValue) => setValue(newValue)}
      />
      <CustomSelect
        valueSelected = {order}
        values = {["ascending", "descending"]}
        handleValue = {(newValue) => setOrder(newValue)}
      />
      <PaginationButton
        disabled = {false}
        handler = {() => console.log("Ok")}
      />
      <PaginationButton
        disabled = {true}
        handler = {() => console.log("Ok")}
        reverse = {true}
      />
    </div>
  );
}