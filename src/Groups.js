import React, { Component } from 'react';
import axios from 'axios';
import Group from './Group';

class Groups extends Component {
    constructor() {
        super();
        this.state = {
            groupA: [],
            groupB: [],
            groupC: [],
            groupD: [],
            groupE: [],
            groupF: [],
            groupG: [],
            groupH: []
        }
    }
    componentDidMount() {
        // get World Cup fixtures (not completed)
        const authStr = "68b65c34e4d34ab8b033da0c58296748";
        axios.get("http://api.football-data.org/v1/competitions/467/leagueTable", { headers: { "X-Auth-Token": authStr } }).then((res) => {
            this.setState({
                groupA: res.data.standings.A,
                groupB: res.data.standings.B,
                groupC: res.data.standings.C,
                groupD: res.data.standings.D,
                groupE: res.data.standings.E,
                groupF: res.data.standings.F,
                groupG: res.data.standings.G,
                groupH: res.data.standings.H
            });
        }).catch((err) => {
            console.log("error")
        });
    }
    render() {
        return (
            <div>
                <hr />
                <Group groupData={this.state.groupA} groupName="Group A" />
                <hr />
                <Group groupData={this.state.groupB} groupName="Group B" />
                <hr />
                <Group groupData={this.state.groupC} groupName="Group C" />
                <hr />
                <Group groupData={this.state.groupD} groupName="Group D" />
                <hr />
                <Group groupData={this.state.groupE} groupName="Group E" />
                <hr />
                <Group groupData={this.state.groupF} groupName="Group F" />
                <hr />
                <Group groupData={this.state.groupG} groupName="Group G" />
                <hr />
                <Group groupData={this.state.groupH} groupName="Group H" />
                <hr />
            </div>
        );
    }
}

export default Groups;