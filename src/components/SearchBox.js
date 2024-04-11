import "./SearchBox.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

                    // use deconstructing to get the searchField and searchChange from the props (expect an object)
const SearchBox = ({searchField, searchChange}) => {
// const SearchBox = (searchField, searchChange) => {} // expects two arguments (not object): searchField and searchChange. These are not related to the properties of an object and will simply take the values of the arguments passed in.
    return (
        // <div className="pa2">
        //     <input className="pa3 ba b--black bg-lightest-blue"
        //     type="search" 
        //     placeholder="Enter name"/>
        // </div>
        <div className="search-box">
            <input className="search-input" 
            type="text" 
            placeholder="Search name..."
            onChange={searchChange}/> 
            {/* onChange event listener will call searchChange() to capture the value of the input field --> Link to parent App.js and call onSearchChange() */}
            <button className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
        // capture the value of input field and pass it to the onSearchChange method


        

    );
};

export default SearchBox;