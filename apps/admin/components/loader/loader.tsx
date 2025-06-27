import {Loader as LoaderIcon} from "lucide-react";

export const Loader=()=>{
    return (
        <div className="flex items-center justify-center h-full w-full">
            <LoaderIcon className="animate-spin w-10 h-10" />
        </div>
    );
}