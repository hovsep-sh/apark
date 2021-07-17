import moment from 'moment';
export  function getDateDifference(date) {
    let newDate;
    if(moment().diff(date, 'years')){
        newDate = moment().diff(date, 'years')+'y';
    } else if(moment().diff(date, 'month')){
        newDate = moment().diff(date, 'month')+'m';
    } else if(moment().diff(date, 'days')){
        newDate = moment().diff(date, 'days') + 'd';
    } else if(moment().diff(date, 'hours')){
        newDate = moment().diff(date, 'hours') + 'h';
    } else if( moment().diff(date, 'minutes')){
        newDate = moment().diff(date, 'minutes') + 'm';
    } else {
        newDate = moment().diff(date, 'second') + 's';
    }

    return newDate
}