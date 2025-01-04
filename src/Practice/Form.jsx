import { useState } from "react"

export default function Form() {
    
  const [form, setForm] = useState({ name: "" });

    const handleSubmit = (Event) => {
        Event.preventDefault();
        console.log(form);

    }

    return (

        <div className='w-11/12 mx-auto mb-80 mt-80'>
            <form onSubmit={handleSubmit} className="" action="">
                <input onChange={((Event) => setForm({ ...form, name: Event.target.value }))} placeholder='name' type="text" />
                <input onChange={((Event) => setForm({ ...form, email: Event.target.value }))} placeholder='email' type="text" />
                <button className="px-2 py-2 mb-5 bg-green-600 rounded ">Submit</button>
            </form>
        </div>
    )
};
