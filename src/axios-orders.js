import axios from 'axios'
const instance=axios.create({
    baseUrl:"https://https://burger-builder-db.firebaseio.com/"
})

export default instance