class DateMethods {
    // [months integer, month in MMM]
    monthsDictionary = [
        { code: "0", fullname: "Jan" },
        { code: "1", fullname: "Fev" },
        { code: "2", fullname: "Mar" },
        { code: "3", fullname: "Abr" },
        { code: "4", fullname: "Mai" }, 
        { code: "5", fullname: "Jun" },
        { code: "6", fullname: "Jul" },
        { code: "7", fullname: "Ago" },
        { code: "8", fullname: "Set" },
        { code: "9", fullname: "Out" },
        { code: "10", fullname: "Nov" },
        { code: "11", fullname: "Dez" },
    ]

    // get today's date, return an object with day, month and year
    getToday(){
        const todayObj = {
            "year": new Date().getFullYear(),
            "month": new Date().getMonth(),
            "day": new Date().getDay(),
        }
        // console.log( "today", todayObj.month )
        return todayObj;
    }

    // get the month from a date formatted as yyyy-mm-dd, return in format "mmm"
    getMonthFrom(month) {
        try {
            const monthObj = this.monthsDictionary.find((fullMonth) => fullMonth.code == month);
            return monthObj ? monthObj.fullname : "Mês não encontrado";
        } catch (error) {
            console.log("Algo deu errado...", error);
            return "Algo deu errado...";
        }
    }    

    // date should de in the following format ( yyyy-mm-dd ), return an integer        
    getMonthToNumericRepresentation(date) {
        const splittedDate = date.split('-');
        const dateObj = {
            year: splittedDate[0],
            month: splittedDate[1] * 1,
            day: splittedDate[2],
        }
        // console.log("numeric", dateObj.month)

        return dateObj;
    } 

}

export default DateMethods;