import SearchBox from '../components/searchBox/SearchBox';
import Cardlist from '../components/cardList/CardList';
import "./App.css";
import React from 'react';
import Footer from '../components/footer/Footer'
import ErrorHandler from './ErrorHandler';


class App extends React.Component{
  constructor(){
    super();
    this.state ={
      searchInput: '',
      robots :[],
      loading:false,
    }
  }


  componentDidMount(){
    this.setState({loading: true});
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (response => response.json())
    .then(json =>this.setState({robots:json, loading:false}))
    .catch((err) =>console.log(err))
  }

  updateSearchInput = (event) =>{
    this.setState({searchInput:event.target.value})
  }

  render(){
    const filteredRobots = this.state.robots.filter (item =>(
      
      item.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
   
    ));

    return (
      <div className="">
        <h1 style={{textAlign:'center'}}>ROBOT-FRIENDS (class base)</h1>
        
        <SearchBox updateSearchInput={this.updateSearchInput}/>

        {this.state.loading && <h1 style={{textAlign:"center"}}>Loading...</h1>}

        {!filteredRobots.length &&!this.state.loading && <h2 style={{textAlign:"center"}}>No Data Found!!!!</h2>}

        <ErrorHandler>
        
        <Cardlist clients ={filteredRobots} />
        
        </ErrorHandler>



        {/*  WHEN THERE IS ERROR IN THE CODE */}
        
        {/*         
        <ErrorHandler>

        <Cardlist clients ={"filteredRobots"} />
        
        </ErrorHandler> */}

      <Footer/>

      </div>
    );
  }
}

// hooks
// routing
// structure

export default App;