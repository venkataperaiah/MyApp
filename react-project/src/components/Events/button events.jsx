

export function ButtonEvents(){
     function SubmitClick(e){
        e.preventDefault();
        alert('Form Submitted')
     }
     return(
        <div className="container-fluid">
            <form onSubmit={SubmitClick}>
                <dl>
                    <dt>User NAme</dt>
                    <dd><input type="text" placeholder="UserNAme" ></input></dd>
                </dl>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
     )
}