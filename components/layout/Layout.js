import Link from "next/link";

export default function Layout({ children }) {
	return (
		<>
			<nav>
				<Link href={"/"}>
					<a>Home</a>
				</Link>
				{/* <Link href={"/admin"}>
					<a>Admin</a>
				</Link> */}
				<Link href={"/contact"}>
					<a>Contact us</a>
				</Link>
				<Link href={"/"}>
					<a>Posts</a>
				</Link>
				<Link href={"/login"}>
					<a>Login</a>
				</Link>
			</nav>
			<div className="container">{children}</div>
		</>
	);
}
