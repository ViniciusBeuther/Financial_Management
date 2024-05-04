class DateMethods {
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

    // get today's date, return an object
    getToday(){
        const todayObj = {
            "year": new Date().getFullYear(),
            "month": new Date().getMonth(),
            "day": new Date().getDay(),
        }
        return todayObj;
    }

    // get the month from a date formatted as yyyy-mm-dd
    getMonthFrom(month) {
        try {
            const monthObj = this.monthsDictionary.find((fullMonth) => fullMonth.code == month+1);
            return monthObj ? monthObj.fullname : "Mês não encontrado";
        } catch (error) {
            console.log("Algo deu errado...", error);
            return "Algo deu errado...";
        }
    }    

}

export default DateMethods;