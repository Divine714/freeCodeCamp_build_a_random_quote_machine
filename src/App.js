import React, { Component } from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: Math.floor(Math.random() * 3),
    };
    this.ask = this.ask.bind(this);
  }
  ask() {
    this.setState({
      randomIndex: Math.floor(Math.random() * 3),
    });
  }
  render() {
    const quoteArr = [
      { quote: "wow", author: "Me" },
      { quote: "yay", author: "You" },
      { quote: "woah", author: "Him" },
    ];
    const randomQuote = quoteArr[this.state.randomIndex].quote;
    const randomAuthor = quoteArr[this.state.randomIndex].author;
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div>
            <span id="text">"{randomQuote}"</span>
          </div>
          <div>
            <span id="author">By: {randomAuthor}</span>
            <button id="new-quote" onClick={this.ask} class="btn btn-primary">
              Get Quote
            </button>
          </div>
          <div>
            <a
              id="tweet-quote"
              class="button"
              target="_blank"
              href="https://twitter.com/intent/tweet?text="
            >
              <i class="bi bi-twitter"></i>Tweet this Quote!
            </a>
            <a class="button" target="_blank" href="">
              <i class="bi bi-facebook"></i>Share on Facebook!
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
