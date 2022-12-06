import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {

	const handleSubmit = async (e) => {
		e.preventDefault();
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
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Contraseña"
							name="password"
							required
							className={styles.input}
						/>
						<Link to="/">
						<button className={styles.green_btn}>
							Iniciar sesion
						</button>
						</Link>
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
