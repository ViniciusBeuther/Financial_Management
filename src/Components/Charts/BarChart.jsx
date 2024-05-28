import React, { useEffect, useState, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { supabase } from '../../../utils/supabase';
import Spinner from '../Spinner';
import DateMethods from '../../classes/Date';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registre os componentes do Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const [chartData, setChartData] = useState(null);
    const chartRef = useRef(null);
    const [arrayOfObj, setArrayOfObj] = useState([]);
    const dateMethods = new DateMethods()
    const elementMonth = document.getElementById("analysis__select_month");
    const elementYear = document.getElementById("analysis__select_year");
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedYear, setSelectedYear] = useState();
    //console.log(selectedMonth+1)
    //console.log(selectedYear)
    
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                let { data: transactions, error } = await supabase
                    .from('gerenciador_financeiro')
                    .select('*');
                
                if (error) throw error;

                setSelectedMonth(dateMethods.getMMMmonth(elementMonth.innerText)+1)
                setSelectedYear(elementYear.innerText)

                const filteredTransactions = transactions.filter((transaction) => {
                    const transactionDate = new Date(transaction.date);
                    const transactionMonth = transactionDate.getMonth() + 1;
                    const transactionYear = transactionDate.getFullYear();
                    return transactionMonth == selectedMonth && transactionYear == selectedYear;
                });

                const newArrayOfObj = filteredTransactions.map((transaction) => ({
                    key: transaction.category,
                    value: transaction.amount,
                }));

                setArrayOfObj(newArrayOfObj);

                console.log(newArrayOfObj); // Verifica se os dados estão corretos

                // Atualiza chartData
                const categories = {};
                newArrayOfObj.forEach(item => {
                    categories[item.key] = (categories[item.key] || 0) + ( item.value >= 0 ? (item.value) : (item.value) * -1);
                });

                const labels = Object.keys(categories);
                const values = Object.values(categories);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Transações por Categoria',
                            data: values,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                });

            } catch (error) {
                console.error('Erro ao buscar dados do servidor:', error);
            }
        };

        fetchData();
    }, [selectedMonth, selectedYear]); // Reexecuta o efeito quando o mês ou ano selecionado mudar

    return (
        <div>
            {chartData ? (
                <Bar ref={chartRef} data={chartData} />
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default BarChart;
