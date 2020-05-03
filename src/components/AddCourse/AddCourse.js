import React from 'react';
import axios from 'axios';
import './AddCourse.scss';


class AddCourse extends React.Component {
    state = {
        name: null,
        description: null,
    }

    setValue = (property, value) => {
        this.setState({
            [property]: value
        })
    }

    addNewCourse = () => {
        
        const postOptions = {
            method: "POST",
            credentials: "include",
            headers: {
              "content-type": "application/json",
              tenant: "uitest",
            },
            body: JSON.stringify({
              name: this.state.name,
              description: this.state.name,
              active: true,
              hoursTotal: 20,
            }),
          };

          fetch("https://api.esch.pl/api/courses", postOptions)
    }

    render() {
        return (
            <div className="add-container">
                
                <form>
                    <input type="text" placeholder="Name" onChange={event => {this.setValue('name', event.target.value)}}/><br />
                    <input type="text" placeholder="Description" onChange={event => {this.setValue('description', event.target.value)}}/><br />
                    
                    <input type="button" value="Add Course" onClick={this.addNewCourse}/>
                </form>

            </div>
        )
    }
}

export default AddCourse;