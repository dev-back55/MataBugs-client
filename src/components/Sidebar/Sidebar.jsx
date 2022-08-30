import React from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import PaginationButton from '../PaginationButton/PaginationButton';

import s from './Sidebar.module.scss';

export default function Sidebar() {
  const [ status, setStatus ] = React.useState("All");
  const [ order, setOrder ] = React.useState("ascending");
  const [ value, setValue ] = React.useState("ranking");
  
  return (
    <div className = {s.container}>
      <h4>Pagination: </h4>
      <div className={s.containerPagination} >
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
      <h4>Filter Status: </h4>
      <CustomSelect
        valueSelected = {status}
        values = {["All", "oro", "bronce", "plata"]}
        handleValue = {(newValue) => setStatus(newValue)}
      />
      <h4>Order Ranking: </h4>
      <CustomSelect
        valueSelected = {order}
        values = {["ascending", "descending"]}
        handleValue = {(newValue) => setOrder(newValue)}
      />
      <h4>Order Rank/Nick: </h4>
      <CustomSelect
        valueSelected = {value}
        values = {["ranking", "nickname"]}
        handleValue = {(newValue) => setValue(newValue)}
      />
    </div>
  )
}