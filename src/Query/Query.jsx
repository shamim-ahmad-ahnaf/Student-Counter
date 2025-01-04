
// // export default function Query() {
// //     return (
// //         // <div className="flex justify-center w-11/12 mx-auto mt-80">
// //         //     <div className="w-3/12">
// //         //         <div className="p-2 border">
// //         //             <h1 className="text-2xl font-bold">Create a new user</h1>

// //         //             <form class="max-w-md mx-auto">
// //         //                 <div>
// //         //                     <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
// //         //                     <div class="relative">
// //         //                         <input type="text" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
// //         //                     </div>
// //         //                 </div>

// //         //                 <div>
// //         //                     <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
// //         //                     <div class="relative">
// //         //                         <input type="text" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
// //         //                     </div>
// //         //                 </div>

// //         //                 <div>
// //         //                     <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
// //         //                     <div class="relative">
// //         //                         <input type="text" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
// //         //                     </div>
// //         //                 </div>
// //         //             </form>
// //         //         </div>
// //         //     </div>



// //         //     <div className="w-3/12">
// //         //         <div className="p-2 border">
// //         //             <h1 className="text-2xl font-bold">All user Here</h1>
// //         //         </div>
// //         //     </div>

// //         //     <div className="w-3/12">
// //         //         <div className="p-2 border">
// //         //             <h1 className="text-2xl font-bold">User details</h1>
// //         //         </div>
// //         //     </div>
// //         // </div>
// //     )
// // }

import React, { useState } from "react";
import Form from "./Form";

const Query = ({ data }) => {
    const [allData, setAllData] = useState(data);
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(allData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = allData.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const addNewData = (newItem) => {
        setAllData((prevData) => [...prevData, newItem]);
    };

    return (
        <div className="flex flex-col w-11/12 max-w-6xl mx-auto mt-10 lg:flex-row">
            {/* Form Section */}
            <div className="w-full lg:w-1/3">
                <Form addNewData={addNewData} />
            </div>

            {/* List Section */}
            <div className="flex-1 p-6 shadow-inner bg-gradient-to-r from-purple-200 via-indigo-200 to-pink-200 rounded-xl">
                <ul className="grid grid-cols-2 gap-6">
                    {currentData.map((item) => (
                        <li
                            key={item.id}
                            className="p-5 transition-transform duration-300 ease-in-out bg-white border-4 border-purple-600 shadow-md rounded-xl hover:shadow-lg hover:scale-105">
                            <div className="mb-3">
                                <p className="text-lg font-bold text-green-800">{item.name}</p>
                                <p className="font-bold text-gray-600 text-md">{item.username}</p>
                            </div>
                            <p className="text-sm font-medium text-red-500">{item.email}</p>
                        </li>
                    ))}
                </ul>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 bg-purple-700 text-white rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"}`}>
                        Previous
                    </button>
                    <p className="text-sm">
                        Page <span className="font-semibold">{currentPage}</span> of{" "}
                        <span className="font-semibold">{totalPages}</span>
                    </p>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 bg-purple-700 text-white rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"}`}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Query;
