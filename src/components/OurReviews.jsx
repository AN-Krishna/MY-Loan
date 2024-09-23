// OurReviews.jsx
import React, { useRef, useEffect } from 'react';

const reviews = [
  { id: 1, photo: 'https://img.freepik.com/premium-photo/woman-with-grey-blazer-gray-shirt_1044943-121551.jpg?w=740', rating: '★ ★ ★ ★ ☆', message: 'Great product!', name: 'John Doe', place: 'New York' },
  { id: 2, photo: 'https://img.freepik.com/premium-photo/woman-wearing-grey-jacket-with-white-shirt-that-says-word-it_1044943-121866.jpg?uid=R160007205&ga=GA1.1.1851608254.1721640704&semt=ais_hybrid', rating: '★ ★ ★ ☆ ☆', message: 'Good value for jdskkj jsdnjd nsdn  money.', name: 'Jane Smith', place: 'Los Angeles' },
  { id: 3, photo: 'https://img.freepik.com/premium-photo/woman-wearing-grey-jacket-with-white-shirt-that-says-word-it_1044943-121866.jpg?uid=R160007205&ga=GA1.1.1851608254.1721640704&semt=ais_hybrid', rating: '★ ★ ★ ★ ★', message: 'Exceptional service!', name: 'Emily Johnson', place: 'Chicago' },
  { id: 4, photo: 'https://img.freepik.com/premium-photo/woman-wearing-grey-jacket-with-white-shirt-that-says-word-it_1044943-121866.jpg?uid=R160007205&ga=GA1.1.1851608254.1721640704&semt=ais_hybrid', rating: '★ ★ ★ ☆ ☆', message: 'Decentm cms cmm cjs c ckjsn cjs   quality.', name: 'Michael Brown', place: 'Houston' },
  { id: 5, photo: 'https://img.freepik.com/premium-photo/woman-wearing-grey-jacket-with-white-shirt-that-says-word-it_1044943-121866.jpg?uid=R160007205&ga=GA1.1.1851608254.1721640704&semt=ais_hybrid', rating: '★ ★ ★ ★ ☆', message: 'Very satisfied lore20.', name: 'Sarah Davis', place: 'Phoenix' },
  { id: 6, photo: 'https://img.freepik.com/premium-photo/woman-wearing-grey-jacket-with-white-shirt-that-says-word-it_1044943-121866.jpg?uid=R160007205&ga=GA1.1.1851608254.1721640704&semt=ais_hybrid', rating: '★ ★ ☆ ☆ ☆', message: 'Could be better.', name: 'David Wilson', place: 'Philadelphia' },
  { id: 7, photo: 'https://img.freepik.com/premium-photo/woman-wearing-grey-jacket-with-white-shirt-that-says-word-it_1044943-121866.jpg?uid=R160007205&ga=GA1.1.1851608254.1721640704&semt=ais_hybrid', rating: '★ ★ ★ ★ ★', message: 'Highly recommend!', name: 'Laura Lee', place: 'San Antonio' },
  { id: 8, photo: 'https://img.freepik.com/premium-photo/woman-wearing-grey-jacket-with-white-shirt-that-says-word-it_1044943-121866.jpg?uid=R160007205&ga=GA1.1.1851608254.1721640704&semt=ais_hybrid', rating: '★ ★ ★ ★ ☆', message: 'Good experience.', name: 'Chris Martinez', place: 'San Diego' },
  { id: 9, photo: 'https://img.freepik.com/premium-photo/woman-wearing-grey-jacket-with-white-shirt-that-says-word-it_1044943-121866.jpg?uid=R160007205&ga=GA1.1.1851608254.1721640704&semt=ais_hybrid', rating: '★ ★ ★ ☆ ☆', message: 'Average quality.', name: 'Amy Clark', place: 'Dallas' },
  { id: 10, photo: 'https://img.freepik.com/premium-photo/woman-wearing-grey-jacket-with-white-shirt-that-says-word-it_1044943-121866.jpg?uid=R160007205&ga=GA1.1.1851608254.1721640704&semt=ais_hybrid', rating: '★ ★ ★ ★ ★', message: 'Outstanding!', name: 'Daniel Lewis', place: 'San Jose' }
];

const OurReviews = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust scroll speed as needed
    const interval = 20; // Time interval in milliseconds

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0; // Reset scroll to create a loop effect
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const intervalId = setInterval(scroll, interval);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div  id='reviews'>
      <div className='text-4xl text-blue-500 text-center font-bold font-serif mt-8 py-8'>
        Our Reviews
      </div>
    <div className="mt-8 mb-16 relative overflow-hidden cursor-pointer">
      <div
        ref={scrollContainerRef}
        className="flex  space-x-4"
        style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
      >
        {[...reviews, ...reviews].map((review) => (
          <div
            key={review.id}
            className="inline-block w-64 h-80 bg-blue-400 shadow-md rounded-lg p-4 min-w-[300px] min-h-[400px]"
          >
            <div className="flex justify-center mb-4">
              <img
                src={review.photo}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div className="text-center mb-2">
              <p className="text-3xl text-amber-400  mt-8">{review.rating}</p>
            </div>
            <p className="text-white mt-8 overflow-hidden text-wrap h-16">{review.message}</p>
            <p className="text-white mt-8 text-lg">{review.name}, {review.place}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OurReviews;
