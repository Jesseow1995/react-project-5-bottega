import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./search_bar";
import RecentPosts from "./recent_posts";

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo></Logo>
          <SearchBar></SearchBar>
          <RecentPosts></RecentPosts>
        </div>
      </div>
    );
  }
}
