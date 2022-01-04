import {reactive} from "vue";

const state = reactive({
    count: 0
})

const mutations = {
    inc() {
        state.count++;
    }
}

export {
    state,
    mutations
}
