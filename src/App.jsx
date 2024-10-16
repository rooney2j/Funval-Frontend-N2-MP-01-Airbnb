import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import HotelCardList from './components/HotelCard/HotelCardList'

import stays from './stays.json'
import Title from './components/Title'
import Drawer from './components/Drawer'
import HotelCard from './components/HotelCard/HotelCard'

// Obtiene los nombres para mostrarlos como opciones en el filtro
let stays_set = new Set()
stays.forEach((elemento) => {
  stays_set.add(elemento.city)
})

const locationList = Array.from(stays_set)

export default function App() {

  const [cards, setCards] = useState([])
  const [cardsCount, setCardsCount] = useState(stays.length)

  // Abrir y cerrar el Drawer
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Para las opciones del search box
  const [location, setLocation] = useState()
  const [selected_location, setSelectedLocation] = useState(null)
  const [showLocationOptions, setShowLocationOptions] = useState(false)
  const [showGuestCountOptions, setShowGuestCountOptions] = useState(false)
  const [adultCount, setAdultCount] = useState(0)
  const [childCount, setChildCount] = useState(0)
  const [guestCount, setGuestCount] = useState()

  // mínimo y máximo número de personas
  const NUMERO_MINIMO_DE_PERSONAS = 0
  const NUMERO_MAXIMO_DE_ADULTOS = 6
  const NUMERO_MAXIMO_DE_NINOS = 6

  useEffect(() => {
    const list_of_cards = stays
      .filter(
        (elemento) =>
          (!location && !guestCount) ||
          ( (!location && guestCount) && guestCount <= elemento.maxGuests) ||
          ( (!guestCount && location) && location === elemento.city) ||
          ( (location && guestCount) && (location === elemento.city && guestCount <= elemento.maxGuests))
      )
      .map((item, index) => (
        <HotelCard
          key={index}
          item={item}
        />
      ));

    setCards(list_of_cards)
    setCardsCount(list_of_cards.length)
  }, [location, setCards, guestCount])

  // Funciones para el Drawer
  function decreaseAdultCount() {
    if (adultCount > NUMERO_MINIMO_DE_PERSONAS) {
      setAdultCount(adultCount - 1)
    }
  }

  function increaseAdultCount() {
    if (adultCount < NUMERO_MAXIMO_DE_ADULTOS) {
      setAdultCount(adultCount + 1)
    }
  }

  function decreaseChildCount() {
    if (childCount > NUMERO_MINIMO_DE_PERSONAS) {
      setChildCount(childCount - 1)
    }
  }

  function increaseChildCount() {
    if (childCount < NUMERO_MAXIMO_DE_NINOS) {
      setChildCount(childCount + 1)
    }
  }

  const onSubmit = function () {
    setLocation(selected_location)
    setGuestCount(adultCount + childCount)
    setDrawerOpen(false)
  }

  return (
    <>
      <div className='my-[2.5%] mx-[1.5%]'>
        <Drawer
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}

          selected_location={selected_location}
          setSelectedLocation={setSelectedLocation}

          showLocationOptions={showLocationOptions}
          setShowLocationOptions={setShowLocationOptions}
          locationList={locationList}

          showGuestCountOptions={showGuestCountOptions}
          setShowGuestCountOptions={setShowGuestCountOptions}
          adultCount={adultCount}
          decreaseAdultCount={decreaseAdultCount}
          increaseAdultCount={increaseAdultCount}
          childCount={childCount}
          decreaseChildCount={decreaseChildCount}
          increaseChildCount={increaseChildCount}
          guestCount={guestCount}
          setGuestCount={setGuestCount}
          onSubmit={onSubmit}
        />

        {/* Logo y barra pequeña */}
        <Header
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}

          setShowLocationOptions={setShowLocationOptions}
          setShowGuestCountOptions={setShowGuestCountOptions}

          selected_location={selected_location}
          adultCount={adultCount}
          childCount={childCount}
          onSubmit={onSubmit}
        />

        {/* Título y número de lugares */}
        <Title
          cardsCount={cardsCount}
        />

        {
          drawerOpen ? (
            <div className='fixed z-10 bg-black/80 h-screen left-0 right-0 top-0'></div>
          ) : null
        }

        {/* Cards */}
        <HotelCardList
          cards={cards}
        />
      </div>
    </>
  )
}