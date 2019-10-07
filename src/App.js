import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      snacks: [],
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/snacks')
      const snacks = await response.json();
      this.setState({ snacks: snacks.snacks })
    } catch(error) {
      this.setState({ error: 'There was an error fetching your data' })
    }
  }

  render() {
    const { snacks, error } = this.state
    let snacksList = snacks.map((snack, index) => {
      return <div key={index}>
        <p>{snack.name}</p>
        <p>{snack.type}</p>
      </div>
    })
    console.log('snacks', this.state.snacks)
    console.log('error', this.state.erro)
    return (
      <main>
        {snacksList}
      </main>
    );
  }
}

export default App;
