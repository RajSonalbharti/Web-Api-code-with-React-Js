import React from 'react';
import {BrowserRouter as Router , Switch  ,Route, Link} from 'react-router-dom'; 
import AddBook from './AddBook';
import BookList from './BookList';

function Dashboard(){
    return(
        <Router>
        <div className="container">
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/AddBook'} className="nav-link">Add New Book</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/BookList'} className="nav-link">Books List</Link>
                </li>
              </ul>
            </div>
          </nav> 
          <br />
          <Switch>
            <Route exact path='/AddBook' component={AddBook} />           
            <Route path='/BookList' component={BookList}/>         
          </Switch>
        </div>
      </Router>
    
    )
}
export default Dashboard;