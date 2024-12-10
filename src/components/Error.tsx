import { ErrorIcon } from "../assets/Icons";

interface ErrorProps {
    text: string
}

const Error:React.FC<ErrorProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <ErrorIcon color={"red"}/>
      <h1 className="text-4xl font-bold mb-2">Erro</h1>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default Error;
