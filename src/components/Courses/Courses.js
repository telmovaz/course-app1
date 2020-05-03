import React from "react";
import "../Courses/Courses.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from '../Modal/Modal';
import AddCourse from '../AddCourse/AddCourse'

class Courses extends React.Component {
  state = {
    listClasses: [],
    accessToken: "",
    show: false,
  };

  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  componentDidMount() {
    const url = "https://api.esch.pl/api/auth/login";

    const authOptions = {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
        tenant: "uitest",
      },
      body: JSON.stringify({
        email: "uitest@admin.ad",
        password: "uitest",
      }),
    };

    const getOptions = {
      credentials: "include",
      headers: {
        tenant: "uitest",
      },
    };

    const showCourses = () => {
      fetch("https://api.esch.pl/api/courses", getOptions)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.payload);
          this.setState({ listClasses: res.payload });
        });
    };

    fetch(url, authOptions).then(() => {
      showCourses();
    });
  }

  render() {
    return (
      <div className="courses-top">
        <div className="Button">
          <input
            type="button"
            className="add-button"
            value="Add Course"
            onClick={this.showModal}
          ></input>
        </div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Date Created</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

        {this.state.listClasses.map((element) => {
          return (
            <div>
              <table class="table">
                <tbody>
                  <tr>
                    <th style={{ width: "10%" }}>{element.id}</th>
                    <td style={{ width: "20%" }}>{element.name}</td>
                    <td style={{ width: "30%" }}>{element.description}</td>
                    <td style={{ width: "30%" }}>{element.createdDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
        <Modal show={this.state.show} handleClose={this.hideModal}>
            <div>
        <AddCourse />
        </div>
        </Modal>
      </div>
    );
  }
}
export default Courses;
