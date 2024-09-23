import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSmile, faIndianRupeeSign, faStar } from '@fortawesome/free-solid-svg-icons';

const OurAchievements = () => {
  const stats = [
    {
      number: '30 M+',
      text: 'App Downloads',
      icon: faDownload,
    },
    {
      number: '20 M+',
      text: 'Happy Users',
      icon: faSmile,
    },
    {
      number: '16000 Crore+',
      text: 'Loan Disbursed',
      icon: faIndianRupeeSign,
    },
    {
      number: '4.7',
      text: 'Rating on Google Play',
      icon: faStar,
    },
  ];

  return (
    <section id="achievements" >
    <div className=" mt-8 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-500 font-serif mb-8">Our Achievements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md min-h-[200px] min-w-[250px] h-full"
          >
            <p className="text-orange-400 hover:text-orange-600 text-3xl font-bold mb-2">{stat.number}</p>
            <div className="flex items-center space-x-2 text-gray-700 py-4">
              <FontAwesomeIcon icon={stat.icon} className="text-2xl text-blue-500" />
              <p className="text-blue-500 font-medium text-lg">{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default OurAchievements;
