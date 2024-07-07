import React from "react"

export default function Bag() {

function handleDeleteClick() {
  fetch(`http://localhost:4000/questions/${id}`,{
    method: "DELETE",
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error("Network response was not ok")
    }
    onDeleteQuestion(id)
  })
    .catch((error) => {
      console.error("Error deleting item:", error)
    })
  }

  return (

  )
}