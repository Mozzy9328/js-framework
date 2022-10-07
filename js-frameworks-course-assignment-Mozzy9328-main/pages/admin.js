import Heading from "../components/Heading";
import Layout from "../components/layout/Layout";
import Head from "next/head";
export default function admin() {
	return (
		<>
			<Layout>
				<Head></Head>
				<Heading title="Admin Page" />
			</Layout>
		</>
	);
}
