import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";
import CheckoutPage from "../pages/CheckoutPage";
import SuccessPage from "../pages/SuccessPage";
import ProductPage from "../pages/ProductPage";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Routes = () => {
	return (
		<BrowserRouter>
			<Layout>
				<RouterRoutes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route path="products">
						<Route
							index
							element={<ProductsPage />}
						/>
						<Route
							path=":id"
							element={<ProductPage />}
						/>
					</Route>
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
						element={
							<ProtectedRoute redirectTo={"/login"}>
								<CheckoutPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="success"
						element={
							<ProtectedRoute redirectTo={"/login"}>
								<SuccessPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="user"
						element={
							<ProtectedRoute redirectTo={"/login"}>
								<UserPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="login"
						element={<LoginPage />}
					/>
					<Route
						path="register"
						element={<RegisterPage />}
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
