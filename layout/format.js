import Head from "next/head";

import Header from "../components/common/header";
import Footer from "../components/common/footer";

export default function Format({ children }) {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
