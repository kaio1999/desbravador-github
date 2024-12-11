import React from "react";
import UserCard from "../components/UserCard";
import UserRepos from "../components/UserRepos";
import { useUserStore, useReposStore } from "../stores";
import Error from "../components/Error";
import { Helmet } from "react-helmet-async";

const UserDetails: React.FC = () => {
  const user = useUserStore((state) => state.user);
  const userRepos = useReposStore((state) => state.repos);

  const hasUser = user.login.length > 0;

  if (!hasUser) {
    return <Error text={"Usuário não encontrado. Por favor, verifique os dados e tente novamente."}/>
  }

  return (
    <div className="flex flex-col min-h-screen bg-white my-[3.5rem]">
      <Helmet>
          <title>Detalhes do usuário | GitHub Explorer</title>
          <meta
            name="description"
            content="Página pra visualizar os detalhes do usuário."
          />
        </Helmet>
      <div className="flex-grow bg-white">
        <div className="container mx-auto bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg rounded-lg p-8 lg:p-16 w-full">
          <UserCard user={user} />
          <UserRepos repos={userRepos} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
