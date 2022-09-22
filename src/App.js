import { useState } from 'react'
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';


function App() {
	const [users, setUsers] = useState([
		{ id: 101, name: "Aram", surname: "Hakobyan", salary: 200000 },
		{ id: 102, name: "Lusine", surname: "Melqonyan", salary: 250000 },
		{ id: 103, name: "Narek", surname: "Harutunyan", salary: 175000 }
	]);

	const handleSalaryUp = (id) => {
		let person = users.find(elem => elem.id === id);
		if (person) {
			person.salary += 50000;
		} 
		setUsers([...users]);
	}

	const handleSalaryDown = (id) => {
		let person = users.find(elem => elem.id === id);
		if (person && person.salary >= 50000) {
			person.salary -= 50000;
		}
		setUsers([...users]);
	}



const handleDelete = (id) => {
	setUsers([...users.filter(elem => elem.id !== id)]);
}

return (
	<div className="App">
		<UserList
			users={users}
			onDelete={handleDelete}
			onSalaryUp={handleSalaryUp}
			onSalaryDown={handleSalaryDown}
		/>
		<AddUser />
	</div>
);
}

export default App;
