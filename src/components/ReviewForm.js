import React, { useState } from 'react'

export default function ReviewForm({ onAddReview, onChangePage }) {
  const [formData, setFormData] = useState({
    title: "",
    review: "",
    correctIndex: 0
  })

  function handleChange(event) {
        setFormData ({
          ...formData,
          [event.target.name] : event.target.value,
      })
    }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newReview = ({
      title: formData.title,
      review: formData.review,
      correctIndex: parseInt(formData.correctIndex)
    })

    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => {
        response.json()
      })
      .then((addedReview) => {
        onAddReview(addedReview)
        setFormData ({
          title: "",
          review: "",
          correctIndex: 0,
        })
        onChangePage("List")
      })
      .catch((error) => {
        console.error('Error adding review', error)
      })

    setFormData({
      title: "",
      review: "",
    })
  }

  return (
    <div className="new-review-form">
      <form onSubmit={handleFormSubmit}>
        <h4>Share Your Thoughts</h4>
        <p>Review Title</p>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Review title"
        />
        <p>Your Review</p>
        <textarea
          name="review"
          value={formData.review}
          onChange={handleChange}
          placeholder="Write your review"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}