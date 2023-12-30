import Categories from "./Categories";
import Product from "./Product";
import {
	ProductsContainerStyled,
	ProductsSectionStyled,
} from "./ProductsStyles";
import { CategoriesWrapperStyled } from "./CategoriesStyles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { orderProducts } from "../../redux/products/productsSlice";
import BigLoader from "../UI/Loaders/BigLoader";
import { getAllProducts } from "../../axios/products";

const Products = ({ starred }) => {
	const { products, orderBy, ascendent, isLoading, error } = useSelector(
		(state) => state.products
	);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!products.length) {
			getAllProducts(dispatch);
		}
	}, [dispatch, isLoading, error]);
	const [productsToRender, setProductsToRender] = useState([]);
	const { selectedCategory } = useSelector((state) => state.categories);
	useEffect(() => {
		dispatch(orderProducts([orderBy, ascendent]));
		const filteredProducts = products.filter((product) => {
			return selectedCategory ? product.category === selectedCategory : product;
		});
		setProductsToRender(filteredProducts);
	}, [orderBy, ascendent, selectedCategory, isLoading]);

	{
		return starred ? (
			<ProductsSectionStyled>
				<h2>Productos destacados</h2>
				<ProductsContainerStyled>
					{isLoading && (
						<div>
							<BigLoader />
						</div>
					)}
					{productsToRender?.map((product) => {
						return (
							product.starred && (
								<Product
									key={product.id}
									{...product}
								/>
							)
						);
					})}
				</ProductsContainerStyled>
			</ProductsSectionStyled>
		) : (
			<ProductsSectionStyled>
				<h2>Productos</h2>
				<CategoriesWrapperStyled>
					<h3>Categorías</h3>
					<Categories />
				</CategoriesWrapperStyled>
				<ProductsContainerStyled>
					{isLoading && (
						<div style={{ margin: "20vh 0" }}>
							<BigLoader />
						</div>
					)}
					{productsToRender?.map((product) => {
						return (
							<Product
								key={product.id}
								{...product}
							/>
						);
					})}
				</ProductsContainerStyled>
			</ProductsSectionStyled>
		);
	}
};

export default Products;
