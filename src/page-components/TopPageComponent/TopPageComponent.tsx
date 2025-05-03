'use client';

import React, { JSX, useReducer } from 'react';
import { TopPageComponentProps } from './TopPageComponents.props';
import { HhData, Htag, Product, Sort, Tag } from '@/components';
import styles from './TopPageComponent.module.css';
import { Advantages } from '@/components';
import { SortEnum } from '@/components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollY } from '@/hooks/useScrollY';

export default function TopPageComponent({page, products}: TopPageComponentProps): JSX.Element {

    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

    function setSort(sort: SortEnum) {
        dispatchSort({type: sort});
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color='gray' size='m'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <motion.div layout transition={{ duration: 0.5, ease: "easeInOut" }}>
                <AnimatePresence mode='popLayout'>
                {sortedProducts && sortedProducts.map((p) => (<Product product={p}  key={p._id}/>))}
                </AnimatePresence>
            </motion.div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансий - {page.title}</Htag>
                <Tag color='red' size='m'>hh.ru</Tag>
            </div>
            {page.hh && <HhData {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 && 
                <div className={styles.advantages}>
                    <Htag tag="h2">Преимущества</Htag>
                    <Advantages advantages={page.advantages}/>
                </div>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.tags.map((t) => <Tag key={t} color='primary' size='m'>{t}</Tag>)}
        </div>
    )
}