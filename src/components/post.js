import React, { Component } from 'react';

class Post extends Component {

    renderTopics() {
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className="post-topic" key="index">
                {topic}
            </span>
        })
        return topics
    }

    render() {
        return (

            <li className="recent_post">
                <div className="recent_post_title">
                    {this.props.title}
                </div>
                <div className="recent_post_topics">
                    {this.renderTopics()}
                </div>
            </li>



        )
    }
}

export default Post