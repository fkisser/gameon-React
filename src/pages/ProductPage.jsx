import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	AboutContainerStyled,
	AboutContentStyled,
} from "../components/About/AboutStyles";
import ImgContainer from "../components/About/ImgContainer";
import { TxtContainerStyled } from "../components/Products/ProductsStyles";
import Button from "../components/UI/Button/Button";
import { BiArrowBack } from "react-icons/bi";

const ProductPage = () => {
	const { id } = useParams();
	const { products } = useSelector((state) => state.products);
	const { title, desc, price, url } = products.find((elem) => elem.id == id);
	return (
		<AboutContainerStyled>
			<AboutContentStyled
				style={{
					position: "relative",
				}}>
				<Link
					to={"/products"}
					style={{
						position: "absolute",
						top: "2.5rem",
						scale: "1.5",
					}}>
					<Button>
						<BiArrowBack />
					</Button>
				</Link>
				<TxtContainerStyled>
					<h2>{title}</h2>
					<p>{desc}</p>
					<h3>${price}</h3>
				</TxtContainerStyled>
				<ImgContainer>
					<img
						src={url}
						alt="imagen del producto"
						style={{
							objectFit: "scale-down",
							backgroundColor: "white",
							objectPosition: "center",
						}}
					/>
				</ImgContainer>
			</AboutContentStyled>
		</AboutContainerStyled>
	);
};

export default ProductPage;
