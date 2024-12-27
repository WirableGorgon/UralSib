import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.css";
import { PostList } from "./components/PostList/PostList";
import { PostPage } from "./components/PostPage/PostPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";

export function App() {
	return (
		<BrowserRouter>
			<div className="header">Header</div>

			<div className="section">
				<main className="content">
					<QueryClientProvider client={queryClient}>
						<Routes>
							<Route path="/" element={<PostList />} />
							<Route path="/post/:id" element={<PostPage />} />
						</Routes>
					</QueryClientProvider>
				</main>
			</div>

			<div className="footer">Footer</div>
		</BrowserRouter>
	);
}
