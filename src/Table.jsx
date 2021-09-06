import React from "react";

class Table extends React.Component {

    state = {

        allMovies: [],
        currPage: 1,
        noOfMovies : 0,
    }

    componentDidMount() {

        fetch("/movies").then(function (res) {

            return res.json()
        }).then((json) => {
            
            this.setState({allMovies:json});
        });

        //this.props.setMovies(this.state.noOfMovies);
    }


    render() {

        let moviesToShow = [];

        if(this.props.currGenre != "All Genre") {

            moviesToShow = this.state.allMovies.filter((el) => {
                return el.genre.name == this.props.currGenre;
            })
        }
        else {

            moviesToShow = this.state.allMovies;
        }
        if(this.props.searchStr) {
            

            let str = this.props.searchStr.toLowerCase();

            moviesToShow = moviesToShow.filter((el) => {

                return el.title.toLowerCase().includes(str);
            })

        }
        

        let No_of_Pages = Math.ceil(moviesToShow.length / 5);

        let arr = [];
        for(let i=1;i<=No_of_Pages;i++)
            arr.push(i);

        let stindex = (this.state.currPage-1)*5;
        let enindex = this.state.currPage*5 - 1;
        moviesToShow = moviesToShow.slice(stindex , Math.min(enindex , moviesToShow.length-1) + 1);

        //this.setState({noOfMovies:moviesToShow.length});

        return (

            <React.Fragment>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        moviesToShow.map((el) => {

                            return (

                                <tr key={el._id}>
                                    <th>{el.title}</th>
                                    <td>{el.genre.name}</td>
                                    <td>{el.numberInStock}</td>
                                    <td>{el.dailyRentalRate}</td>
                                    <td onClick={
                                        ()=>{

                                            let allMovies = this.state.allMovies;

                                            let index = allMovies.findIndex((e)=>
                                                e._id == el._id
                                            );

                                            if(allMovies[index].liked)
                                                allMovies[index].liked = false;
                                            else
                                                allMovies[index].liked = true;

                                            this.setState({allMovies:allMovies});
                                        }
                                    }>{el.liked ? "Liked" : "Like"}</td>

                                    <td>
                                        <button type="button" class="btn btn-danger" onClick={

                                            ()=>{

                                                let allMovies = this.state.allMovies;

                                                allMovies = allMovies.filter((e)=>{
                                                    return e._id != el._id;
                                                });

                                                this.setState({allMovies: allMovies});
                                            }
                                        }>
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            );
                        })
                    }


                </tbody>
            </table>

            <nav aria-label="Page navigation example">

            <ul class="pagination">

                <li 
                    class="page-item"
                    onClick = {
                        () => {
                            this.setState({currPage: (this.state.currPage==1 ? 1 : this.state.currPage-1)})
                        }
                    }
                    ><a class="page-link" href="#">Previous</a></li>
                    {
                        arr.map((el)=>{

                            return (
                                
                                <li 
                                    class="page-item"
                                    
                                    onClick={ () => {
                                        this.setState({ currPage: el });
                                    }
                                }

                                ><a class="page-link" href="#">{el}</a></li>
                            );
                        })
                    }
            
                <li 
                    class="page-item"
                    onClick = {
                        () => {
                            this.setState({currPage: (this.state.currPage == No_of_Pages ? No_of_Pages : this.state.currPage+1)})
                        }
                    }
                ><a class="page-link" href="#">Next</a></li>
            </ul>
            
            </nav>

            </React.Fragment>
        );
    }
}

export default Table;