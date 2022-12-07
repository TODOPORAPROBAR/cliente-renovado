import {useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import styles from "./styles.module.css";

const Login = () => {

	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/api/auth";
			const {data: res} = await axios.post(url, data)
			window.location = "/"
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Iniciar sesion</h1>
						<input
							type="email"
							placeholder="Correo"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Contraseña"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button className={styles.green_btn}>
							Iniciar sesion
						</button>
						
					</form>
				</div>
				<div className={styles.right}>
					<h1>¿No tienes cuenta?</h1>
					<Link to="/registro">
						<button type="button" className={styles.white_btn}>
							Registrarse
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
