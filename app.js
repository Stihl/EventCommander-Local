const { createApp, ref, onMounted } = Vue

class Occasion {
            
        
    constructor(title="", date=undefined, description="") {
        this.title = title
        this.date = date || new Date(Date.now())
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
//Next is the modal for editing and deleting
createApp({
    setup(){
        
        const occasions = ref([new Occasion("title", "date", "description")])
        const title = ref("")
        const date = ref("")
        const description = ref("")
        const storage = window.localStorage
        
        function saveAll() {
            storage.setItem("occasions", JSON.stringify(occasions.value));
        }
        function loadAll() {
            occasions.value = JSON.parse(storage.getItem("occasions")) ?? []
              
        }
        loadAll()

        function addOccasion() {
            
            occasions.value.push(new Occasion(title.value, date.value, description.value));
            saveAll()
            title.value = ""
            date.value = undefined
            description.value = ""
        }

        function removeOccasion(index) {
            occasions.value.splice(index,1)
            saveAll();
        }

        function updateOccasion(index) {
            for(let i = 0; i < occasions.value.length; i++) {
                if(occasions.value[i] == occasions.value[index]) {
                    occasions.value[i].title = "Updated Title"
                    //occasions.value[i].checkPassed()
                    occasions.value[i].description = "Updated Description"
                }
            }
            saveAll()
        }

        return {
            occasions,
            addOccasion,
            removeOccasion,
            updateOccasion,
            title,
            date,
            description
        }
    }


}).mount('#app')