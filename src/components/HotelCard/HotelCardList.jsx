export default function HotelCardList({ cards }) {

    return (
        <div className='pt-8 flex justify-evenly flex-wrap'>
          {
            (cards.length > 0) ? (
              cards
            ) : (
              <p className='pt-[8%] pr-0 pb-[16%] pl-0'>No Stays Available</p>
            )
          }
        </div>
    )
}
