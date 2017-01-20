import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className='topBar'>
          <h3>FreeCodeCamp</h3>
        </div>
        <br /><br />
        <div className='title'>{this.props.name}</div>
        <BoardContentComponent />
        <TopCurrentUserList />
      </div>
      );
  }
}

// // Main component - Application entry level
// var LeaderBoardComponent = React.createClass ({
//   render: function () {
//     return (
//       <div>
//         <div className='topBar'>
//           <h3>FreeCodeCamp</h3>
//         </div>
//         <br /><br />
//         <div className='title'>{this.props.name}</div>
//         <BoardContentComponent />
//         <TopCurrentUserList />
//       </div>
//       );
//   }
// });

//Board content component
var BoardContentComponent = React.createClass ({
  render: function (){
    return (
      <h2>Content goes here </h2>
    );
}
});

var TopCurrentUserList = React.createClass ({

  componentDidMount () {
    this.TopUserList();
  },

  TopUserList() {
    return $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((data) => {
      this.setState({ user: data });
    });
  },

  render: function () {
    console.log(this.state);
    return <div>{this.state}</div>
    //
    //   var users = this.state.user.map ((item, i) => {
    //   return <div>
    //     <h1>{item.state}</h1>
    //     </div>
    // });
  }
});

export default App;
