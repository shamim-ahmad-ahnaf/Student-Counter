import React, { useState } from "react";

const Form = ({ addNewData }) => {
    const [formData, setFormData] = useState({ name: "", username: "", email: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.username && formData.email) {
            addNewData({ id: Date.now(), ...formData });
            setFormData({ name: "", username: "", email: "" });
        }
    };

    return (
        <div className="fixed p-6 bg-white shadow-lg top-20 left-4 rounded-xl lg:w-80">
            <h2 className="mb-4 text-lg font-bold text-gray-800">Add New Data</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                    type="submit"
                    className="p-2 text-white transition bg-purple-700 rounded hover:bg-purple-600">
                    Save
                </button>
            </form>
        </div>
    );
};

export default Form;
