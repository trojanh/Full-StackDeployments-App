const initState = {
    deploymentList: [
        // {
        //     id: 1,
        //     url: 1,
        //     version: "0.0.0",
        //     templateName: 'Play video game',
        //     deployed: (new Date()).toISOString()
        // }, {
        //     url: 1,
        //     id: 2,
        //     version: "0.0.0",
        //     templateName: 'Learn nodejs & python',
        //     deployed: (new Date()).toISOString()
        // }, {
        //     id: 3,
        //     url: 1,
        //     version: "0.0.0",
        //     templateName: 'Join meetup event',
        //     deployed: (new Date()).toISOString()
        // }
    ]
}

const deploymentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INIT_DEPLOYMENT':
            console.log((action));
            return {
                ...state,
                deploymentList: [
                    ...action.payload,
                ]
            }
        case 'ADD_DEPLOYMENT':
            return {
                ...state,
                deploymentList: [
                    ...state.deploymentList,
                    action.payload
                ]
            }
        case 'REMOVE_DEPLOYMENT':
            return {
                ...state,
                deploymentList: action.payload
            }
        default:
            return state
    }
}

export default deploymentReducer;
