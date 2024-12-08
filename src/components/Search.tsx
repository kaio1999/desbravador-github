import React from "react";

interface SearchProps {
  onSearch: (value: string) => void;
  text?: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, text = "Buscar" }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Digite o nome de usuário"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-3 rounded-lg bg-[#e6e6e6] text-black placeholder-gray-400 outline-none"
        />
        <button
          onClick={handleSearch}
          className="p-3 bg-gray-600 rounded-lg hover:bg-black transition"
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default Search;
