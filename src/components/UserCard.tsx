import React from "react";
interface User {
  avatar_url: string;
  login: string;
  name?: string;
  bio?: string;
  location?: string;
  blog?: string;
  followers: number;
  following: number;
  email?: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-6 p-6 bg-gray-800 border border-gray-700 shadow-lg rounded-lg">
      <img
        className="w-40 h-40 rounded-full border-4 border-gray-700 shadow-lg"
        src={user.avatar_url}
        alt={`Avatar de ${user.login}`}
        loading="lazy"
      />
      <div className="ml-0 lg:ml-6 mt-4 lg:mt-0 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-white">{user.name || user.login}</h2>
        <p className="text-gray-400 mt-2">@{user.login}</p>
        <p className="mt-4 text-gray-300">
          {user.bio ? user.bio : "Nenhuma biografia disponível."}
        </p>
        <div className="mt-4 flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6">
          <p className="text-gray-400">
            Localização: {user.location || "Não especificada"}
          </p>
          <p className="text-gray-400">
            Blog:{" "}
            {user.blog ? (
              <a
                href={user.blog}
                className="text-blue-400 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar o blog de ${user.login}`}
              >
                {user.blog}
              </a>
            ) : (
              <span className="text-blue-400">Não especificado</span>
            )}
          </p>
        </div>
        <div className="mt-6 flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6">
          <p className="text-gray-400">
            Seguidores:{" "}
            <span className="font-semibold text-white">{user.followers}</span>
          </p>
          <p className="text-gray-400">
            Seguindo:{" "}
            <span className="font-semibold text-white">{user.following}</span>
          </p>
          <p className="text-gray-400">
            E-mail:{" "}
            <span className="text-blue-400">{user.email || "Não disponível"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
