import React from "react";
import Category from "./Category";
import Search from "./Search";
import Table from "./Table";


class App extends React.Component {

  state={

    noofMovies : 9,
    searchStr :"",
    currGenre : "All Genre",
  };

  searchParam = (str) =>{

    this.setState({searchStr : str});
  }

  selectGenre = (genre) => {

    this.setState({currGenre : genre});
  }

  setMovies = (n) => {

    this.setState({noofMovies:n});
  }

  render(){
  return (

    <React.Fragment>
      {/* <Navbar/> */}

      <div className = "row">

        <div className = "col-2 p-4">
          <Category selectGenre = {this.selectGenre}/>
        </div>

        <div className = "col-10 p-4">
          
          <div className="row">

            <div className="col-3">
            <Search searchParam={this.searchParam} noofMovies={this.state.noofMovies}/>
            </div>

          </div>

          <div className="row mt-4">
            <div className="col-8">
              <Table searchStr = {this.state.searchStr} currGenre = {this.state.currGenre} setMovies = {this.setMovies}/>
            </div>
          </div>

        </div>


      </div>

    </React.Fragment>
  );
  }
}

export default App;
