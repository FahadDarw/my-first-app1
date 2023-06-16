import logo from './logo.svg'
import './App.css'
import ListHeader from './ListHeader/ListHeader'
import Header from './Components/Header/Header'
import Status from './Components/Status/Status'
import OrderedList from './Components/Lists/OrderedList'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from './Components/Navbar/Navbar'
import Card from './Components/Card/Card'
import RegistrationForm  from './Components/Form/RegistrationForm.js'

function App() {
	const devSkillsList = [
		{
			task: 'HTML',
			id: 1,
			score: '6',
			priority: 'High',
		},
		{
			task: 'CSS',
			id: 2,
			score: '2',
			priority: 'High',
		},
		{
			task: 'JavaScript',
			id: 3,
			score: '3',
			priority: 'High',
		},
		{
			task: 'Debugging',
			id: 5,
			score: '4',
			priority: 'High',
		},
	]
	const toDoList = [
		{
			task: 'Creating skelton app',
			id: 1,
			status: 'Done',
		},
		{
			task: 'Learn the Architecture',
			id: 2,
			status: 'Done',
		},
		{
			task: 'Create first components',
			id: 3,
			status: 'Semi Done',
		},
		{
			task: 'Props',
			id: 4,
			status: '',
		},
		{
			task: 'Class components vs functional components',
			id: 5,
			status: '',
		},
		{
			task: 'State',
			id: 6,
			status: '',
		},
		{
			task: 'CSS',
			id: 7,
			status: '',
		},
		{
			task: 'HTML',
			id: 8,
			status: '',
		},
		{
			task: 'INTERPOLATION',
			id: 9,
			status: '',
		},
		{
			task: 'Debugging and error messages',
			id: 10,
			status: '',
		},
	]

	const players = [
		{
			url: 'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https://thetopflight.com/wp-content/uploads/getty-images/2017/07/168612384.jpeg',
			name: 'Sir Alex Ferguson',
		},
		{
			url: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6e56ef591aeb2ed0/63a384d668cc6b5ae4b7e56c/eriksen-close.jpg',
			name: 'Eriksen Close',
		},
		{
			url: 'https://manchesterunitedlatestnews.com/wp-content/uploads/2019/12/Top-5-best-Manchester-United-players-of-decade-2010-2019-6.jpg',
			name: 'Zlatan',
		},
	]

	return (
		<div className="App">
			<Container fluid>
				<Row>
					<Col>
						<Navbar />

					</Col>
				</Row>
			</Container>

			<Header />
			<RegistrationForm />

			<Row>
			{players.map((player,index) => (
				<Col index={index}>
				<Card player={player}  />
				</Col>
			))}
			</Row>

			

			<Status devSkillsList={devSkillsList} toDoList={toDoList} />
			<OrderedList devSkillsList={devSkillsList} toDoList={toDoList} />

			<div>
				<h1>footer</h1>
			</div>
		</div>
	)
}

export default App
