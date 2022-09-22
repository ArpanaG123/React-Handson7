import Student from './Student';


const Reducer = (state="",action) =>{
    switch(action){
     case Student : return <Student/>
     default : return state
    }
}

export default Reducer;