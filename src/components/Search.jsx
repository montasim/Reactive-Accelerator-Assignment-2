import InputComponent from "./InputComponent.jsx";
import ButtonComponent from "./ButtonComponent.jsx";

export default function Search() {
    return (
        <div className="flex">
            <div
                className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]"
            >
                <InputComponent
                    customClass="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                    inputType="search"
                    inputPlaceholder="Search Book"
                    inputName="myInput"
                    inputId="search-dropdown"
                    inputValue=""
                    handleInputChange=""
                    isInputRequired={true}
                />

                <div className="absolute right-0 top-0 flex h-full items-center">
                    <ButtonComponent
                        type="submit"
                        customClass="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                        onClick={""}
                    >
                        <svg
                            className="h-[14px] w-[14px]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>

                        <span>Search</span>
                    </ButtonComponent>
                </div>
            </div>
        </div>
    )
}
