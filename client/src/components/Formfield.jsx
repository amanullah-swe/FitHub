const Formfeild = ({ handleBlur, handleChange, name, value, label, error, touch, type }) => {
    return (
        <div className='w-full'>
            <div className="flex items-center justify-between">
                <label htmlFor={name} className=" text-2xl font-semibold leading-10 flex flex-col">
                    {label}:{touch && <span className="text-red-500 text-[10px]">{error}</span>}
                </label>
            </div>
            <div className="mt-0.5 w-full">
                <input
                    id={label}
                    name={name}
                    type={type ? type : "text"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={value}
                    className="block pl-2 w-full text-3xl outline-none rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-10"
                />
            </div>
        </div >
    )
}
export default Formfeild;