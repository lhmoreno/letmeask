import { endAt, get, getDatabase, orderByKey, query, ref, startAt } from 'firebase/database'
import { ChangeEventHandler, useEffect, useState } from 'react'


interface FirebaseRooms extends Record<string, {
  title: string
  questions?: Record<string, {}>
}> {}

interface RoomsView {
  id: string
  title: string
}

async function findRooms(search: string) {
  const roomsRef = ref(getDatabase(), 'rooms')

  if (search.length === 0) {
    const roomsQuery = query(roomsRef)
    const rooms = await get(roomsQuery)

    return rooms.val() as FirebaseRooms | null
  } else {
    const roomsQuery = query(roomsRef, orderByKey(), startAt(search), endAt(search + '\uf8ff'))
    const rooms = await get(roomsQuery)

    return rooms.val() as FirebaseRooms | null
  }
}

function useRooms() {
  const [search, setSearch] = useState('')
  const [rooms, setRooms] = useState<RoomsView[]>([])

  useEffect(() => {
    (async () => {
      const firebaseRooms = await findRooms(search)
      if (!firebaseRooms) return setRooms([])

      const parsedRooms: RoomsView[] = Object.entries(firebaseRooms).map(([id, room]) => {
        return {
          id,
          title: room.title
        }
      })

      setRooms(parsedRooms)
    })()
  }, [search])

  const onChangeSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value)
  }

  return { search, onChangeSearch, rooms }
}

export default useRooms
