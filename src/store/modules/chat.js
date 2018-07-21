import axios from 'axios';

export default{
    namespaced : true,
    state: {
        userRoomData:[],
    },
    getters: {

    },
    mutations: {
        setUserRoomData(state, payload){
            state.userRoomData = payload;
        }
    },
    actions: {
        getRoomData(context){
            console.log('getRoomData');
            let uid = 'testUser'
            let baseURI= 'http://52.78.159.170/' + uid + '/room';
        
            axios.get(baseURI, {
                headers:{
                  'Content-Type': 'application/json',
                  'Token': localStorage.getItem('token')
                }
              })
              .then((result) => {
                  console.log("success")
                  console.log(result)
                  context.commit('setUserRoomData', result);
              })
              .catch((error) => {
                    console.log("fail")
                  console.log(error)
              })
        },
    }
}