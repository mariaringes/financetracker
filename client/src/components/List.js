import React from 'react';
import 'boxicons';

const obj = [
    {
        name: "Savings",
        color: '#f63de3',
    },
    {
        name: "Investment",
        color: '#f9c74f',
    },
    {
        name: "Expense",
        color: '#abc4fw',
    }
]

export default function List(){
    return (
        <div className='flex flex-col py-6 gap-3'>
            <h1 className='py-4 font-bold text-xl'>History</h1>
            { obj.map((v,i) =>  <Transaction key={i} category={v}></Transaction>)}
        </div>
    )
}

function Transaction({ category }){
    if (!category) return null;
    return (
        <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{borderRight: `8px solid ${category.color ?? "e5e5e5"}`}}>
            <button className='px-3'><box-icon size="15" color={category.color ?? "e5e5e5"} name="trash"></box-icon></button>
            <span className='block w-full'>{category.name ?? ""}</span>
        </div>
    )
}