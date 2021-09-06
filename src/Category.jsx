import React from "react";


class Category extends React.Component {

    state = {

        allGenre: [],
    };

    componentDidMount() {

    //api call(msg bhejna=> get)
        fetch("/genre").then(function(res) {
            //console.log(res);
            return res.json()
        }).then((json)=>{
            //console.log(json);
            this.setState({allGenre:json})
        })
    }

    render() {

        return (

            <ul class="list-group">
                <li className="list-group-item" onClick={() => {this.props.selectGenre("All Genre")}}>All Genres</li>
                {
                    this.state.allGenre.map((el)=>{

                        return <li className="list-group-item" key = {el._id} onClick={(e)=>{this.props.selectGenre(el.name)}}>{el.name}</li>
                    })
                }
          </ul>

        );
    }
}

export default Category;