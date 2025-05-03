import React, {JSX} from "react";

// Funcție pentru preluarea meniului
// const fetchMenu = async (): Promise<MenuItem[]> => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}api/top-page/find`, {
//     method: "POST",
//     body: JSON.stringify({ firstCategory }),
//     headers: { "Content-Type": "application/json" },
//   });
//   return response.json();
// };

// Funcție pentru preluarea paginii
// const fetchPage = async (alias: string): Promise<TopPageModel> => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}api/top-page/byAlias/${alias}`, {
//     method: "GET",
//   });
//   return response.json();
// };

// Funcție pentru preluarea produselor
// const fetchProduct = async (category: string): Promise<ProductModel[]> => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}api/product/find`, {
//     method: "POST",
//     body: JSON.stringify({
//       category,
//       limit: 10,
//     }),
//     headers: { "Content-Type": "application/json" },
//   });
//   return response.json();
// };

// Componenta principală
interface PageProps {
  params: Promise<{
      type: string;
    }>;
}

// export async function generateStaticParams(){
//   const menu = await fetchMenu();
//   const menuItem = menu.flatMap(m => m.pages.map(i => i));
//   return menuItem.map(m => ({
//     type: m.alias,
//   }));
// }

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  const resolvedParams = await params;
  const { type } = resolvedParams;

  return (
    <div>
      <h1>{type}</h1>
    </div>
  );
}