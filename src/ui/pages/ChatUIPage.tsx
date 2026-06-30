"use client";

import { useEffect, useRef, useState } from "react";

interface IMessage {
  id: string;
  text: string;
}

const initMessages: IMessage[] = [
  {
    id: new Date().toISOString(),
    text: "Show me today's summary.",
  },
];

export default function ChatUIPage() {
  const [messages, setMessages] = useState<IMessage[]>(initMessages);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const onAddMessages = () => {
    const newMessage: IMessage = {
      id: new Date().toISOString(),
      text: "Some really long message",
    };

    setMessages((msg) => [...msg, newMessage]);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="h-svh flex">
      <div className="flex-1 bg-zinc-950 flex justify-center p-8">
        <div className="w-full max-w-6xl flex-1 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl flex overflow-hidden">
          {/* Chat Section */}
          <div className="flex-1 flex flex-col">
            <div className="border-b border-zinc-800 px-6 py-4">
              <h1 className="text-white text-lg font-semibold">Conversation</h1>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Bot Message */}
              {/* <div className="flex">
                <div className="max-w-md rounded-2xl bg-zinc-800 px-4 py-3 text-zinc-200">
                  Hello! How can I help you today?
                </div>
              </div> */}

              {/* User Message */}
              {/* <div className="flex justify-end">
                <div className="max-w-md rounded-2xl bg-blue-600 px-4 py-3 text-white">
                  Show me today's summary.
                </div>
              </div> */}

              {messages.map((message) => (
                <div key={message.id} className="flex">
                  <div className="max-w-md rounded-2xl bg-zinc-800 px-4 py-3 text-zinc-200">
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          </div>

          {/* Side Panel */}
          <div className="w-72 border-l border-zinc-800 bg-zinc-900 flex items-center justify-center p-6">
            <button
              className="w-full rounded-xl bg-blue-600 py-4 text-lg font-medium text-white transition hover:bg-blue-500 active:scale-95"
              onClick={onAddMessages}
            >
              Send Text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
