import React, { useState, useEffect } from "react"
import ReviewForm from "../components/ReviewForm"
import { useParams } from "react-router-dom"

export default function ReviewsList() {
  const { id } = useParams()
  const [reviews, setReviews]= useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/reviews?id=${id}`)
    .then(response => response.json())
    .then(data => setReviews(data))
    .catch(error => console.error('Error fetching reviews:', error))
  }, [])


  function handleAddReview(newReview) {
    setReviews(reviews => ([...reviews, newReview]))
  }

    return (
      <div className="reviews-container">
        <h1>Review</h1>
        <ReviewForm onAddReview={handleAddReview} id={id} />
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="review">
              <div className="review-title">
              <h2>{review.title}</h2>
              <div className="review-info">
              <p>{review.review}</p>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
}


