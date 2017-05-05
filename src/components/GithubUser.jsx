import React from 'react';
import { Link } from 'react-router';

class GithubUser extends React.Component {

     render() {
          return(
               <Link to={`/users/${this.props.user.login}`}>
                 <img src={this.props.user.avatar_url} alt={this.props.user.login} />
                 {this.props.user.login}
               </Link>     
          );
     }
     
}

export default GithubUser;