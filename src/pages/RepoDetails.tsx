import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRepoDetails } from "../services/api";
import { toast } from "react-toastify";
import { ArrowLeftIcon } from "../assets/Icons";
import { Helmet } from "react-helmet-async";

interface RepoDetailsProps {
  name: string;
  description?: string;
  language?: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  size: number;
  license?: { name: string };
  html_url: string;
}

const RepoDetails: React.FC = () => {
  const { owner, repo } = useParams<{ owner: string; repo: string }>();
  const navigate = useNavigate();

  const [repoDetails, setRepoDetails] = useState<RepoDetailsProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const fullName = `${owner}/${repo}`;
        const repoResponse = await getRepoDetails(fullName);
        setRepoDetails(repoResponse.data);
      } catch {
        toast.error(
          "Erro ao carregar detalhes do repositório. Tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRepoDetails();
  }, [owner, repo]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <Helmet>
          <title>Detalhes do repositório | GitHub Explorer</title>
          <meta
            name="description"
            content="Página pra visualizar os detalhes do repositório."
          />
        </Helmet>
        <div className="animate-pulse space-y-4">
          <div className="w-64 h-8 bg-gray-700 rounded"></div>
          <div className="w-96 h-6 bg-gray-700 rounded"></div>
          <div className="w-48 h-6 bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (!repoDetails) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Repositório não encontrado.</p>
      </div>
    );
  }

  const RepoDetailCard = ({
    label,
    value,
  }: {
    label: string;
    value: string | number;
  }) => (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <span className="font-bold">{label}:</span> {value || "Não especificado"}
    </div>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-y-auto">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-gray-700 mb-4 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 mt-[calc(5vh+20px)] md:mt-0"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Voltar
        </button>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full h-full">
          <h2 className="text-3xl font-bold">{repoDetails.name}</h2>
          <p className="text-gray-400 mt-2">
            {repoDetails.description || "Descrição não disponível."}
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <RepoDetailCard
              label="Linguagem"
              value={repoDetails.language || "Não especificada"}
            />
            <RepoDetailCard
              label="Estrelas"
              value={repoDetails.stargazers_count}
            />
            <RepoDetailCard label="Forks" value={repoDetails.forks_count} />
            <RepoDetailCard
              label="Última Atualização"
              value={new Date(repoDetails.updated_at).toLocaleDateString()}
            />
            <RepoDetailCard label="Tamanho" value={`${repoDetails.size} KB`} />
            <RepoDetailCard
              label="Licença"
              value={repoDetails.license?.name || "Não especificada"}
            />
          </div>
          <a
            href={repoDetails.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            Ver no GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoDetails;
