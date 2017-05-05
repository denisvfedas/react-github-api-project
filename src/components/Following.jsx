import React from 'react';
//import { Link } from 'react-router';
import GithubUser from './GithubUser';

class Following extends React.Component {
     
     constructor(){
          super();
          this.state = {};
     }
     
     componentDidMount(){
          const GITHUB_API_TOKEN = '?access_token=84dff6ac38e5d88760d530a9ff6f13af260d5ca2';
          fetch(`https://api.github.com/users/${this.props.params.username}/following${GITHUB_API_TOKEN}`)
          .then(response => response.json())
          .then(following => {
               this.setState({following: following});
          }).catch(new Error('error'));
     }
     
     render() {
          if(!this.state.following) {
               return (<div>'Loading following...'</div>);
          }
          else {
               return(
                    <div className="following-page">
                         <h3>Following of {this.props.params.username}</h3>
                         <ul className="list-of">
                              {this.state.following.map( element => {
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

export default Following;