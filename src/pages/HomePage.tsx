import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Search from "../components/Search";
import { useUserStore, useReposStore } from "../stores";
import { getUserDetails, getUserRepos } from "../services/api";
import { ToastContainer, toast } from "react-toastify";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const setRepos = useReposStore((state) => state.setRepos);

  const showErrorNotification = (message: string) => {
    toast.error(message, {
      position: "top-center",
    });
  };

  function ErrorMessage(code: number) {
    const isNotFoundUser = code === 404;

    if (isNotFoundUser) {
      return "Nenhum usuário foi encontrado com esse nome. Certifique-se de que o nome está correto e tente novamente.";
    }

    return "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente em breve.";
  }

  const handleSearch = async (username: string) => {
    try {
      const [responseDetailsUser, responseReposUser] = await Promise.all([
        getUserDetails(username),
        getUserRepos(username),
      ]);
  
      setUser(responseDetailsUser.data);
      setRepos(responseReposUser.data);
      navigate(`/user`);
    } catch (error) {
      const status = (error as any)?.status;
      const message = ErrorMessage(status);
      showErrorNotification(message);
    }
  };
  

  return (
    <div className="h-screen flex items-center justify-center text-white">
      <Modal isOpen={true}>
        <Search onSearch={handleSearch} />
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
