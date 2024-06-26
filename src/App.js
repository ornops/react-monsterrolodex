import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

     this.state = {
      monsters:[],
      searchField: ''
     };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users)=> this.setState(()=>{
      return{monsters: users}
    }
    ));
  }

  onSearchChange = (event)=>{ 
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    
      this.setState(()=>{
        return {searchField};
      });
    };

  render(){
    console.log('render from App JS');
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters =this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
    <div className="App">
      <h1 className='app-title'>Monster's Academy</h1>
      <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='Search Monsters'/>
      <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}

export default App;

