import Link from "next/link";
import React from "react";

const LeftHeader = () => {
    return (
        <div className="flex items-center justify-between w-full">
            <Link href="/" className="text-base font-semibold">
                WebWeaver 
            </Link>
        </div>
    );
};

export default LeftHeader;
