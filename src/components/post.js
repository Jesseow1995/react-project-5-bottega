import React, { Component } from 'react';

class Post extends Component {

    renderTopics() {
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className="post-topic" key={index}>
                {topic}
            </span>
        })
        return topics
    }

    renderLinks() {
        let links = this.props.post_links.map((post_link, id) => {
            return (
                <div className='post_links' key={id}>
                    <div className="post_link_box">

                    </div>
                    <div className="post_link_link">
                        <a href={post_link.link_url}>Useful Link #{id + 1}</a>
                    </div>
                </div>
            )
        })
        return links;
    }

    render() {
        if (this.props.type == "recent") {
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
        } else if (this.props.type == 'result') {
            return (
                <li className="results-post">
                    <div className="result_post_associated_topics">
                        {this.renderTopics()}
                    </div>
                    <div className="result_post_title">
                        {this.props.title}
                    </div>
                    <div className="result_post_link">
                        {this.renderLinks()}
                    </div>
                </li>
            )
        }




    }
}

export default Post