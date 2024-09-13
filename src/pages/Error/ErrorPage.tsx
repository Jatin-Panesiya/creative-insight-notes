import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-5 py-10">
      <p className="text-2xl font-bold">404 Page Not Found</p>
      <button
        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md w-32"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
