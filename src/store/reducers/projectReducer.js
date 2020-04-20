const initState = {

projects:[
    {id:1, title:'1st title', content:'content of 1st title'},
    {id:2, title:'2st title', content:'content of 2st title'},

]

}

const projectReducer = (state = initState, action)=>{
    
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('project created', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state
        default:
            return state
    }

   

}

export default projectReducer