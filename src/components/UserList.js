const UserList = ({users, onDelete, onSalaryUp, onSalaryDown}) => {
	return (
		<div>
			<h3>User List</h3>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>surname</th>
						<th>salary</th>
						<th>actons</th>
					</tr>
				</thead>
				<tbody>
					{
						users.map(elem => {
							const css = elem.salary >= 300000 ? "high" : null;
							return (
								<tr key={elem.id} className={css}>
									<td>{elem.id}</td>
									<td>{elem.name}</td>
									<td>{elem.surname}</td>
									<td>{elem.salary}</td>
									<td>
										<button onClick={() => onSalaryUp(elem.id)}>salary up</button>
										<button onClick={() => onSalaryDown(elem.id)}>salary down</button>
										<button onClick={() => onDelete(elem.id)}>delete</button>
									</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</div>
	);
};

export default UserList;