import React, {
  Component
} from 'react';
import Post from "../Post";
import "./style.css";
// import posts from "../../data/posts.json";
import Api from "../../../api";
import { Ctx } from "../../App";

class App extends React.Component {
      state = {
          isLoading: true,
          data: [],
          error: null
      };
      getFetchUsers() {
          this.setState({
              loading: true
          }, () => {
              fetch("http://localhost:3000/posts").then(res => res.json()).then(result => this.setState({
                  loading: false,
                  data: result
              })).catch(console.log);
          });
      }
      componentDidMount() {
          this.getFetchUsers();
      }
      render() {
          const {
              data,
              error
          } = this.state;
          return (
            <React.Fragment>
            <h1>All User</h1>
            {
                  error ? <p>
            {
                      error.message
                  } </p> : null}  {
                      data.map(data => {
                          const {
                            title,
                            image,
                    
                          } = data;
                          return (
                          <div>
                              <p>Name: {title}</p>
                              <p>Email: {image}</p>
                              <p>Address: {adderss}</p>
                              <hr />
                          </div>
                          );
                      })
                  } </React.Fragment> );
          }
      }

      export default AllPosts