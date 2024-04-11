import React, {Component} from "react";
import CardList from '../components/CardList';
// import {robots} from './robots'; // destructuring the robots array from robots.js because it's the default export
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';


class App extends Component {
    //! Constructor
    constructor(){  // State of the parent component will be pass to the child component as props
        super();
        //? class properties
        this.state = {
            robots: [], // empty array to store the robots
            searchField: ''
        }
    }

    //! Method
    /*
    onSearchChange(event) {
        console.log(event.target.value); // capture the value of the input field
        // update the state of the searchField
        const filteredCats = this.state.robots.filter(robot=>{ // THIS does not refer to the App component but the onSearchChange method
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()); // loop through the robots array and return the robot whose name includes the searchField
        })
    }
    */

    //* use Arrow function so that THIS is referring to the App component
    onSearchChange = (event) => {
        // change state of searchField
        this.setState({searchField: event.target.value});


        // console.log(filteredCats); 
    }

    //! ComponentDidMount
    componentDidMount(){ // lifecycle method therefore it doesn't need to be called. It will run automatically when the component is rendered
        fetch('https://jsonplaceholder.typicode.com/users') // fetch the users from the API
        .then(response => response.json()) // convert the response to json
        .then(users => this.setState({robots: users})); // update the state of the robots array with the users
        
    }


    //! Render component
    render(){

        // update the state of the searchField
        const filteredCats = this.state.robots.filter(robot=>{ 
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()); // loop through the robots array and return the robot whose name includes the searchField
        })

        // if the robots array is empty
        if (this.state.robots.length === 0){
            return <h1 style={{color:'white'}}>Loading...</h1>
        }else{
            return (
                <div className="tc">
                    <h1 className="title">Furline Friends</h1>
                    <SearchBox searchChange ={this.onSearchChange}/>

                    {/* This is a wrapper component that will wrap the CardList component */}
                    <Scroll> 
                        <ErrorBoundary>
                            <CardList robots={filteredCats} />
                        </ErrorBoundary>
                    </Scroll>
                    
                </div>
                );
        }
    }
}

export default App;