import "./App.css";
import HeaderBlog from "./component/layout/HeaderBlog";
import Home from "./component/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OurRouter from "./route";

// import Photo from "./logo192.png";
// import Header from "./component/Header";
// import Posts from "./component/Posts";
// import Counter from "./component/Counter";

function App() {
  let mystyle = {
    color: "red",
    backgroundColor: "blue",
    textAlign: "center",
  };
  let namee = "melodia coding ";
  let companyName = "Melodia Technology";
  return (
    <div className="App">
      <Router>
        <Route component={HeaderBlog} />
        <Route component={OurRouter} />
      </Router>
    </div>
  );
}

export default App;
