import Head from "next/head";

import Header from "../common/header";
import Footer from "../common/footer";

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
