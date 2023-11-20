import React from "react";
import type { MenuItem as Props } from "../types";

export const MenuItem: React.FC<Props> = ({
    name,
    description,
    cost,
}) => {
    return (
        <div className="container  flex flex-row items-center px-4 mb-4">
            <div className="container flex flex-col ml-4">
                <div className="flex flex-row justify-between border-b border-slate-300">
                    <h1 className="text-2xl font-semibold mb-2">
                        {name}
                    </h1>
                    <h2 className="text-xl font-semibold">
                        {cost.toString().replace(".", ",")}€
                    </h2>
                </div>
                {description &&
                    <p className="text-slate-400">
                        {description}
                    </p>
                }
            </div>
        </div>
    );
};
