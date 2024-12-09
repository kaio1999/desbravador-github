import React, { useState } from "react";
import { StarIcon, ArrowUpIcon, ArrowDownIcon } from "../assets/Icons";
import { useNavigate } from "react-router-dom";

interface UserReposProps {
  repos: any[];
}

const UserRepos: React.FC<UserReposProps> = ({ repos }) => {

  const navigate = useNavigate();

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sortedRepos = repos.sort((a, b) => {
    if (sortOrder === "desc") {
      return b.stargazers_count - a.stargazers_count;
    }
    return a.stargazers_count - b.stargazers_count;
  });

  const handleSortChange = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };
  const handleRepoDetails = (e: any,repoName: string, username: string) => {
    e.preventDefault();
    navigate(`/repo/${username}/${repoName}`);
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-white">Repositórios</h3>
        <button
          onClick={handleSortChange}
          className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md shadow-md transition-transform transform hover:scale-105"
        >
          <span>Ordenar por estrelas</span>
          {sortOrder === "desc" ? (
            <ArrowDownIcon className="h-5 w-5 text-white" />
          ) : (
            <ArrowUpIcon className="h-5 w-5 text-white" />
          )}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedRepos.map((repo) => (
          <div
            key={repo.id}
            className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h4 className="text-xl font-semibold text-white truncate">{repo.name}</h4>
            <p className="text-gray-400 mt-2 truncate">{repo.description || "Descrição não disponível."}</p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">
                  Linguagem: {repo.language || "Não especificada"}
                </span>
                <span className="flex items-center text-gray-500 text-sm">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                  {repo.stargazers_count}
                </span>
              </div>
              <button
                onClick={(e) => handleRepoDetails(e, repo.name, repo.owner.login)}
                className="text-blue-400 hover:text-blue-500 transition duration-300 text-left"
              >
                Acessar Repositório
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRepos;
