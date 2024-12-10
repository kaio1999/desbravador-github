import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../components/ModalContainer";
import Search from "../components/Search";
import { useUserStore, useReposStore } from "../stores";
import { getUserDetails, getUserRepos } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";
import { ErrorMessages } from "../enums/ErrorMessages";

const HomePage: React.FC = () => {
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
    },
    [navigate, setUser, setRepos]
  );

  return (
    <div className="h-screen flex items-center justify-center text-white">
      <ModalContainer>
        <Search onSearch={handleSearch} />
      </ModalContainer>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
