function realTimeClock() 
{
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();

    var month = rtClock.getMonth();
    var day = rtClock.getDay();
    var date = rtClock.getDate();
    

    var day_str, month_str;

    switch(day)
    {
        case 1: 
            day_str = "Montag" 
            break;
        case 2: 
            day_str = "Dienstag" 
            break;
        case 3: 
            day_str = "Mittwoch" 
            break;
        case 4: 
            day_str = "Donnerstag" 
            break;
        case 5: 
            day_str = "Freitag" 
            break;
        case 6: 
            day_str = "Samstag" 
            break;
        case 7: 
            day_str = "Sonntag" 
            break;
        default:
            day_str = "error"
    }
    switch(month + 1)
    {
        case 1: 
            month_str = "Januar" 
            break;
        case 2: 
            month_str = "Februar" 
            break; 
        case 3: 
            month_str = "März" 
            break;
        case 4: 
            month_str = "April" 
            break;
        case 5: 
            month_str = "Mai" 
            break;
        case 6: 
            month_str = "Juni" 
            break;
        case 7: 
            month_str = "Juli" 
            break;
        case 8: 
            month_str = "August" 
            break;
        case 9: 
            month_str = "September" 
            break;
        case 10: 
            month_str = "Oktober" 
            break;
        case 11: 
            month_str = "November" 
            break;
        case 12: 
            month_str = "Dezember" 
            break;
        default:
            month_str = "error"
            break;
    }

    if(hours < 10) 
    {
        hours = "0" + hours;
    }
    if(minutes < 10) 
    {
        minutes = "0" + minutes;
    }
    

    document.getElementById('toprightclock').innerHTML = "Hallo, Fynn!"+ "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + hours + ":" + minutes;
    
    var t = setTimeout(realTimeClock, 500);
}