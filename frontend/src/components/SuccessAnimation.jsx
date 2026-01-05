import { useNavigate } from "react-router-dom";

export const SuccessAnimation = ({ transactionId }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-600">Transfer Successful!</h2>
            <div className="text-gray-600">
                Transaction ID: <span className="font-mono font-semibold">{transactionId}</span>
            </div>
            <div className="flex space-x-4 pt-4">
                 <button onClick={() => navigate("/dashboard")} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                    Home
                </button>
                <button onClick={() => navigate("/history")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    View History
                </button>
            </div>
        </div>
    );
};
