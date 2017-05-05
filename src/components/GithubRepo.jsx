import React from 'react';
//import { Link } from 'react-router';

class GithubRepo extends React.Component {
     
     constructor(){
          super();
          this.state = {};
     }
     
     componentDidMount(){
          const GITHUB_API_TOKEN = '?access_token=84dff6ac38e5d88760d530a9ff6f13af260d5ca2';
          fetch(`https://api.github.com/users/${this.props.params.username}/repos${GITHUB_API_TOKEN}`)
          .then(response => response.json())
          .then(repos => {
               console.log(repos);
               this.setState({repos: repos});
          }).catch(new Error('error'));
     }

     render() {
          if(!this.state.repos) {
               return (<div>Loadin repos...</div>);
          }
          else {
          return(
               <div>
                    <h3>Repos of {this.props.params.username}</h3>
                    <ul className="list-of">
                    {this.state.repos.map( element => {
                         console.log(element);
                         return(
                              <li key={element.id} className="repos-list">
                                   <a href={element.html_url} className="ref" >
                                        {this.props.params.username}/{element.name}
                                   </a>
                                   <div className="star-icon">
                                        {element.stargazers_count}
                                        <svg aria-label="star" className="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
                                   </div>
                              </li>
                         );
                    }
                    )}
                    </ul>
               </div>
          );}
     }
     
}

export default GithubRepo;