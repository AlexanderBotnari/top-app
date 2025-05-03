import React from 'react';

import Header from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Footer } from '../components/Footer/Footer';

import { AppContextProvider } from '../context/app.context';

import type { Metadata } from "next";
import {Noto_Sans_KR} from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';
import Up from '@/components/Up/Up';

const noto_sans_kr = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Top App",
  description: "Our best top app",
};

const firstCategory = TopLevelCategory.Courses;

const fetchMenu = async (): Promise<MenuItem[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}api/top-page/find`, {
    method: 'POST',
    body: JSON.stringify({ firstCategory: firstCategory }),
    headers: { 'Content-Type': 'application/json' },
    // next: { revalidate: 3600 } // Optional: Revalidare Incrementală (ISR)
  });
  return response.json();
};

export default async function RootLayout({children}: Readonly<{children: React.ReactNode}>) {

  const menu = await fetchMenu();
  
  return (
    <html lang="en" className={noto_sans_kr.className}>
      <body>
        <AppContextProvider menu={menu} firstCategory={firstCategory}>
        <div className={styles.wrapper}>  
          <Header className={styles.header}/>
          <Sidebar className={styles.sidebar}/>
          <div className={styles.body}>
            {children}
          </div>
          <Footer className={styles.footer}/>
          <Up/>
        </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
