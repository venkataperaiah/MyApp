import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
export function HookFormDemo(){
    const {register,handleSubmit,formState:{errors}}=useForm();

    const submit =(values)=>
{
    alert(JSON.stringify(values));
}

return(
    <div className="container-fluid">
        <form onSubmit={handleSubmit(submit)}>
            <dl>
                <dt>Name</dt>
                <dd><input type="text" name="Name" {...register("Name",{required:true,minLength:4})}></input></dd>
                <dd className="text-danger">
                    {(errors.Name?.type==='required')?<span>Name Required</span>:<span></span>&& (errors.Name?.type==='minLength')?<span>Name too short</span>:<span></span>}
                </dd>
            </dl>
            <button>Submit</button>
        </form>
    </div>
)
}