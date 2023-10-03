import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";
import CheckoutPage from "../pages/CheckoutPage";
import SuccessPage from "../pages/SuccessPage";

const Routes = () => {
	return (
		<BrowserRouter>
			<Layout>
				<RouterRoutes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="products"
						element={<ProductsPage />}
					/>
					<Route
						path="about"
						element={<AboutPage />}
					/>
					<Route
						path="contact"
						element={<ContactPage />}
					/>
					<Route
						path="checkout"
						element={<CheckoutPage />}
					/>
					<Route
						path="success"
						element={<SuccessPage />}
					/>
					<Route
						path="*"
						element={<ErrorPage />}
					/>
				</RouterRoutes>
			</Layout>
		</BrowserRouter>
	);
};

export default Routes;
