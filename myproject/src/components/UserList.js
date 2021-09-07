
import React from "react"

export default class UserList extends React.Component {

    constructor() {
        super();
        this.state = { person: [] };
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(( results ) => this.setState({ person: results.results }));
    }

    render() {

        const persons = this.state.person.map((item, i) => (
            <div>
                <h1>{ item.name.first }</h1>
                <span>{ item.cell }, { item.email }</span>
            </div>
        ));

        return (
            <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{ persons }</div>
            </div>
        );
    }
}
