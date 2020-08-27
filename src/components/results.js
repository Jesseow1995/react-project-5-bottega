import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./search_bar";


export default class Results extends Component {

    handleSearchBarSubmit(query) {
        console.log(query)
    }


    render() {
        return (
            <div>

                <Logo size={55}></Logo>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}></SearchBar>
            </div>
        )
    }
}