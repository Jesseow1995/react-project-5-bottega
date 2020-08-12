import React, { Component } from 'react';

export default class RecentPosts extends Component {
    render() {
        return (
            <div className="recent_posts">
                <div className="recent_posts_wrapper">
                    <div className="recent_posts_heading">
                        <ul className="recent_posts_psots">
                            <li>post 1</li>
                            <li>post 2</li>
                            <li>post 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}