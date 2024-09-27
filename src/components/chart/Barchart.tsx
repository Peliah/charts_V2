import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { chartData, MAX_VALUE } from '../utils/utils';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart: React.FC = () => {
    return (
        <Bar
            data={chartData}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Market Risk Evaluation' },
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: { autoSkip: true, maxTicksLimit: 5 },
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        max: MAX_VALUE,
                    },
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
            }}
        />
    );
};

export default BarChart;
