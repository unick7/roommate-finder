// Dashboard.js
// import React from 'react';
import UserCard from "./UserCard";
import HobbiesCard from "./PreferenceCard";
import BioCard from "./BioCard";
import Navbar from "./Navbar";
import Pagination from "./Pagination";

const Dashboard = () => {
  return (
    <div>
      <div className="m-2 p-4">
        <Navbar />
      </div>

      <div className="grid grid-cols-3 justify-around m-2 px-2">
        <div className="m-2 p-2">
          <UserCard />
        </div>
        <div className="m-2 p-2">
          <BioCard />
        </div>
        <div className="m-2 p-2">
          <HobbiesCard />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default Dashboard;
