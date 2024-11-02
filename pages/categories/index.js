import React from "react";
import CategoriesPage from "../../components/templates/CategoriesPage";

const Categories = () => {
  return (
    <div>
      <CategoriesPage />
    </div>
  );
};

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  const res = await fetch("httpl://localhost:4000/data");
  const data = await res.json();
   
    
}
