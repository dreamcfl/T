var Reducer =function(state,action){
    if(typeof state =="undefined"){
        return ""
    }
    switch (action.type) {
        case "TODO_LOGIN":
            return action.text;
            break;
        default:
        return state
            break;
    }
}
export default Reducer