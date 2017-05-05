import React from 'react';
//import { Link } from 'react-router';
import GithubUser from './GithubUser';

class Followers extends React.Component {
     
     constructor(){
          super();
          this.state = {};
     }
     
     componentDidMount(){
          const GITHUB_API_TOKEN = '?access_token=84dff6ac38e5d88760d530a9ff6f13af260d5ca2';
          fetch(`https://api.github.com/users/${this.props.params.username}/followers${GITHUB_API_TOKEN}`)
          .then(response => response.json())
          .then(followers => {
               this.setState({followers: followers});
          }).catch(new Error('error'));
     }
     
     render() {
          if(!this.state.followers) {
               return (<div>'Loading followers...'</div>);
          }
          else {
               return(
                    <div className="followers-page">
                         <h3>Followers of {this.props.params.username}</h3>
                         <ul className="list-of">
                              {this.state.followers.map( element => {
                                   //console.log(element);
                                   return (
                                   <li key={element.id}><GithubUser user={element}/></li>);
                              }/* INSERT CODE HERE TO RETURN A NEW <GithubUser/> */)}
                         </ul>
                    </div>     
               );
          }
     }
     
}

export default Followers;