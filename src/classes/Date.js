class DateMethods {
    // [months integer, month in MMM]
    monthsDictionary = [
        { code: "01", fullname: "Jan" },
        { code: "02", fullname: "Fev" },
        { code: "03", fullname: "Mar" },
        { code: "04", fullname: "Abr" },
        { code: "05", fullname: "Mai" }, 
        { code: "06", fullname: "Jun" },
        { code: "07", fullname: "Jul" },
        { code: "08", fullname: "Ago" },
        { code: "09", fullname: "Set" },
        { code: "10", fullname: "Out" },
        { code: "11", fullname: "Nov" },
        { code: "12", fullname: "Dez" },
    ]

    // get today's date, return an object with day, month and year
    getToday(){
        const todayObj = {
            "year": new Date().getFullYear(),
            "month": new Date().getMonth() + 1,
            "day": new Date().getDay(),
        }
        //console.log( todayObj )
        return todayObj;
    }

    // get the month from a date formatted as yyyy-mm-dd, return in format "mmm"
    getMonthFrom(month) {
        try {
            const monthObj = this.monthsDictionary.find((fullMonth) => fullMonth.code == month+1);
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
        //console.log("numeric", dateObj)

        return dateObj;
    }

}

export default DateMethods;