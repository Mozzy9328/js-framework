import Layout from "../components/layout/Layout";
import Heading from "../components/Heading";
import axios from "axios";
import { BASE_URL } from "./api/country";
import { DateTime } from "luxon";
import Footer from "../components/Footer";

export default function Home(props) {
	console.log(props.posts);

	return (
		<Layout>
			<Heading title="Home"></Heading>

			{props.posts.map((posts) => {
				return (
					<>
						<div className="box">
							<a key={posts.id} href={`detail/${posts.id}`}>
								<h2>{posts.title.rendered}</h2>
							</a>
							<p>
								Date:{" "}
								{DateTime.fromISO(`${posts.date}`).toFormat(`dd LLL yyyy`)}
							</p>
							<div
								dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }}
							/>
						</div>
					</>
				);
			})}
			<Footer />
		</Layout>
	);
}

export async function getStaticProps() {
	let posts = [];
	const response = await axios.get(BASE_URL);
	console.log(response);

	posts = response.data;

	return {
		props: {
			posts: posts,
		},
	};
}
