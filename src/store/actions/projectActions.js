export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to db
        console.log(getState);
        dispatch({type: 'CREATE_PROJECT', project})
    }
};