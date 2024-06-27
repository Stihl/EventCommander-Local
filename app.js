const { createApp, ref } = Vue
import Occasion from "./occasion.js"

const app = createApp({
    setup() {
        const occasions = ref([])

        function addOccasion() {
            occasions.value.push(new Occasion("Birthday", Date.now(), "A birthday party!"));
        }

        function removeOccasion(index) {
            occasions.value.splice(index,1)
        }

        function updateOccasion(index) {
            for(let i = 0; i < occasions.value.length; i++) {
                if(occasions.value[i] == occasions.value[index]) {
                    occasions.value[i].title = "Updated Title"
                    //occasions.value[i].checkPassed()
                    occasions.value[i].description = "Updated Description"
                }
            }
        }

        return {
            occasions,
            addOccasion,
            removeOccasion,
            updateOccasion
        }
    }


}).mount('#app')