import React from "react";
import Image from "next/image";
const Picture = ({ urlSource }: { urlSource: string }) => {
    return (
        <div className="picture">
            <Image width={60} height={80} src={urlSource} alt={"Mah-jong"} />
        </div>
    );
};

export default Picture;
