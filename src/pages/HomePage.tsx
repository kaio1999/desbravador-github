import React, { useState } from "react";
import Modal from "../components/Modal";
import Search from "../components/Search";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (searchTerm: string) => {
    console.log("Buscando por:", searchTerm);
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen flex items-center justify-center text-white">
      <Modal isOpen={true}>
        <Search onSearch={handleSearch} />
      </Modal>
    </div>
  );
};

export default HomePage;
