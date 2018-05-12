import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './App.css';

//components
import BookList from './components/BookList'

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
class App extends Component {
  render() {
    return (
      <ApolloClient client={client}>
        <div className='App'>
          <h1>Reading List App<h1>
          <BookList />
        </div>
      </ApolloClient>
    );
  }
}

export default App;
