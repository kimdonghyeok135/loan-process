type btnProps = {
    title: string
    isActive: boolean
}

export default function NextBtn({ title, isActive }: btnProps) {
    return (<>
        <div className="mt-auto pt-8">
            <button
                type="submit"
                className={`w-full rounded-2xl ${isActive ? "bg-gray-900" : "bg-gray-300"} px-4 py-4 text-base font-semibold text-white transition 
                hover:text-gray-700 active:scale-90
                duration-150 ease-out`}
            >
                {title}
            </button>
        </div>
    </>)
}