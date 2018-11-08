import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul className= 'movie-list'>      
        {this.props.profiles.map((profile =>      
           <li keys = {profile.id} >
					{this.props.users[profile.id].name} favorite movie is {this.props.movies[profile.favoriteMovieID].name}.
            </li>    
          ))}     
      </ul>     
    );
  }
}

export default List;