import { useState } from "react";


const Subscription = () => {
  const [name, setName] = useState("aditi");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const clickHandler = () => {
    alert(`${name.toUpperCase()} Thank you`);
    setName('')
  }

  

  return (
    <div>
      <div className="relative ">
        <img
          src="./subscriptionBG.jpg"
          about="subscription background"
          className="w-full object-cover"
        />
        <div className=" md:absolute md:top-20 md:left-[750px] p-4 space-y-3 bg-white text-black text-xl  bg-opacity-40 rounded-lg">
          <p>
            For those <br />
            <span className="font-semibold text-2xl">who love COFFEE</span>
          </p>
          <h2>
            Join the community of coffee addicts as we learn more about the
            drink we love
          </h2>
          <form className="space-y-3">
            <input
              className=" p-1 rounded-lg border-2 border-slate-500 "
              placeholder="Enter Name"
              onChange={handleChange}
            />
            <button className="bg-orange-400 text-white p-2 ml-3 rounded-xl" onClick={clickHandler}>
              Subscription
            </button>
          </form>
          <h1>Newletter are sent on the first of every month.</h1>
          <h1>No spam, ever. Emails are never shared</h1>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
