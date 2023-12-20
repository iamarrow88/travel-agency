function ReviewCard({ src, name, text }){
  return (
      <div className="review-card bg-white p-8">
        <picture className="img w-16 h-16 border border-gray-300 rounded-full block mb-2">
          <source srcSet={"./reviews/melanie.webp"} />
          <source srcSet={"./reviews/melanie.png"} />
        </picture>


        <p className="mb-3 review-name">{name}</p>

        <p className="review-text">{text}</p>

      </div>
  )
}

export default ReviewCard;