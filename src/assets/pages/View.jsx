import { useEffect, useState } from "react"
import http from "../../../http"
import { useNavigate, useParams } from "react-router-dom";

export default function View(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser();
    },[]);

    // this function is to fetch user data to provide id. In my form there is only two fields. name and email 
    const fetchUser = () => {
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
            });
        });
    }

    return (
        <div>
            <h3>View User</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <h4>User Name</h4>
                        <p>{inputs.name}</p>
                        <h4>User Email</h4>
                        <p>{inputs.email}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}