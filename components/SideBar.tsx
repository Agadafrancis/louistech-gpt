'use client'

import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function SideBar() {
  const { data: session } = useSession(); 

  const [chats, loading, error] = useCollection(
    session &&
      query (
        collection(db, 'users', session.user?.email!, 'chats'),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
           <NewChat />

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2">

          {loading && (
            <div className="animate-pulse text-center text-white">
              <p>Loading Chats...</p>
            </div>
          )}

          {/**Map through the ChatRows */}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
         </div>
        </div>

      </div>

      {session && (
        <img 
        onClick={() => signOut()}
        src={session.user?.image!} 
        alt="Profile picture"
        className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2" />
      )}
    </div>
  );
}

export default SideBar