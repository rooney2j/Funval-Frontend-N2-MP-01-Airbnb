import React from 'react'

export default function HotelCard({ item }) {
    return (
        <div className="w-[395px] h-[344px] mb-[49px]">
            <img className="w-full h-[269px] rounded-3xl"
                src={item.photo}
                alt="hotel-pic" />

            {/* Primer renglón */}
            <div className="w-full flex flex-row justify-between items-center mt-3">
                {/* Sublinea de la izquierda */}
                <div className="flex flex-row items-center w-[292px]">

                    {
                        item.superHost &&
                        <p className="h-7 px-4 border border-solid rounded-xl font-bold text-xs text-gray-700 uppercase flex flex-row justify-center items-center mr-[11px]">
                            Super Host
                        </p>
                    }
                    <p className="font-medium text-sm text-gray-400">
                        {item.type}
                    </p>
                </div>

                {/* sublinea de la derecha - estrellas */}
                <p className="flex flex-row justify-between items-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange" className="size-5">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                    </svg>

                    {item.rating}
                </p>
            </div>

            {/* Segundo renglón */}
            <p className="font-medium text-lg leading-5 text-gray-800 text-center mt-[10px]">{item.title}</p>
        </div>
    )
}
