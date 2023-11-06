import React from 'react';
import Header from './Header';
import Lessons from './Lessons';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Lessons />
      </main>
      <Footer />
    </div>
  );
}

export default App;