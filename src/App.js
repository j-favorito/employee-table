import React from 'react';
import Container from './components/container/Container';
import friends from './friends.json'


function App() {
  return (
    <>
    <Container friends={friends}/>
    </>
  );
}

export default App;
