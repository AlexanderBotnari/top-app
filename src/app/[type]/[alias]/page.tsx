import React, {JSX} from "react";
import { TopPageModel } from "../../../interfaces/page.interface";
import { ProductModel } from "../../../interfaces/product.interface";
import { MenuItem } from "../../../interfaces/menu.interface";
import { notFound } from "next/navigation";
import TopPageComponent from "@/page-components";
import { API } from "@/helpers/api";

const firstCategory = 0;

// Funcție pentru preluarea meniului
const fetchMenu = async (): Promise<MenuItem[]> => {
  const response = await fetch(API.topPage.find, {
    method: "POST",
    body: JSON.stringify({ firstCategory }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

// Funcție pentru preluarea paginii
const fetchPage = async (alias: string): Promise<TopPageModel> => {
  const response = await fetch(`${API.topPage.byAlias}/${alias}`, {
    method: "GET",
  });
  return response.json();
};

// Funcție pentru preluarea produselor
const fetchProduct = async (category: string): Promise<ProductModel[]> => {
  const response = await fetch(API.product.find, {
    method: "POST",
    body: JSON.stringify({
      category,
      limit: 10,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

// Componenta principală
interface PageProps {
  params: Promise<{
      alias: string;
    }>;
}

export async function generateStaticParams(){
  const menu = await fetchMenu();
  const menuItem = menu.flatMap(m => m.pages.map(i => i));
  return menuItem.map(m => ({
    alias: m.alias,
    type: m.category,
  }));
}

export async function generateMetadata({params}: PageProps){
  const resolvedParams = await params;
  const { alias } = resolvedParams;
  const page = await fetchPage(alias);
  if(!page){
    return {
      title: 'Page not found',
      description: 'The page you are looking for does not exist.'
    }
  }

  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
      locale: 'ru_Ru',
    },
  }
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  const resolvedParams = await params;
  const { alias} = resolvedParams;

  // Preluarea datelor
  const page = await fetchPage(alias);
  const products = await fetchProduct(page.category);

  if (!page) {
    return notFound();
  }

  if (!Array.isArray(products) || products.length === 0) {
    return notFound();
  }

  return (
    <>
      <TopPageComponent page={page} products={products}/>
    </>
  );
}