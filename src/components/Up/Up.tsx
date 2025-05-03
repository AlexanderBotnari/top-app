"use client";

import React, { useEffect } from 'react';
import styles from './Up.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useScrollY } from '@/hooks/useScrollY';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export default function Up(){

    const y = useScrollY();
    const controls = useAnimation();

    useEffect(() => {
        controls.start({opacity: y / document.body.scrollHeight});
    }, [y, controls]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <motion.div className={styles.up} animate={controls} initial={{opacity: 0}}>
            <ButtonIcon icon="up" appearance="primary" onClick={handleClick}/>
        </motion.div>
    )
}