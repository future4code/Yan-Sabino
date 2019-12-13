import React from 'react';
import CreatePlaylist from './components/CreatePlaylist/index'
import PlayListsList from './components/PlayListsList/index'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
  return (
    <div>
      <CreatePlaylist/>
      <PlayListsList/>
    </div>
  );
  }
}

export default App;
