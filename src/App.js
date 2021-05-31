import './App.css';
import PersonList from './PersonList';

function App() {
  const persons = [{
    id: 1,
    name: 'Stans',
    designation: 'SW Engineer',
    imgUrl: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
  }, {
    id: 2,
    name: 'Emmanuel',
    designation: 'Designer',
    imgUrl: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    description:'Lorem ipsum som soca del anei'
  }, {
    id: 3,
    name: 'Peter',
    designation: 'DevOps',
    imgUrl: 'https://randomuser.me/api/portraits/thumb/men/22.jpg'
  }

  ]
  return (
    <div className="App">
      <header className="App-header">
        <PersonList persons={persons} />

      </header>
    </div>
  );
}

export default App;
