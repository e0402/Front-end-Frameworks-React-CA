const ProductDetailCard = ({ productinfo }) => {
    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl rounded overflow-hidden shadow-lg p-4 bg-white">
          <div className="md:flex">
            <div className="md:w-1/2 lg:w-3/5">
              <img src={productinfo.imageUrl} alt={productinfo.title} className="w-full object-cover h-full" />
            </div>
            <div className="md:w-1/2 lg:w-2/5 p-4">
              <div className="font-bold text-xl mb-5">{productinfo.title}</div>
              <p className="text-gray-700 text-base mb-5">{productinfo.description}</p>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-base text-gray-500 line-through">${productinfo.price.toFixed(2)}</span>
                <span className="text-base text-green-500 font-semibold">${productinfo.discountedPrice.toFixed(2)}</span>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-yellow-300 text-yellow-800 rounded-full px-2 py-0.5 text-sm font-semibold">
                  ★ {productinfo.rating}
                </span>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                  {productinfo.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-5">
                    {tag}
                    </span>
                   ))}
              </div>
              <div className="mb-4">
                <div className="font-semibold mt-5 mb-5">Reviews:</div>
                {productinfo.reviews && productinfo.reviews.length > 0 ? (
                    productinfo.reviews.map((review) => (
                      <div key={review.id} className="border-t pt-2">
                        <div className="text-sm font-semibold">{review.username} - ★ {review.rating}</div>
                        <p className="text-sm text-gray-700">{review.description}</p>
                      </div>
                    ))
                ) : (
                    <p className="text-gray-500">No reviews yet. Be the first!</p>
                )}
              </div>
              <button className="w-full bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 mt-5">
                Add to basket
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetailCard;
