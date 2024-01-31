import AnchorComponent from "./AnchorComponent.jsx";

export default function Footer() {
    return (
        <footer className="py-6 md:py-8">
            <div className="container mx-auto">
                <p className="text-center text-sm lg:text-base">
                    Copyright ©2023 | All rights reserved by {" "}

                    <AnchorComponent
                        customClass="hover:text-[#f8c252] hover:underline"
                        to="https://github.com/montasim"
                    >
                        Ｍ♢ＮＴΛＳＩＭ
                    </AnchorComponent>
                </p>
            </div>
        </footer>
    )
}
