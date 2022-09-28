import { useState } from "react";

const AddUser = (props) => {
	const [form, setForm] = useState({ name: "", surname: "", salary: 80000 });
	const [error, setError] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		
		if (!form.name || !form.surname || !form.salary) {

			setError("Please correctoy fill all the fields");
			
		} else {

			props.onAdd(form);
			setError("");
			setForm({ name: "", surname: "", salaey: 80000 });

		}
	}

	return (
		<div>
			<h3>Add User</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<p style={{ color: "red" }}>{ error }</p>
				</div>
				<div>
					<label htmlFor="name">name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={form.name}
						onChange={(e) => {
							setForm({ ...form, name: e.target.value });
						}}
					/>
				</div>
				<div>
					<label htmlFor="surname">surname</label>
					<input
						type="text"
						id="surname"
						name="surname"
						value={form.surname}
						onChange={(e) => {
							setForm({ ...form, surname: e.target.value });
						}}
					/>
				</div>
				<div>
					<label htmlFor="number">number</label>
					<input
						type="number"
						id="number"
						name="salary"
						step="10000"
						value={form.salary}
						onChange={(e) => {
							setForm({ ...form, salary: e.target.value });
						}}
					/>
				</div>
				<button>save</button>
			</form>
		</div>
	);
};

export default AddUser;