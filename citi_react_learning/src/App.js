import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((json) => this.setState({ posts: json }));
  }

  render() {
    const { posts } = this.state;

    return (
      // <div className="app">
      <div className="app ">
        {/* <div className="App container"> */}
        <div class="jumbotron">
          <h1 class="display-4">Blog posts</h1>
        </div>
        <div className="app row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {posts.map((post) => (
            <div className="card" key={post.userId}>
              <div className="card-header bg-primary">
                #{post.id} {post.title}
              </div>
              <div className="card-body text-black ">
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
