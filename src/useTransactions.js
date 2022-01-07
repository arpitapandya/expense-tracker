import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";


// export const incomeCategories = [
//     { type: 'Business', amount: 0, color: incomeColors[0] },
//     { type: 'Investments', amount: 0, color: incomeColors[1] },
//     { type: 'Extra Income', amount: 0, color: incomeColors[2] }
// ];

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter((t) => t.type === title);
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === 'Income' ? 'incomeCategories' : expenseCategories;

    console.log({ transactionsPerType, total, categories });

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)

        if(category) category.amount += t.amount;
    });

    const filteredCategories = categories.filter((c) => c.amount > 0);

    const charData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.amount)
        }]
    }
}