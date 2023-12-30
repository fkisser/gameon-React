import React, { useEffect } from "react";
import { CategoriesContainerStyled } from "./CategoriesStyles";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import MiniLoader from "../UI/Loaders/MiniLoader";
import { getAllCategories } from "../../axios/categories";

const Categories = () => {
	const { categories, isLoading, error } = useSelector(
		(state) => state.categories
	);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!categories.length) {
			getAllCategories(dispatch);
		}
	}, [dispatch, isLoading, error]);
	const categoriesToRender = categories
		?.map((category) => category)
		.sort((a, b) => ("" + a.code).localeCompare(b.code));
	return (
		<CategoriesContainerStyled>
			{isLoading && <MiniLoader />}
			{categoriesToRender?.map((category) => {
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
