export default function Card({ data, handleClick, index }) {
    const { image, name, artists, added } = data;

    return (
        <div className="relative flex items-start gap-2 px-4 pb-12 mt-10 mb-10 rounded-lg shadow-md bg-zinc-300 w-60">
            <div className="w-16 h-16 mt-5 bg-orange-600 rounded-md">
                <img className="object-cover w-full h-full overflow-hidden" src={image} alt="" />
            </div>
            <div className="mt-7">
                <h3 className="text-lg font-bold leading-none">{name}</h3>
                <h4 className="text-sm font-bold text-gray-600">{artists}</h4>
            </div>
            <button
                onClick={() => handleClick(index)}
                className={`absolute bottom-[-20px] left-1/2 px-6 py-2 whitespace-nowrap text-sm font-semibold text-white ${added === false ? "bg-orange-600" : "bg-green-600"} rounded-full -translate-x-1/2 shadow-md`}
            >
                {added === false ? "Add to Favourites" : "Added"}
            </button>

        </div>
    );
}
