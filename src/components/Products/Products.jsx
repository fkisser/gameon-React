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

const Products = ({ starred }) => {
	const [productsToRender, setProductsToRender] = useState([]);
	const { products, orderBy, ascendent } = useSelector(
		(state) => state.products
	);
	const { selectedCategory } = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(orderProducts([orderBy, ascendent]));
		const filteredProducts = products.filter((product) => {
			return selectedCategory ? product.category === selectedCategory : product;
		});
		setProductsToRender(filteredProducts);
	}, [orderBy, ascendent, selectedCategory]);

	{
		return starred ? (
			<ProductsSectionStyled>
				<h2>Productos destacados</h2>
				<ProductsContainerStyled>
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
