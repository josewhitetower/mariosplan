import { firestore } from "firebase";

export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const fireStore = getFirestore();
        const {profile} = getState().firebase;
        const  {uid} =getState().firebase.auth
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: uid,
            createdAt: new Date()

        })
        .then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        })
        .catch((err)=> {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    }
};
