// Logo
import logo from '../../assets/logo.png'

export default function Header(props) {
    let drawerOpen = props.drawerOpen
    let setDrawerOpen = props.setDrawerOpen

    let setShowLocationOptions = props.setShowLocationOptions
    let setShowGuestCountOptions = props.setShowGuestCountOptions

    let selected_location = props.selected_location
    let adultCount = props.adultCount
    let childCount = props.childCount

    let onSubmit = props.onSubmit

    return (
        <header className='flex justify-between my-auto mx-[4.8%] flex-wrap'>
            <div className='float-left flex my-auto mx-0'>
                <img src={logo} alt="logo" />
            </div>

            {/* Filtros */}
            <div className='float-right w-[297px] h-[55px] shadow-md rounded-2xl flex justify-evenly'>
                <button
                    id='location'
                    className='text-sm bg-transparent border-0 h-inherit grow'
                    onClick={() => {
                        setDrawerOpen(!drawerOpen)
                        setShowLocationOptions(true)
                        setShowGuestCountOptions(false)
                    }}
                >
                    {
                        selected_location ? (
                            <div className="font-normal text-sm text-black">{selected_location}</div>
                        ) : (
                            <div className="font-normal text-sm text-gray-400">Add Location</div>
                        )
                    }

                </button>

                <button
                    id='guests'
                    className='text-sm bg-transparent border-0 h-inherit grow'
                    onClick={() => {
                        setDrawerOpen(!drawerOpen)
                        setShowLocationOptions(false)
                        setShowGuestCountOptions(true)
                    }}
                >
                    {
                        (adultCount > 0 || childCount > 0) ? (
                            <div className="font-normal text-sm text-black">{adultCount + childCount} Guests</div>
                        ) : (
                            <div className="font-normal text-sm text-gray-400">Add Guests</div>
                        )
                    }

                </button>

                <button
                    id='search'
                    className='text-sm bg-transparent border-0 h-inherit grow flex justify-center items-center'
                    onClick={() => onSubmit()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="crimson" className="size-4">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
