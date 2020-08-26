import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions/fetchRecentPosts';

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();

    }

    renderPosts = function () {
        const posts = this.props.recentPosts.map((post, index) => {
            if (index < 3) {
                return (
                    <li key={index}>
                        {post.title}
                    </li>
                )
            }
        })
        return posts
    }

    render() {
        return (
            <div className="recent_posts">
                <div className="recent_posts_wrapper">
                    <div className="recent_posts_heading">
                        <ul className="recent_posts_psots">
                            {this.renderPosts()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        recentPosts: state.posts.recentPosts
    }
}

export default connect(mapStateToProps, actions)(RecentPosts);
