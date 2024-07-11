import React, { useState, useEffect } from "react"
import ReviewForm from "../components/ReviewForm"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function ReviewsList() {
  const { id } = useParams()
  const [reviews, setReviews]= useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/reviews?productId=${id}`)
    .then(response => response.json())
    .then(data => setReviews(data))
    .catch(error => console.error('Error fetching reviews:', error))
  }, [])

  function handleAddReview(newReview) {
    setReviews(reviews => ([...reviews, newReview]))
  }
    return (
      <div>
        <NavBar />
        <h1>Review</h1>
        <ReviewForm onAddReview={handleAddReview} productId={id} />
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <h2>{review.title}</h2>
              <p>{review.review}</p>
            </li>
          ))}
        </ul>
      </div>
    )
}


