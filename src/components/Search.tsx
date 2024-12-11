import React from "react";
import { LoadingDots } from "../assets/Icons";

interface SearchProps {
  onSearch: (value: string) => void;
  text?: string;
  isLoading?: boolean;
}

const Search: React.FC<SearchProps> = ({ onSearch, text = "Buscar", isLoading = false }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Digite o nome de usuário"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 p-3 rounded-lg bg-[#e6e6e6] text-black placeholder-gray-400 outline-none"
        disabled={isLoading}
      />
      <button
        onClick={handleSearch}
        disabled={isLoading}
        className={`p-3 w-32 h-12 rounded-lg transition flex items-center justify-center ${
          isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-600 hover:bg-black"
        }`}
      >
        {isLoading ? <LoadingDots /> : text}
      </button>
    </div>
  );
};

export default Search;
