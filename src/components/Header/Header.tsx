"use client";
import HeaderProps from "./Header.props";
import { JSX, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Header.module.css";
import OwlLogo from "../Sidebar/logo.svg";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { Sidebar } from "../Sidebar/Sidebar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header({ className, ...props}: HeaderProps): JSX.Element{

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const variants = {
        open: { opacity: 1, x: 0, transition: { stiffness: 20}},
        closed: { opacity: 0, x: "100%" },
    };

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);


  return (
        <header className={cn(className, styles.header)} {...props}> 
            <OwlLogo className={styles.logo}/>
            <ButtonIcon icon="menu" appearance="white" onClick={() => setIsOpen(true)}/>
            <motion.div className={styles.mobileMenu}
                variants={variants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
            >
                <Sidebar/>
                <ButtonIcon icon="close" appearance="white" className={styles.close} onClick={() => setIsOpen(false)}/>
            </motion.div>
        </header>
    );
}