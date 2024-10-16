import { useRef } from 'react'

export default function Drawer(props) {

    let drawerOpen = props.drawerOpen
    let setDrawerOpen = props.setDrawerOpen

    let selected_location = props.selected_location
    let setSelectedLocation = props.setSelectedLocation

    let showLocationOptions = props.showLocationOptions
    let setShowLocationOptions = props.setShowLocationOptions
    let locationList = props.locationList

    let showGuestCountOptions = props.showGuestCountOptions
    let setShowGuestCountOptions = props.setShowGuestCountOptions
    let adultCount = props.adultCount
    let decreaseAdultCount = props.decreaseAdultCount
    let increaseAdultCount = props.increaseAdultCount
    let childCount = props.childCount
    let decreaseChildCount = props.decreaseChildCount
    let increaseChildCount = props.increaseChildCount
    let guestCount = props.guestCount
    let setGuestCount = props.setGuestCount
    let onSubmit = props.onSubmit

    const dropdownRef = useRef(null)

    return (
        <>
            {drawerOpen ? (
                <div className='z-[99] top-0 left-0 m-0 p-0 bg-white absolute w-full h-[460px] not-italic' ref={dropdownRef}>
                    {/* Cerrar el Drawer */}
                    <div className='fixed top-4 right-7' onClick={() => setDrawerOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                        </svg>
                    </div>

                    {/* contenido del drawer */}
                    <div className='max-w-[1400px] my-0 mx-auto bg-transparent'>
                        {/* Search Box */}
                        <div className='w-[calc(100%-7%-7%)] mt-[4%] mb-0 mx-[7%] bg-transparent shadow rounded-2xl grid grid-cols-3 p-1'>
                            <button
                                id='select-location'
                                className='bg-transparent border-0 border-e text-left pl-[5%]'
                                onClick={ () => {
                                    setShowLocationOptions(true)
                                    setShowGuestCountOptions(false)
                                } }
                            >
                                <div className='font-extrabold text-[9px] uppercase text-[#333333] mb-1'>Location</div>
                                {
                                    selected_location ? (
                                        <div className='font-normal text-sm text-black'>{selected_location}, Finland</div>
                                    ) : (
                                        <div className='font-normal text-sm text-[#bdbdbd]'>Add Location</div>
                                    )
                                }
                            </button>

                            <button
                            id='select-guests'
                            className='bg-transparent border-0 border-e text-left pl-[5%]'
                            onClick={ () => {
                                setShowLocationOptions(false)
                                setShowGuestCountOptions(true)
                            } }
                            >
                                <div className='font-extrabold text-[9px] uppercase text-[#333333] mb-1'>Guests</div>
                                {
                                    (adultCount || childCount) ? (
                                        <div className='font-normal text-sm text-black'>{adultCount + childCount} Guests</div>
                                    ) : (
                                        <div className='font-normal text-sm text-[#bdbdbd]'>Add Guests</div>
                                    )
                                }
                            </button>

                            <div className='flex justify-center items-center'>
                                <button
                                    className='font-bold text-sm text-[#f2f2f2] w-[127px] h-10 bg-red-600 shadow-md border-0 rounded-2xl text-center py-0 px-[5%] flex justify-center items-center gap-2'
                                    onClick={() => onSubmit()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                    </svg>
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>
                        {/* Fin de Search Box */}

                        {/* Filtros */}
                        <div className='w-[calc(100% - 7% - 7%)] my-0 mx-[7%] grid grid-cols-3 font-normal text-sm'>
                            {/* Filtro para Location, mismo diseño para Guests */}
                            <div className='mt-[10%] text-[#4f4f4f]'>
                                {
                                    showLocationOptions ? (
                                        <div>
                                            {
                                                locationList.map((location_name, index) => (
                                                    <div key={index} className='p-[5%] cursor-pointer flex gap-2'
                                                        onClick={() => setSelectedLocation(location_name)}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                                            <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>{location_name}, Finland</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ) : null
                                }
                            </div>
                            {/* Fin de Filtro para Location */}

                            {/* Filtro para Guests */}
                            <div className='mt-[10%] text-[#4f4f4f]'>
                                {
                                    showGuestCountOptions ? (
                                        <div>
                                            <div className='p-[5%]'>
                                                <div className='text-[#333333] font-bold'>Adults</div>
                                                <div className='font-normal text-sm text-[#bdbdbd]'>Ages 13 or above</div>
                                                <div>
                                                    <button
                                                        className="my-[2%] mr-[2%] ml-0 text-sm font-normal w-6 h-6 text-[#828282] border border-[#828282] rounded-md"
                                                        onClick={() => decreaseAdultCount()}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-[#333333] font-bold">{adultCount}</span>
                                                    <button
                                                        className="my-[2%] ml-[2%] mr-0 text-sm font-normal w-6 h-6 text-[#828282] border border-[#828282] rounded-md"
                                                        onClick={() => increaseAdultCount()}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <div className='p-[5%] pt-[2.5%]'>
                                                <div className='text-[#333333] font-bold'>Children</div>
                                                <div className='font-normal text-sm text-[#bdbdbd]'>Ages 2-12</div>
                                                <div>
                                                    <button
                                                        className="my-[2%] mr-[2%] ml-0 text-sm font-normal w-6 h-6 text-[#828282] border border-[#828282] rounded-md"
                                                        onClick={() => decreaseChildCount()}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-[#333333] font-bold">{childCount}</span>
                                                    <button
                                                        className="my-[2%] ml-[2%] mr-0 text-sm font-normal w-6 h-6 text-[#828282] border border-[#828282] rounded-md"
                                                        onClick={() => increaseChildCount()}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                            </div>
                            {/* Fin de Filtro para Guests */}

                        </div>
                        {/* Fin de Filtros */}
                    </div>
                </div>
            ) : null
            }
        </>
    )
}
