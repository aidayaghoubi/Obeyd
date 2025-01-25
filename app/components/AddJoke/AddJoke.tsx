"use client"

import { useState } from "react"
import JokeModal from "./JokeModal"
import AddJokeButton from "./AddJokeButton"

const AddJoke = () => {

  const [showAddJokeModal, setShowAddJokeModal] = useState(false)

  function onCloseModal(){
    setShowAddJokeModal(false)
  }
  
  function onShowModal(){
    setShowAddJokeModal(true)
  }
  

  return <div>
    <JokeModal showModal={showAddJokeModal} onCloseModal={onCloseModal} />
    <AddJokeButton onShowAddJoke={onShowModal} />
  </div>
}
export default AddJoke