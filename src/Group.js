import React from 'react';

function Group({ groupData, groupName }) {
    let i = 0; // marker for progessing teams (top 2 in standings)
    return (
        <div className="col-md-8" id="group">
            <h3 className="pull-left" id="group-name">{groupName}</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Team</th>
                        <th>MP</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        groupData.map(function (group) {
                            if (i < 2) {
                                i++;
                                return (
                                    <tr key={group.team} id="pass">
                                        <td>{group.team}</td>
                                        <td>{group.playedGames}</td>
                                        <td>{group.goals}</td>
                                        <td>{group.goalsAgainst}</td>
                                        <td>{group.goalDifference}</td>
                                        <td>{group.points}</td>
                                    </tr>
                                );
                            } else {
                                return (
                                    <tr key={group.team} id="fail">
                                        <td>{group.team}</td>
                                        <td>{group.playedGames}</td>
                                        <td>{group.goals}</td>
                                        <td>{group.goalsAgainst}</td>
                                        <td>{group.goalDifference}</td>
                                        <td>{group.points}</td>
                                    </tr>
                                );
                            }
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Group;