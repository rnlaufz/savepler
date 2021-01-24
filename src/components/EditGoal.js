import React from 'react'

 const EditGoal = () =>  {
    return (
        <div className="goal-form">
            <h2>Edit your goal</h2>
            <form>
            <div className="pos-flex-split">
            <div>
                <input className="form-control" type="text" placeholder="Goal Name"/>
            </div>
            <div>
                <input className="form-control" type="number" placeholder="Reqired sum"/>
            </div>
            <div>
                <select className="form-control" name="currency" id="curr">
                    <option defaultChecked value="RUB">RUB</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
            </div>
            </div>
           
            <div>
                <input className="form-control" type="submit" value="Change Goal Data"/>
            </div>
            </form>
        </div>
    )
}

export default EditGoal;