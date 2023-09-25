import React from "react";
import { CategoriesContainerStyled } from "./CategoriesStyles";
import Category from "./Category";
import { useSelector } from "react-redux";

const Categories = () => {
	const { categories } = useSelector((state) => state.categories);
	return (
		<CategoriesContainerStyled>
			{categories?.map((category) => {
				return (
					<Category
						key={category.id}
						{...category}
					/>
				);
			})}
		</CategoriesContainerStyled>
	);
};

export default Categories;
