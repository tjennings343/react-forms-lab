import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleTweet = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.tweet.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleTweet} value={this.state.tweet} />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
