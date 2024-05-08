import "./App.css";
import HeaderBlog from "./component/layout/HeaderBlog";
import Home from "./component/pages/Home";
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
      <HeaderBlog />
      <Home />

      {/* <Header company={companyName} />
      <h1
        style={{
          color: "green",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        {" "}
        Welcome to react {companyName}
      </h1>
      <Posts />
      <p style={mystyle}>good moning</p>mj
      <img src={Photo} alt="" />
      <Counter /> */}
    </div>
  );
}

export default App;
