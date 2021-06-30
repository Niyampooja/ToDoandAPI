import React, { Component } from "react";
import axios from "axios";
import PaginationTable from "./PaginationTable";

class ApiData extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      usersData: [],
      loading: false,
      per_page: 6,
      current_page: 1,
      total_data: "",
      currentPosts: [],
      pageNo: 12
    };
  }

  async componentDidMount() {
    await axios
      .get("https://reqres.in/api/users?page=${pageNo}")
      .then(res => {
        this.setState({
          usersData: res.data.data,
          loading: false,
          total_data: res.data.data.length
        }, () => {
          this.formatData();
        });
      })
      .catch(err => console.log(err));
  }

  formatData() {
    const indexOfLastPost = this.state.current_page * this.state.per_page;
    const indexOfFirstPage = indexOfLastPost - this.state.per_page;

    const currentPosts = this.state.usersData.slice(
      indexOfFirstPage,
      indexOfLastPost
    );

    this.setState({ currentPosts });
  }

  handleClick = number => {
    this.setState({
      current_page: number
    }, () => {
      this.formatData();
      //console.log('this.current_page');
    });
  };

  render() {
    const { per_page, total_data, current_page, currentPosts } = this.state;

    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr className="bg-primary text-white">
              <th>Id</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Last Name</th>
              <th>Avatar</th>
            </tr>
          </thead>
          {currentPosts.map(x => {
            return (
              <React.Fragment key={x.id}>
                <tbody>
                  <tr>
                    <td>{x.id}</td>
                    <td>{x.first_name}</td>
                    <td>{x.email}</td>
                    <td>{x.last_name}</td>
                    <td>{x.avatar}</td>
                  </tr>
                </tbody>
              </React.Fragment>
            );
          })}
        </table>
        <PaginationTable
          per_page={per_page}
          current_page={current_page}
          total_data={total_data}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default ApiData;