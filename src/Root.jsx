import React from 'react';
import ReactDOM from 'react-dom';
import youtube from './loaders/youtube';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'https://www.youtube.com/watch?v=iYYRH4apXDo'
    };

    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleURLChange(e) {
    this.setState({
      url: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('asdf');
  }

  render() {
    return (
      <div>
        <h1>Radio</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">URL</label>
          <input type="text" id="url"
            onChange={this.handleURLChange}
            value={this.state.url}
          />
          <input type="submit" value="view" />
        </form>
      </div>
    );
  }
}

export default Root;