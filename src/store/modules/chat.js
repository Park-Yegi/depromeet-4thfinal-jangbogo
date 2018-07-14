import axios from 'axios';

export default{
    namespaced : true,
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        postRoomCreate(){
            let baseURL= 'http://52.78.159.170/auth/check/uid/'
            let data = {
                title,
                description,
                address,
                shoppingType,
                isDisable,
            };

            axios.post(baseURL, JSON.stringify(data),{
                header:{
                    'Content-Type' : 'application/json',
                    //TODO
                    //send token
                }
            }).then((result) => {
                console.log("success");
                console.log(result);
            }).catch((error) => {
                console.log("fail");
                console.log(error);
            })
        },
    }
}