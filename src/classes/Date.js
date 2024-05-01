class DateMethods {
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
    getMonthFrom( date ) {
        try {
            const regexPattern = /\d{4}-(\d+)-\d+/;
            if ( date.match( regexPattern ) ) {
                const month = date.replace( regexPattern, "$1" )
                
            }
            
        } catch ( error ) {
            console.log(dayjs())
            return console.log( "Algo deu errado..." )
        }
    }

}

export default DateMethods;