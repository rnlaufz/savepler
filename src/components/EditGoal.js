import React from 'react'

 const EditGoal = () =>  {
    return (
        <div className="goal-form pos-flex">
            <h2 className="title-l">Manage goal</h2>
            <p>Edit name, money amount or the currency</p>
            <form>
            <div className='inputs'>
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
            <div>
                <input className="form-control" type="submit" value="Change Goal Data"/>
            </div>
            </div>
           
            
            </form>
        </div>
    )
}

export default EditGoal;