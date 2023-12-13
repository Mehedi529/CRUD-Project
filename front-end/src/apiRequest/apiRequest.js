import axios from "axios";


//Read
export async function ListTaskRequest(){
    try {
        let res=await fetch("http://localhost:5000/api/v1/ListTask");
        let JSONData=await res.json();
        return JSONData['data'];
    }catch (e) {
        return []
    }
}

export async function ListTaskByIdRequest(id){
    try {
        let res=await fetch("http://localhost:5000/api/v1/ListTaskById/"+id);
        let JSONData=await res.json();
        return JSONData['data'][0];
    }catch (e) {
        return []
    }
}




//Create
export async function CreateTaskRequest(postBody){
    try {
        let res=await axios.post("http://localhost:5000/api/v1/CreateTask",postBody);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
}



//Update
export async function UpdateTaskRequest(postBody,id){
    try {
        let res=await axios.post("http://localhost:5000/api/v1/UpdateTask/"+id,postBody);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
}



//Delete
export async function DeleteTaskRequest(id){
    try {
        let res=await fetch("http://localhost:5000/api/v1/"+id);
        let JSONData=await res.json();
        if(JSONData['status']==="success"){
            return  true;
        }else{
            return  false;
        }
    }catch (e) {
        return  false;
    }
}