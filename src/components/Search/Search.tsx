"use client";

import SearchProps from "./Search.props";
import cn from "classnames";
import styles from "./Search.module.css";
import { JSX, useState } from "react";
import {Input} from "../Input/Input";
import { Button } from "../Button/Button";
import SearchIcon from "./search.svg";
import { useRouter } from "next/navigation";

export function Search({className, ...props}: SearchProps): JSX.Element{

  const [search, setSearch] = useState<string>();
  const router = useRouter();

  function goToSearch() {
    router.push(`/search/${search}`);
  }

  function onKeyDownHandler(e: React.KeyboardEvent<HTMLInputElement>){
    if (e.key === 'Enter') {
      goToSearch();
    }
  }

  return (
        <div className={cn(className, styles.search)} {...props}>
            <Input className={styles.input}
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={onKeyDownHandler}
            />
            <Button className={styles.button} appearance="primary" onClick={goToSearch}>
                <SearchIcon className={styles.searchIcon}/> 
            </Button>
        </div>
    );
}