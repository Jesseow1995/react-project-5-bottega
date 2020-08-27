import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./search_bar";
import RecentPosts from "./recent_posts";

export default class Home extends Component {

  handleSearchBarSubmit(query) {
    console.log("handle submit for query", query)
    this.props.history.push("/results");
  }

  render() {
    return (
      <div className='app'>
        <div>
          <Logo></Logo>
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}></SearchBar>
          <RecentPosts></RecentPosts>
        </div>
      </div>
    );
  }
}
