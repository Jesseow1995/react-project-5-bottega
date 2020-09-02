import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 0
        }
    }

    renderTopics() {
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className="post_topic" key={index}>
                {topic}
            </span>
        })
        return topics
    }

    getPostLinkName(str) {
        var n = str.lastIndexOf('/');
        var link = str.substring(n + 1, str.length)


        if ((n + 1) == str.length) {
            link = str.slice(0, n);
            n = link.lastIndexOf('/');
            link = str.substring(n + 1, str.length - 1);
        }

        if (link.includes('.html')) {
            link = link.substring(0, link.length - 5);
        }

        if (link.includes('.htm')) {
            link = link.substring(0, link.length - 4);
        }
        return link;


    }
    renderLinks() {
        let links = this.props.post_links.map((post_link, id) => {
            return (
                <div className='post_link' key={id}>
                    <div className="post_link_box">

                    </div>

                    <div className="post_link_link">
                        <a href={post_link.link_url}>{this.getPostLinkName(post_link.link_url)}</a>
                    </div>
                </div>
            )
        })
        if (links == 0) {
            return <div className="no-content">No Post Links</div>
        }
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
                <li className="result_post"
                    onMouseEnter={() => this.setState({ height: 70 })}
                    onMouseLeave={() => this.setState({ height: 0 })}
                >
                    <div className="result_post_associated_topics">
                        {this.renderTopics()}
                    </div>
                    <div className="result_post_title">
                        <a href={this.props.url_for_post}>
                            {this.props.title}
                        </a>
                    </div>
                    <AnimateHeight
                        duration={500}
                        height={this.state.height}
                    >
                        <div className="result_post_link">
                            {this.renderLinks()}
                        </div>

                    </AnimateHeight>

                </li>
            )
        }




    }
}

export default Post