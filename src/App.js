import React, {Component} from "react";
import ArticleList from "./components/ArticleList";
import CardList from "./components/CardList/CardList";
import {robots} from "./data/robots";
import Timer from "./components/Timer";


class App extends Component{
  render() {
    let SerhiiArticles = [
      { id: 1, completed: false, title: "Купити хліб", description: "1 Dscsc dscdsc dscsdc trhtr asd ejd" },
      { id: 2, completed: false, title: "Купити молоко", description: "2 hm dscdsc dscsdc trhtr asd ejd" },
      { id: 3, completed: false, title: "Купити масло", description: "3 ffv dscdsc dscsdc trhtr asd ejd" },
      { id: 4, completed: false, title: "Купити цукерки", description: "4 truyim gfhh dscsdc trhtr asd ejd" },
    ];
    const title = 'My components!'
      const openModal = false;
    return(
        <div>
            <h2>{title}</h2>
            <ArticleList showModal={openModal} articles={SerhiiArticles}/>
            <h2>Robo Friends</h2>
            <CardList robots={robots}/>
            <h2>Timer</h2>
            <Timer></Timer>
        </div>
    );
  }
}

export default App;


// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
