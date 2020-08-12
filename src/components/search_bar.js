import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form className="search_bar">
                <input placeholder="Search Daily Smarty"></input>
            </form>
        )
    }
}