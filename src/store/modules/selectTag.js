export default{
    namespaced: true,
    state:{
        tags:{
            type:['양식', '중식', '한식', '패스트푸드'],
            ingredient:['당근', '오레오', '오렌지', '카레', '짜장면', '닭가슴살', '계란', '맛있는 거'],
        },
        selected:[],
    },
    getters:{
        getTags(state){
            return state.tags;
        },
        getSelected(state){
            return state.selected;
        }
    },
    mutations:{
        setSelected(state, payload){
            //해당 태그가 클릭되어있을 시, 삭제
            for(let index in state.selected){
                if(state.selected[index] === payload){
                    state.selected.splice(index, 1);
                    return;
                }
            }
            //해당 태그가 없을 때, 추가
            state.selected.push(payload);
            return true;
        }
    },
    actions:{

    }
}