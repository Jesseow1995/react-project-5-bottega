import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./search_bar";
import ResultsPosts from "./resultsPost";

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query);
    }


    render() {
        return (
            <div>
                <Logo size={55}></Logo>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}></SearchBar>
                <ResultsPosts></ResultsPosts>
            </div>
        )
    }
}

export default connect(null, actions)(Results);