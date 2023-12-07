import React, { useState } from "react";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { AiOutlineBell } from "react-icons/ai";
import { RiBarChartLine } from "react-icons/ri";
import { IoCheckbox } from "react-icons/io5";
import { Carousel } from "@mantine/carousel";
import { SlClock } from "react-icons/sl";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Select from "@mui/material/Select";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import w from "../assets/w.png";
import s from "../assets/s.png";
import Card from "./Card";

const Left = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const [save1, setsave1] = useState("");
  const [save2, setsave2] = useState(true);
  const [save3, setsave3] = useState(true);

  const [age, setAge] = React.useState("$1000");
  const [age1, setAge1] = React.useState(">30days");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const cardInfo = [
    {
      name: "Jack F",
      position: "Ex Blackrock PM",
      text: "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
      name: "Yash P",
      position: "Research, 3poch Crypto Hedge Fund",
      text: "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
    },
    {
      name: "Shiv S",
      position: "Co-Founder Magik Lab",
      text: "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
  ];

  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#1FA911CF] from-15% via-[#2F15D0] via-40% to-black to-90% lg:h-full lg:flex flex-col py-4 pl-5 lg:pl-16 2xl:h-[100vh]">
        <div className="lg:flex">
          <div className="space-y-2 lg:pr-40 pr-16">
            <div className="text-white">
              <AiOutlineBell size={25} />
            </div>
            <div className="lg:text-4xl text-2xl text-white">
              Get notified when a highly correlated whale makes a move
            </div>
            <div className="text-gray-400 text-md lg:pr-7 pr-4">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </div>
          </div>

          <div className="mt-5 lg:w-[300px]">
            <Carousel
              slideSize="20%"
              align="start"
              slideGap="sm"
              controlsOffset="xs"
              controlSize={14}
              loop
              dragFree
              withControls={false}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              <Carousel.Slide>
                <div className="w-[190px] h-[172px] bg-white rounded-xl px-5 py-4 space-y-2 bg-gradient-to-t from-[#165DFF29] from-1% to-white to-99% ">
                  <div className="flex justify-between">
                    <div>
                      <AiOutlineBell size={20} />
                    </div>
                    <div className="text-sm">Save</div>
                  </div>
                  <div className="text-sm pt-1">
                    We’ll be sending notifications to you here
                  </div>
                  <div className="flex justify-center items-center pt-1">
                    <input
                      type="text"
                      className="rounded-md w-[161px] h-[35px]"
                    />
                  </div>
                </div>
              </Carousel.Slide>

              <Carousel.Slide>
                <div className="w-[190px] h-[172px] bg-white rounded-xl px-5 py-4">
                  <div className="flex justify-between">
                    <div>
                      <RiBarChartLine size={20} />
                    </div>
                    <div className="text-sm">
                      {save2 ? (
                        <IoCheckbox size={15} color="#0071E3" />
                      ) : (
                        "Save"
                      )}
                    </div>
                  </div>
                  <div className="text-sm mt-6">
                    Notify me when any wallets move more than
                  </div>
                  <div className="flex justify-start items-end pt-4">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                      style={{ height: "25px", width: "92px" }}
                      placeholder={"$1000"}
                    >
                      <MenuItem value={1000}>$1000</MenuItem>
                      <MenuItem value={2000}>$2000</MenuItem>
                      <MenuItem value={3000}>$3000</MenuItem>
                    </Select>
                  </div>
                </div>
              </Carousel.Slide>

              <Carousel.Slide>
                <div className="w-[190px] h-[172px] bg-white rounded-xl px-5 py-4 ">
                  <div className="flex justify-between">
                    <div>
                      <SlClock size={20} />
                    </div>
                    <div className="text-sm">
                      {save3 ? (
                        <IoCheckbox size={15} color="#0071E3" />
                      ) : (
                        "Save"
                      )}
                    </div>
                  </div>
                  <div className="text-sm pt-8">
                    Notify me when any wallet dormant for
                  </div>
                  <div className="flex pt-1">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age1}
                      onChange={handleChange1}
                      style={{ height: "25px", width: "92px" }}
                      placeholder={"$1000"}
                    >
                      <MenuItem value={1000}>{">"}30days</MenuItem>
                      <MenuItem value={2000}>{"<"}30days</MenuItem>
                      <MenuItem value={3000}>{"="}30days</MenuItem>
                    </Select>
                  </div>
                  <div className="text-sm pt-1">becomes active</div>
                </div>
              </Carousel.Slide>
            </Carousel>
          </div>
        </div>

        <div className="mt-10 lg:mt-24 lg:flex pr-14 space-y-4 space-x-8">
          <div>
            <img src={w} alt="" width="535px" height="306px" />
          </div>
          <div className="text-end flex flex-col items-end">
            <div className="text-white">
              <MdOutlineRemoveRedEye size={25} />
            </div>
            <div className="lg:text-4xl lg:pl-40 text-2xl text-white">
              Watch what the whales are doing
            </div>
            <div className="text-gray-400 lg:pl-36 text-md ">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-end mr-14 lg:text-3xl text-2xl text-white">
            Testimonials
          </div>
          <hr className="mr-14 my-4" />

          <div className="flex space-x-2">
            <div className=" sm:hidden lg:flex items-end">
              <img src={s} alt="" width={80} height={80} />
            </div>
            <div className="lg:w-[703px] w-full">
              <Carousel
                slideSize="11%"
                align="start"
                slideGap="sm"
                controlsOffset="xs"
                controlSize={14}
                loop
                dragFree
                withControls={false}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
              >
                {cardInfo.map((card, key) => (
                  <Carousel.Slide>
                    <Card
                      name={card.name}
                      position={card.position}
                      text={card.text}
                      key={key}
                    />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
