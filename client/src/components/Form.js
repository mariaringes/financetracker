import React from "react";
import { useForm } from 'react-hook-form';
import List from './List';

export default function Form(){

    const {register, handleSubmit, resetField} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log(data.name);
    }

    return (
        <div className='form max-w-sm mx-auto w-96'>
            <h1 className="font-bold pb-4 text-xl">Transaction</h1>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <div className="input-group">
                        <input type="text" placeholder="Transaction Name" className="form-input" {...register('name')}></input>
                    </div>
                    <select className="form-input" {...register('type')}>
                        <option value="Investment" defaultValue>Savings</option>
                        <option value="Investment">Investment</option>
                        <option value="Investment">Expense</option>
                    </select>
                    <div className="input-group">
                        <input type="text" placeholder="Amount" className="form-input" {...register('amount')}></input>
                    </div>
                    <div className="submit-btn">
                        <button className="border py-2 text-white bg-indigo-500 w-full">Add Transaction</button>
                    </div>
                </div>  
            </form>
            <List></List>
        </div>
    )
}