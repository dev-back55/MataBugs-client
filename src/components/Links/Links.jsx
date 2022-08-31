import React from 'react';
import SectionLink from '../SectionLink/SectionLink';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import World from '../SVG/World';
import Stars from '../SVG/Stars';
import Info from '../SVG/Info';

import s from './Links.module.css';

export default function Links() {
  return (
    <>
      <SidebarTitle title = {"Explore"} />
      <SectionLink
        title = {"Hall of Fame"}
        path = {"/home"}
        icon = {Stars}
      />
      <SectionLink
        title = {"All Players"}
        path = {"/search"}
        icon = {World}
      />
      <SectionLink
        title = {"About"}
        path = {"/about"}
        icon = {Info}
      />
    </>
  );
}