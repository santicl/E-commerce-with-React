function getDateFinal(props) {



    let today = new Date();
    let minsFinal = props.mins;
    let hhFinal = props.hours;
    let secFinal = props.sec;


    let dd = today.getDate();
    let minsToday = today.getMinutes();
    let hh = today.getHours();
    let sec = today.getSeconds();
    let monthToday = today.getMonth() + 1;

    let getMonths = props.month - monthToday;
    let getDays = getMonths * 30;

    let getHours = hh - hhFinal;
    let getMins = minsToday - minsFinal;
    let getSecs = secFinal - sec;

    if (getSecs < 0) {
        getSecs = 60 + getSecs;
        getMins = getMins - 1;
    }

    if (getMins < 0) {
        getMins = 60 + getMins;
        getHours = getHours - 1;
    }

    if (getHours < 0) {
        getHours = 24 + getHours;
        getDays = getDays - 1;
    }

    dd = getDays;


    return {
        dd,
        hh: getHours,
        sec: getSecs,
        minsToday: getMins
    };
}


export default getDateFinal;