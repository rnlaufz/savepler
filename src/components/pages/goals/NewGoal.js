import React from 'react'

 const NewGoal = () =>  {
    return (
        <div className="goal-form">
            <div className="goal-card">
            <h1>Let's get started!</h1>
            <h2>Create a new goal</h2>
            <p>Give your goal a name, set the amount of money and the currency you prefer</p>
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
                <input className="form-control" type="submit" value="Create Goal"/>
            </div>
            </form>
            </div>
           
        </div>
    )
}

export default NewGoal;