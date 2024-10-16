// Stays in Finland, 14 stays

export default function Title( {cardsCount} ) {
    return (
        <div className='my-0 mx-[4.8%] mt-[5%] flex justify-between'>
            <div className='font-bold text-2xl leading-[29px] text-[#333333]'>
                Stays in Finland
            </div>

            <div className='font-medium text-sm leading-[17px] text-[#4f4f4f] self-center'>
                {cardsCount} stays
            </div>
        </div>
    )
}
