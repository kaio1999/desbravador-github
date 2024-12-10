import React from "react";

interface ModalContainerProps {
  children: React.ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-[#f5f5f5] text-white p-6 rounded-lg shadow-lg max-w-3xl w-full mx-4">
        <h2 className="text-xl font-medium mb-4 text-center text-black">
          Buscar Usuário
        </h2>
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
