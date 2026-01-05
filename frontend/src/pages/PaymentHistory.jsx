import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from "axios";

export const PaymentHistory = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/transactions", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            setTransactions(response.data.transactions);
        })
    }, [])

    return <div>
        <Appbar />
        <div className="m-8">
            <div className="font-bold text-2xl mb-4">Transaction History</div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {transactions.map(tx => {
                            const currentUserId = localStorage.getItem("userId");
                            const isSent = tx.senderId._id === currentUserId;
                            
                            return (
                                <tr key={tx._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${isSent ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                           {isSent ? 'Sent' : 'Received'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{isSent ? `To: ${tx.receiverId.firstName}` : `From: ${tx.senderId.firstName}`}</div>
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isSent ? 'text-red-500' : 'text-green-500'}`}>
                                        {isSent ? '-' : '+'} Rs {tx.amount}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(tx.timestamp).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Success
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {transactions.length === 0 && <div className="p-4 text-center text-gray-500">No transactions found</div>}
            </div>
        </div>
    </div>
}
