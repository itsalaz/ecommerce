import React, { useState, useEffect } from "react"
import ReviewForm from "../components/ReviewForm"

export default function ReviewsList() {
  const [reviews, setReviews]= useState([])

  useEffect(() => {
    fetch('http://localhost:3000/reviews')
    .then(response => response.json())
    .then(data => setReviews(data))
    .catch(error => console.error('Error fetching reivews:', error))
  }, [])

  function handleAddReview(newReview) {
    setReviews(reviews => ([...reviews, newReview]))
  }
    return (
      <div>
        <h1>Review</h1>
        <ReviewForm onAddReview={handleAddReview} />
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


