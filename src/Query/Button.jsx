

export default function Button() {
    return (

        <div>
        <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-purple-700 text-white rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"
                }`}
        >
            Previous
        </button>
        <p className="text-sm">
            Page <span className="font-semibold">{currentPage}</span> of{" "}
            <span className="font-semibold">{totalPages}</span>
        </p>
        <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-purple-700 text-white rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"
                }`}>
            Next
        </button>
        </div>
    )
}
