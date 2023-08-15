import React from 'react'
import MainContainer from './components/mainView/MainContainer.js'
import Header from './components/headerContainer/Header.js'

import Card from './components/mainView/Card.js'

function App() {
  return (
<div>
    <Header/>
    <MainContainer>
      <Card></Card>
     </MainContainer>
    </div>
  );
}

export default App;
