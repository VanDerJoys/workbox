const moment = require('moment');

class DateHour{
    getDateHour(){
        moment.locale();
        let date = moment().format("L");
        let heure = moment().format("LTS")
        return {date, heure};
    }
}

module.exports = DateHour;