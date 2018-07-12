import React, { Component } from 'react';

class TeamCrest extends Component {
    render() {
        var flag = '';
        // get flag for corresponding country
        switch (this.props.teamName) {
            case 'Argentina':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/arg'
                break;
            case 'Australia':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/aus'
                break;
            case 'Belgium':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/bel'
                break;
            case 'Brazil':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/bra'
                break;
            case 'Colombia':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/col'
                break;
            case 'Costa Rica':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/crc'
                break;
            case 'Croatia':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/cro'
                break;
            case 'Denmark':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/den'
                break;
            case 'Egypt':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/egy'
                break;
            case 'England':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/eng'
                break;
            case 'France':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/fra'
                break;
            case 'Germany':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/ger'
                break;
            case 'Iceland':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/isl'
                break;
            case 'Iran':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/irn'
                break;
            case 'Japan':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/jpn'
                break;
            case 'Korea Republic':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/kor'
                break;
            case 'Mexico':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/mex'
                break;
            case 'Morocco':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/mar'
                break;
            case 'Nigeria':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/nga'
                break;
            case 'Panama':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/pan'
                break;
            case 'Peru':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/per'
                break;
            case 'Poland':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/pol'
                break;
            case 'Portugal':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/por'
                break;
            case 'Russia':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/rus'
                break;
            case 'Saudi Arabia':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/ksa'
                break;
            case 'Senegal':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/sen'
                break;
            case 'Serbia':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/srb'
                break;
            case 'Spain':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/esp'
                break;
            case 'Sweden':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/swe'
                break;
            case 'Switzerland':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/sui'
                break;
            case 'Tunisia':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/tun'
                break;
            case 'Uruguay':
                flag = 'https://api.fifa.com/api/v1/picture/flags-fwc2018-4/uru'
                break;
            default:
                flag = '';
        }
        return (
            <img id="flag" src={flag} alt={this.props.teamName} />
        );
    }
}

export default TeamCrest;