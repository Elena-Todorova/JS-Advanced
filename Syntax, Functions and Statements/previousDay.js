function previousDay(year, month, day) {
    
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);

    date.setDate(date.getDate()-1);//important! we change the date one day back HERE;
    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDate = date.getDate();
    
    console.log(`${newYear}-${newMonth}-${newDate}`);
    //console.log(date);
    //console.log(newYear);
    //console.log(newMonth);
    //console.log(newDate);
}

previousDay(2016, 10, 1)