class Occasion {
    title = ""
    date = undefined
    description =""
    passed = false

    constructor(title, date=undefined, description) {
        this.title = title
        this.date = date || Date.now()
        this.description = description
        this.passed = false
    }

    checkPassed() {
        if(this.date < Date.now()) {
            this.passed = true
        } else {
            this.passed = false
        }
    }

}