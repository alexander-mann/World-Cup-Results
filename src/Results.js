import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import TeamCrest from './TeamCrest';

class Results extends Component {
    constructor() {
        super();
        this.state = {
            results: []
        }
    }
    componentDidMount() {
        // get World Cup fixtures (not completed)
        const authStr = "68b65c34e4d34ab8b033da0c58296748";
        axios.get("http://api.football-data.org/v1/competitions/467/fixtures", { headers: { "X-Auth-Token": authStr } }).then((res) => {
            this.setState({
                results: res.data.fixtures
            });
        }).catch((err) => {
            console.log("error")
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.results.reverse().map(function (result) {
                        var section = 0;
                        if (result.status === "FINISHED") {
                            let time = moment(result.date).format("h:mm A");
                            result.time = time;
                            let date = moment(result.date).format("MMMM Do");
                            result.date = date;
                            return (
                                <div className="col-md-12" id="result-back" key={result._links.self.href}>
                                    <div className="col-md-5" id="result">
                                        {/* row 1 */}
                                        <div className="row" id="row1">
                                            <div className="col-md-4">
                                                <p className="pull-left">{result.date}</p>
                                            </div>
                                            <div className="col-md-4">
                                                {
                                                    (() => {
                                                        switch (result.matchday) {
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
                                                                return ([<p>Matchday {result.matchday}</p>]);
                                                        }
                                                    })()
                                                }
                                            </div>
                                            <div className="col-md-4">
                                                <p className="pull-right">{result.time}</p>
                                            </div>
                                        </div>
                                        {/* row 2 */}
                                        <div className="row" id="row2">
                                            <div className="col-md-4">
                                                <TeamCrest teamName={result.homeTeamName} />
                                            </div>
                                            <div className="col-md-4">
                                                <p id="score">{result.result.goalsHomeTeam} - {result.result.goalsAwayTeam}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <TeamCrest teamName={result.awayTeamName} />
                                            </div>
                                        </div>
                                        {/* row 3 */}
                                        <div className="row" id="row3">
                                            <div className="col-md-4">
                                                <p>{result.homeTeamName}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <strong><p>FULL TIME</p></strong>
                                            </div>
                                            <div className="col-md-4">
                                                <p>{result.awayTeamName}</p>
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

export default Results;