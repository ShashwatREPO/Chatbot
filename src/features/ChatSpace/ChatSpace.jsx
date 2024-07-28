import React, { useEffect, useRef, useState } from "react";
import ChatField from "./components/ChatField";
import UserChatBubble from "./components/UserChatBubble";
import GemniResponseChat from "./components/GemniResponseChat";
import PromptCard from "./components/PromptCard";
import { Book } from "lucide-react";

export default function ChatSpace() {
  const [CombinedChat, setCombinedChat] = useState([]);
  const [spinnerStatus, setSpinnerStatus] = useState(false);
  const chatBoxRef = useRef();

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      const lastElement = chatBoxRef.current.lastChild;
      lastElement.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    }
  };

  useEffect(() => {
    if (CombinedChat.length != 0) {
      scrollToBottom();
    }
  }, [CombinedChat]);

  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto relative items-center z-0 mb-20 ">
      <div
        ref={chatBoxRef}
        className="flex flex-col max-w-[700px]  w-screen  justify-start px-4 m-auto gap-4 absolute z-10  "
      >
        {CombinedChat.map((chat, index) => {
          if (index % 2 == 0) {
            return <UserChatBubble text={chat} />;
          } else {
            return <GemniResponseChat markdown={chat} />;
          }
        })}
      </div>

      <div className="w-screen z-50 h-20 bottom-0 fixed bg-backgroundGreen">
        <ChatField
          inputChat={setCombinedChat}
          setSpinnerStatus={setSpinnerStatus}
          spinnerStatus={spinnerStatus}
        />
      </div>
    </div>
  );
}
