import { useDispatch, useSelector } from "react-redux";
import { CategoryCardStyled } from "./CategoriesStyles";
import { setSelectedCategory } from "../../redux/categories/categoriesSlice";
//un switch para los iconitos??
const Category = ({ id, title, code }) => {
	const { selectedCategory } = useSelector((state) => state.categories);

	const dispatch = useDispatch();
	return (
		<CategoryCardStyled
			selected={code === selectedCategory}
			onClick={() => {
				dispatch(setSelectedCategory(code));
			}}
			whileHover={{ scale: 1.05 }}>
			<h4>{title}</h4>
		</CategoryCardStyled>
	);
};

export default Category;
