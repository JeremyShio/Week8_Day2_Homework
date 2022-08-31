// rcc emmet abbreviation
import React, { Component } from 'react'




export default class NamesClass extends Component {
    // Initializing local state
    constructor(props) {
        // Enables this. calling of NamesClass 
        super(props);
        // Set state of NamesClass
        this.state = {
            // Empty array to hold classmate info
            awesomeClassmateNames: []
        };
    };

    // Initializing the data from the kekembas api
    componentDidMount() {
        // Retrieving the api
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            // If the response is successful
            .then(res => res.json())
            // Then the data extracted is sent back
            .then(data => {
                // Variable to hold data pulled from the api
                let theBestProgrammers = data;
                // Set state (array:data) -- Data is sent to empty array
                this.setState({awesomeClassmateNames:theBestProgrammers});
            });
    };

    // IF the data were to update from the kekembas api... //
    componentDidUpdate(prevProps, prevState) {
        // If there is any change to the current state (.id .firstName .lastName) then we update the state
        if (prevState.id !== this.state.id || prevState.firstName !== this.state.firstName || prevState.lastName !== this.state.lastName) {
            // Retrieving the api
            fetch('https://kekambas-bs.herokuapp.com/kekambas')
                // If the response is successful
                .then(res => res.json())
                // Then the data extracted is sent back
                .then(data => {
                    // Variable to hold data pulled from the api
                    let theBestProgrammers = data;
                    // Set state (array:data) -- Data is sent to empty array
                    this.setState({awesomeClassmateNames:theBestProgrammers});
                });
        };
    };

    // Function to handle event IF new Classname were to be added... //
    handleClassnameSubmit = (event) => {
        // Prevent event default response of refreshing page
        event.preventDefault();
        // Classmate values to be added (.id .firstName .lastName) set to new values
        let newID = event.target.id.value;
        let newFirstName = event.target.firstName.value;
        let newLastName = event.target.lastName.value;
        // Update the current state with the new classmate information
        this.setState({
            // Set old classmate values to be updated with the new values
            id: newID,
            firstName: newFirstName,
            lastName: newLastName
        });
    };

    // The only required method in a class component
    render() {  // Should examine this.props and this.state
    // Pure function (it does not modify component state) 
        // Column names for the classmate table values
        let tableHeaders = ['id', 'first_name', 'last_name'];
        // Return data extracted from kekembas api
        return (
            <div className = 'row py-4'>
                {/* Do NOT need a check for this string because it is TRUE (: */}
                <h3 className = 'text-center'>Names From The Most Awesome Class In The WORLD!!!</h3>
                {/* Checks that there are classmate names to display */}
                { this.state.awesomeClassmateNames.length
                    // If true... everything to the right of short-hand (? ->) is executed
                    ? (<table className = 'table table-primary table-striped mt-3'>
                        <thead>
                            <tr>
                                {/* Each element in tableHeaders recieves its own column with .map */}
                                {tableHeaders.map((th, i) => <th key = {i}>{th}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Each element from kekembas api recieves its own row with .map */}
                            {this.state.awesomeClassmateNames.map((classmates, index) => {
                                return (<tr key = {index}>
                                    {/* Classmate element values */}
                                    <th>{classmates.id}</th>
                                    <td>{classmates.first_name}</td>
                                    <td>{classmates.last_name}</td>
                                </tr>)
                            })};
                        </tbody>
                    </table>)
                    // Else... everything to the right of short-hand (: ->) is executed
                    : (null)  // Since there is no length to the state it must be empty
                };
            </div>
        );
    };
};