import ImageComponent from "./ImageComponent.jsx";
import Star from "../assets/star.svg";

export default function Review() {
    return (
        <div className="flex items-center space-x-1">
            <ImageComponent
                customClass="max-w-[144px] md:max-w-[165px]"
                src={Star}
                alt="Star"
            />
            <ImageComponent
                customClass="max-w-[144px] md:max-w-[165px]"
                src={Star}
                alt="Star"
            />
            <ImageComponent
                customClass="max-w-[144px] md:max-w-[165px]"
                src={Star}
                alt="Star"
            />
            <ImageComponent
                customClass="max-w-[144px] md:max-w-[165px]"
                src={Star}
                alt="Star"
            />
            <ImageComponent
                customClass="max-w-[144px] md:max-w-[165px]"
                src={Star}
                alt="Star"
            />
            <span className="text-xs lg:text-sm">(4 Star)</span>
        </div>
    )
}
