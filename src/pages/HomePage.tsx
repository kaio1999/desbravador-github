import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../components/ModalContainer";
import Search from "../components/Search";
import { useUserStore, useReposStore } from "../stores";
import { getUserDetails, getUserRepos } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";
import { ErrorMessages } from "../enums/ErrorMessages";
import { Helmet } from "react-helmet-async"; // Importação do Helmet

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const setRepos = useReposStore((state) => state.setRepos);

  const showErrorNotification = (message: string) => {
    toast.error(message, {
      position: "top-center",
    });
  };

  const handleSearch = useCallback(
    async (username: string) => {
      setLoading(true);
      try {
        const [responseDetailsUser, responseReposUser] = await Promise.all([
          getUserDetails(username),
          getUserRepos(username),
        ]);

        setUser(responseDetailsUser.data);
        setRepos(responseReposUser.data);
        navigate(`/user`);
      } catch (error) {
        if (error instanceof AxiosError) {
          const status = error.response?.status;
          const message =
            status === 404
              ? ErrorMessages.UserNotFound
              : ErrorMessages.GeneralError;

          showErrorNotification(message);
        } else {
          showErrorNotification(ErrorMessages.UnexpectedError);
        }
      }
      setLoading(false);
    },
    [navigate, setUser, setRepos]
  );

  return (
    <div className="h-screen flex items-center justify-center text-white">
      <Helmet>
        <title>Home | GitHub Explorer</title>
        <meta name="description" content="Página inicial para buscar usuários no GitHub." />
      </Helmet>
      <ModalContainer>
        <Search onSearch={handleSearch} isLoading={loading} />
      </ModalContainer>
      <ToastContainer stacked />
    </div>
  );
};

export default HomePage;
