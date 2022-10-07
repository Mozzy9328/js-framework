// import useLocalStorage from "../../hooks/useLocalStorage";
import axios from "axios";
// import { BASE_URL } from "../../pages/api/country";
import { TOKEN_PATH } from "../../pages/api/tokenpath";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { REGULAR_API } from "../../pages/api/regularapi";
import AuthContext from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

useRouter;
const url = REGULAR_API + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Please enter valid username"),
	password: yup.string().required("Please enter a valid password"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);
	const [loginSuccess, setLoginSuccess] = useState(null);

	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);
		setLoginSuccess(null);

		console.log(data);

		try {
			const response = await axios.post(url, data);
			setLoginSuccess("Successful Login");
			alert("Succesful logging");

			setAuth(response.data);

			router.push("/admin");
			console.log("response", response.data);
		} catch (error) {
			console.log("error", error);
			setLoginError("Wrong credentials, try again");
		} finally {
			setSubmitting(false);
		}
	}

	const [, setAuth] = useContext(AuthContext);

	return (
		<>
			<form className="login" onSubmit={handleSubmit(onSubmit)}>
				{loginError && <p className="error">{loginError}</p>}
				{loginSuccess && <p className="success">{loginSuccess}</p>}

				<fieldset disabled={submitting}>
					<label htmlFor="username">
						Username
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Username"
							{...register("username", { required: true })}
						/>
						{errors.username && <p>{errors.username.message}</p>}
					</label>
					<label>
						Password
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							{...register("password", { required: true })}
						></input>
						{errors.password && <p>{errors.password.message}</p>}
					</label>
					<button type="submit">{submitting ? "Loggin in..." : "Login"}</button>
				</fieldset>
			</form>
		</>
	);
}
