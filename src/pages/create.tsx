import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Lolly from "../components/Lolly";

const CreateLolly = () => {
  const [lolly, setLolly] = useState({
    fillLollyTop: "#E02254",
    fillLollyMiddle: "#E96743",
    fillLollyBottom: "#F5C64D",
  });

  const recipientName = useRef();
  const message = useRef();
  const sender = useRef();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLolly({
      ...lolly,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl w-full mx-auto">
      <Header />
      <div className="mt-24">
        <div className="flex flex-col md:flex-row">
          <div className="mx-auto mb-12">
            <Lolly
              fillLollyTop={lolly.fillLollyTop}
              fillLollyMiddle={lolly.fillLollyMiddle}
              fillLollyBottom={lolly.fillLollyBottom}
              lollyWidth={400}
              lollyHeight={400}
            />
          </div>
          <div className="flex flex-row md:flex-col justify-evenly items-center md:h-80">
            <label
              htmlFor="fill-1"
              className="rounded-full overflow-hidden w-12 h-12 border-2 border-gray-200 box-shadow"
            >
              <input
                type="color"
                id="fill-1"
                className="w-20 h-20 -mt-4 -ml-4 cursor-pointer"
                onChange={handleChange}
                value={lolly.fillLollyTop}
                name="fillLollyTop"
              />
            </label>
            <label
              htmlFor="fill-2"
              className="rounded-full overflow-hidden w-12 h-12 border-2 border-gray-200 box-shadow"
            >
              <input
                type="color"
                className="w-20 h-20 -mt-4 -ml-4 cursor-pointer"
                onChange={handleChange}
                value={lolly.fillLollyMiddle}
                name="fillLollyMiddle"
              />
            </label>
            <label
              htmlFor="fill-3"
              className="rounded-full overflow-hidden w-12 h-12 border-2 border-gray-200 box-shadow"
            >
              <input
                type="color"
                className="w-20 h-20 -mt-4 -ml-4 cursor-pointer"
                onChange={handleChange}
                value={lolly.fillLollyBottom}
                name="fillLollyBottom"
              />
            </label>
          </div>
          <div>
            <div className="w-96 bg-gray-900 p-6 md:ml-28 box-shadow mx-auto md:mt-0 mt-20">
              <label
                htmlFor="recipientName"
                className="text-gray-400 font-roboto text-lg"
              >
                To
                <input
                  type="text"
                  className="bg-gray-800 h-10 w-full block px-2 py-1 border border-pink-500 box-shadow-pink mb-5 mt-1 text-md font-lato"
                  id="recipientName"
                  placeholder="A lolly for..."
                  ref={recipientName}
                />
              </label>
              <label
                htmlFor="message"
                className="text-gray-400 font-roboto text-lg"
              >
                Say something nice
                <textarea
                  className="bg-gray-800 w-full block px-2 py-1 border border-pink-500 box-shadow-pink mb-5 mt-1 resize-none h-48 text-md font-lato"
                  id="message"
                  ref={message}
                />
                <label
                  htmlFor="senderName"
                  className="text-gray-400 font-roboto text-lg"
                >
                  From
                  <input
                    type="text"
                    id="senderName"
                    placeholder="from your friend..."
                    className="bg-gray-800 h-10 w-full block px-2 py-1 border border-pink-500 box-shadow-pink mb-5 mt-1 text-md font-lato"
                    ref={sender}
                  />
                </label>
              </label>
            </div>
            <div className="mx-auto text-center mt-20 mb-10">
              <button
                className="mx-auto text-center border-2 border-pink-400 py-4 px-5 font-lato font-semibold rounded-full button text-pink-400 hover:text-gray-800 hover:bg-pink-400 transition-all duration-500 ease-in-out"
                type="button"
              >
                Freeze this lolly and get a link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLolly;
