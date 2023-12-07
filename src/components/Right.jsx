import React, { useState } from "react";

export default function Right() {
  const [email, setEmail] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const checkEmail = () => {
    if (!isValidEmail(email)) {
      alert("Email is not valid");
    }else{
        window.open("https://app.loch.one/welcome")
    }
  };

  return (
    <div className="flex justify-center items-center lg:h-[100vh] my-10 pr-16 lg:pr-0">
      <div className="mx-20 lg:mx-24 space-y-4">
        <div className="lg:text-5xl text-2xl text-gray-400">
          Sign up for exclusive access.
        </div>
        <div>
          <input
            type="email"
            className="border border-e-gray-300 w-full rounded-md h-[59px] px-4"
            placeholder="Your Email address"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="w-full bg-black text-white py-3 rounded-md"
            onClick={checkEmail}
          >
            Get started
          </button>
        </div>
        <div className="font-bold text-center">
          You'll receive an email with an invite link to join
        </div>
      </div>
    </div>
  );
}
