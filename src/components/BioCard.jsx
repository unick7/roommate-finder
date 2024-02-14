// BioCard.js
// import React from 'react';

const BioCard = () => {
  // Assume you have bio data
  const bio =
    "Hello! I am Nikhil Kumar Verma, a final-year Undergrad at Indian Institute of Information Technology Lucknow, currently pursuing BTech in Computer Science and Artificial Intelligence. I'm a passionate developer with a love for creating awesome web applications. ";

  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
            Bio
          </h5>
        </div>
        <p>{bio}</p>
        <br />
        <div className="flex items-center justify-between mb-3">
          <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
            Hobbies
          </h5>
        </div>
        <div className="grid grid-cols-4 gap-4 col-span-3">
          <div className="p-4 rounded-md">
            <p>Football</p>
          </div>
          <div className="p-4 rounded-md">
            <p>Music</p>
          </div>
          <div className="p-4 rounded-md">
            <p>Workout</p>
          </div>
          <div className="p-4 rounded-md">
            <p>Coding</p>
          </div>
        </div>
      </div>
      <div className="p-8 pt-3"></div>
    </div>
  );
};

export default BioCard;
