// UserCard.js
// import React from 'react';

const UserCard = () => {
  const user = {
    name: "Nikhil Kumar Verma",
    photoUrl: "/src/assets/nikhil.png",
  };

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <img src="/src/assets/nikhil.png" alt="profile-picture" />
      </div>
      <div className="p-6 text-center">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {user.name}
        </h4>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
          Student / Software Developer
        </p>
      </div>
      <div className="flex justify-center p-6 pt-2 gap-7">
        <a
          href="#facebook"
          className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
        >
          <i className="fab fa-facebook" aria-hidden="true" />
        </a>
        <a
          href="#twitter"
          className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
        >
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
        <a
          href="#instagram"
          className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
        >
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default UserCard;
