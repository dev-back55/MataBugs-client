import React from 'react';
import { Link } from 'react-router-dom';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import World from '../SVG/World';
import Stars from '../SVG/Stars';
import Info from '../SVG/Info';

import s from './SectionLink.module.css';

export default function SectionLink({ title, path, icon }) {
  return (
    <Link to = {path} style = {{textDecoration: 'none'}}>
      <div className = {s.containerLink}>
        { icon({ style: s.styleSVG }) }
        <h4 className = {s.label}>{title}</h4>
      </div>
    </Link>
  );
}