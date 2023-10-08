import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	AboutContainerStyled,
	AboutContentStyled,
} from "../components/About/AboutStyles";
import ImgContainer from "../components/About/ImgContainer";
import { TxtContainerStyled } from "../components/Products/ProductsStyles";

const ProductPage = () => {
	const { id } = useParams();
	const { products } = useSelector((state) => state.products);
	const { title, description, price, url } = products.find(
		(elem) => elem.id == id
	);
	return (
		<AboutContainerStyled>
			<AboutContentStyled>
				<ImgContainer>
					<img
						src={url}
						alt="nosotros"
					/>
				</ImgContainer>
				<TxtContainerStyled>
					<h2>{title}</h2>
					<p>{description}</p>
					<h3>${price}</h3>
				</TxtContainerStyled>
			</AboutContentStyled>
		</AboutContainerStyled>
	);
};

export default ProductPage;
