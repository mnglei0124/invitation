"use client";

import { useState } from "react";
import Envelope from "./components/Envelope";
import Invitation from "./components/Invitation";

export default function Page() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-purple-200 flex items-center justify-center p-4">
      {!isEnvelopeOpened ? (
        <Envelope onOpen={() => setIsEnvelopeOpened(true)} />
      ) : (
        <Invitation />
      )}
    </div>
  );
}
