import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const FAQ = () => {
  const faqData = [
    {
      question: 'How can I start borrowing money using MY-Loan?',
      answer: 'To start borrowing money using MY-Loan, you need to download the app, sign up, and follow the onboarding process.'
    },
    {
      question: 'Will I get money in cash when I borrow from MY-Loan?',
      answer: 'No, the money will be transferred directly to your bank account or Paytm wallet.'
    },
    {
      question: 'Do I need to have a credit history and credit score to be able to borrow on MY-Loan?',
      answer: 'No, MY-Loan does not require a credit history or score to borrow.'
    },
    {
      question: 'How often can I borrow on MY-Loan?',
      answer: 'You can borrow as often as you want, as long as your previous loan is cleared.'
    },
    {
      question: 'How can I return or repay a loan on MY-Loan?',
      answer: 'You can repay the loan through the app using various online payment options like UPI, bank transfer, or debit card.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <section id="faq">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8  rounded-md mb-8">
      <h2 className="text-center text-4xl font-serif font-bold text-blue-500">FAQ</h2>
      <p className="text-center text-blue-800 mt-2 mb-8">Have questions? We are here to answer them.</p>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-gray-700 font-medium">{item.question}</h3>
              <span>
                {openIndex === index ? (
                  <FaChevronDown className="text-gray-500 " />
                ) : (
                  <FaChevronRight className="text-gray-500" />
                )}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-blue-500  mt-3">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-300 text-white py-2 px-6 rounded-lg hover:bg-blue-500 hover:font-semibold transition">
          Get MY-Loan App
        </button>
      </div>
    </div>
    </section>
  );
};

export default FAQ;
