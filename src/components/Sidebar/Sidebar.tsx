import Menu from "../Menu/Menu";
import SidebarProps from "./Sidebar.props";
import { JSX } from "react";
import OwlLogo from "./logo.svg";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import { Search } from "../Search/Search";

export function Sidebar({ className, ...props}: SidebarProps): JSX.Element{

  return (
       <div className={cn(className, styles.sidebar)} {...props}>
         <OwlLogo className={styles.logo}/>
          <Search />
          <Menu/>
       </div>
    );
}