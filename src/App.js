import React from 'react';
import PostList from './components/PostList'
import '../src/App.css';

function App() {
  return (
    <div className="App">
      <h1>Список постов</h1>
      <PostList />
    </div>
  );
}

export default App;