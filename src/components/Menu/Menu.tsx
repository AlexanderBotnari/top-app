'use client';

import { AppContext } from "../../context/app.context";
import { JSX, useContext } from "react";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface"

import cn from 'classnames';
import styles from './Menu.module.css';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { firstLevelMenu } from "@/helpers/helper";
import { motion } from "framer-motion";

export default function Menu(): JSX.Element {

    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const pathName = usePathname();

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {
            marginBottom:0
        }
    }

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 'auto',
        },
        hidden: {
            opacity: 0,
            height: 0,
        }
    }

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if(m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }))
    }

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        )
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return(
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if(m.pages.map(p => p.alias).includes(pathName.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                                {m._id.secondCategory}
                            </div>
                            <motion.div 
                                className={cn(styles.secondLevelBlock)}
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                            >
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </motion.div>
                        </div>
                    )
                 })}
            </div>
        )
    }

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return(
            <div>
                {pages.map(p => (
                    <motion.div 
                        key={p.category}
                        variants={variantsChildren}
                        className={styles.thirdLevelBlock}
                    >
                        <Link href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathName,
                        })}>
                            {p.category}
                        </Link>
                    </motion.div>
                ))}
            </div>
        )
    }

    return (
        <div>
            {buildFirstLevel()}
        </div>
    )
}