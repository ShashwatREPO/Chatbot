import React from "react";
import NavBar from "./NavBar";
import LeafSvg from "../../../components/LeafSvg";
import ChatField from "../../../features/ChatSpace/components/ChatField";
import ChatSpace from "../../../features/ChatSpace/ChatSpace";

export default function HomePage() {
  return (
    <div className="w-screen h-screen flex flex-col   bg-[#ffffff] relative">
      <div className="flex justify-between">
        <h1 className="text-[#FF735C] text-xl font-poppins font-bold p-6">
          SIRMS
        </h1>
      </div>
      <ChatSpace />
    </div>
  );
}
