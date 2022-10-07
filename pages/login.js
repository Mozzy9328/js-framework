import Layout from "../components/layout/Layout";
import Head from "next/dist/shared/lib/head";
import Heading from "../components/Heading";
import LoginForm from "../components/loginform/LoginForm";

export default function login() {
	return (
		<Layout>
			<Head></Head>
			<Heading title="Login Page"></Heading>
			<LoginForm />
		</Layout>
	);
}
