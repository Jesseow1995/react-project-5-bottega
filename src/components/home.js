import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./search_bar";
import RecentPosts from "./recent_posts";


import { connect } from 'react-redux';
import * as actions from "../actions";

class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push("/results");
    });
  }

  render() {
    return (
      <div className='home'>

        <Logo></Logo>
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}></SearchBar>
        <RecentPosts></RecentPosts>

      </div>
    );
  }
}


export default connect(null, actions)(Home);