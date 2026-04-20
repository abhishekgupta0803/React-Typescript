import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={styles.overlay}
    //   onClick={onClose}
    >
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {children}
        <button onClick={onClose} style={styles.button}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:"red",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    minWidth: "300px",
     backgroundColor: "rgba(130, 12, 12, 0.5)",
  },
  button: {
    marginTop: "10px",
  },
};