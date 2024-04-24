class methods{
    formatDate(date) {
        this.date = date;
        const regexPattern = /(\d+)-(\d+)-(\d+)/;
        const newDate = this.date.replace(regexPattern, "$3/$2/$1")
        
        return newDate;
    }

    translatePaymentMethod( paymentMethod ) {
        switch ( paymentMethod.toUpperCase() ){
            case "CREDIT":
                return "Crédito"
            
            case "DEBIT":
                return "Débito"
        } 

    }

}

export default methods;