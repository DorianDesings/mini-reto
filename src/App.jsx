import { useState } from 'react';
import Age from './components/age/Age';
import City from './components/city/City';
import Job from './components/job/Job';
import Name from './components/name/Name';

const start = 'Hola ';

const App = () => {
	const [user, setUser] = useState({
		name: '',
		age: '',
		job: '',
		city: ''
	});
	return (
		<>
			<Name />
			<Age />
			<Job />
			<City />
			<p>{user.name}</p>
			<p>{user.age}</p>
			<p>{user.job}</p>
			<p>{user.city}</p>
		</>
	);
};

const printClick = (start, name, end) => {
	console.log(start + name + end);
};

export default App;

/* 

	APP--------------------------- función----------start, name, end
	ButtonContainer----------------función----------end
	Button-------------------------función
	button(HTML)-------------------función----------name

*/
