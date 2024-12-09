import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import UserRepos from "../components/UserRepos";
import { useUserStore, useReposStore } from "../stores";

const UserDetails: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const user = useUserStore((state) => state.user);
  const userRepos = useReposStore((state) => state.repos)

    useEffect(() => {
        setRepos(userRepos)
    }, [''])

  return (
    <div className="bg-white py-[3.5rem]">
      <div className="container mx-auto bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg rounded-lg p-16 w-full">
        <UserCard user={user} />
        <UserRepos repos={repos}/>
      </div>
    </div>
  );
};

export default UserDetails;
