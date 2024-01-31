import Search from "./Search.jsx";
import SelectComponent from "./SelectComponent.jsx";

export default function Hero() {
    const priorityOptions = ["", "Name (A-Z)", "Name (Z-A)", "Publication Year (Oldest)", "Publication Year (Newest)"];

    return (
        <>

            <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
                <div
                    className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4"
                >
                    <div>
                        <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
                        <h2
                            className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl"
                        >
                            Trending Books of the Year
                        </h2>

                        <form>
                            <Search/>
                        </form>
                    </div>

                    <div className="flex items-stretch space-x-3">
                        <SelectComponent
                            customClass="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                            inputName="sortBy"
                            inputId="sortBy"
                            inputValue={""}
                            options={priorityOptions}
                            onChange={""}
                            isRequired={true}
                        />
                    </div>
                </div>
            </header>
        </>
    )
}
