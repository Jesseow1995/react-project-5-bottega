import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./search_bar";


export default class Results extends Component {
    render() {
        return (
            <div>

                <Logo size={55}></Logo>
                <SearchBar></SearchBar>
            </div>
        )
    }
}