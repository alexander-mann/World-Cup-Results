import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import TeamCrest from './TeamCrest';

class Fixtures extends Component {
    constructor() {
        super();
        this.state = {
            fixtures: []
        }
    }
    componentDidMount() {
        // get World Cup fixtures (not completed)
        const authStr = "68b65c34e4d34ab8b033da0c58296748";
        axios.get("http://api.football-data.org/v1/competitions/467/fixtures", { headers: { "X-Auth-Token": authStr } }).then((res) => {
            this.setState({
                fixtures: res.data.fixtures
            });
        }).catch((err) => {
            console.log("error")
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.fixtures.map(function (fixture) {
                        if (fixture.status !== "FINISHED" && fixture.awayTeamName !== "") {
                            let time = moment(fixture.date).format("h:mm A");
                            fixture.time = time;
                            let date = moment(fixture.date).format("MMMM Do");
                            fixture.date = date;
                            return (
                                <div className="col-md-12" id="result-back">
                                    <div className="col-md-5" id="result" key={fixture._links.self.href}>
                                        {/* row 1 */}
                                        <div className="row" id="row1">
                                            <div className="col-md-4">
                                                <p className="pull-left">{fixture.date}</p>
                                            </div>
                                            <div className="col-md-4">
                                                {
                                                    (() => {
                                                        switch (fixture.matchday) {
                                                            case 4:
                                                                return ([<p>Round of 16</p>]);
                                                            case 5:
                                                                return ([<p>Quarterfinal</p>]);
                                                            case 6:
                                                                return ([<p>Semifinal</p>]);
                                                            case 7:
                                                                return ([<p>Third Place</p>]);
                                                            case 8:
                                                                return ([<p>Final</p>]);
                                                            default:
                                                                return ([<p>Matchday {fixture.matchday}</p>]);
                                                        }
                                                    })()
                                                }
                                            </div>
                                            <div className="col-md-4">
                                                <p className="pull-right">{fixture.time}</p>
                                            </div>
                                        </div>
                                        {/* row 2 */}
                                        <div className="row" id="row2">
                                            <div className="col-md-4">
                                                <TeamCrest teamName={fixture.homeTeamName} />
                                            </div>
                                            <div className="col-md-4">
                                                <p id="score"> {fixture.result.goalsHomeTeam} - {fixture.result.goalsAwayTeam}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <TeamCrest teamName={fixture.awayTeamName} />
                                            </div>
                                        </div>
                                        {/* row 3 */}
                                        <div className="row" id="row3">
                                            <div className="col-md-4">
                                                <p>{fixture.homeTeamName}</p>
                                            </div>
                                            <div className="col-md-4">
                                                {
                                                    (() => {
                                                        if (fixture.result.goalsHomeTeam != null) {
                                                            return (
                                                                <p>ONGOING</p>
                                                            )
                                                        }
                                                    })()
                                                }
                                            </div>
                                            <div className="col-md-4">
                                                <p>{fixture.awayTeamName}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            );
                        }
                    })
                }
            </div>
        );

    }
}

export default Fixtures;