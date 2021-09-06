import React from "react";

function Search(props){

        return (

            <div>
                <p>Showing {props.noofMovies} movies from the database</p>
                <button type="button" class="btn btn-primary">New</button>

                <div class="input-group mt-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search..."
                        onChange={(e)=>{
                            props.searchParam(e.currentTarget.value);
                        }}
                    />
                </div>
            </div>
        );
    
}

export default Search;