// import React from "react";

export default function CreateProfile() {
  return (
    <>
      <div className="flex justify-center m-4 p-4">
        Your Profile is created now you can login to your dashboard
      </div>
      <a
        className="flex justify-center m-4 p-4 font-sans text-xl antialiased font-medium text-blue-700"
        href="/"
      >
        {" "}
        Login{" "}
      </a>
    </>
  );
}
