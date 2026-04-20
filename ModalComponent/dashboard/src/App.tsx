import React, { useState } from "react";
import Modal from "../src/components/Modal";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>My Modal</h2>
        <p>This is a simple modal in React + TypeScript.</p>
      </Modal>
    </div>
  );
};

export default App;