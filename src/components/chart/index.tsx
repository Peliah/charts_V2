import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
import { chartData, MAX_VALUE } from "../utils/utils";
import { cn } from "@/lib/utils";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Charts = () => {
    return (
        <Card className={cn("w-full max-w-4xl mx-auto p-0")}>
            <CardHeader>
                <CardTitle className="text-center">Market Risk Evaluation</CardTitle>
            </CardHeader>
            <CardContent className={cn("relative flex w-full justify-between")}>
                {/* Display data labels on top of the bars */}
                {chartData.datasets[0].data.map((dataPoint, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: '70px',
                            left: `calc(${(index + 1) * 70 / chartData.datasets[0].data.length}% `,
                            color: '#000',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            transform: 'translateX(-60%)' // Center the label
                        }}
                    >
                        {dataPoint.toFixed(1)} {/* Display the label value */}
                    </div>
                ))}
                <div className="w-4/5" style={{ height: '400px' }}> {/* Set a minimum height for the chart area */}
                    <Bar
                        data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Market Risk Evaluation',
                                },
                            },
                            scales: {
                                x: {
                                    stacked: true,
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 5,
                                    },
                                },
                                y: {
                                    stacked: true,
                                    beginAtZero: true,
                                    max: MAX_VALUE, // Ensure y-axis goes up to MAX_VALUE
                                },
                            },
                            interaction: {
                                intersect: false,
                                mode: 'index',
                            },
                        }}
                    />
                </div>
                {/* Custom Vertical Legend */}
                <div className="flex flex-col items-start justify-around border-l-2 border-l-indigo-700 mt-12 pl-2">
                    <RiskLevel color='rgba(255, 0, 0, 0.8)' label='High Risk' />
                    <RiskLevel color='rgba(255, 255, 0, 0.8)' label='Medium Risk ' />
                    <RiskLevel color='rgba(0, 255, 0, 0.8)' label='Low Risk' />
                </div>
            </CardContent>
        </Card>
    );
}

// Component for individual risk level items
const RiskLevel = ({ color, label }) => (
    <div className="flex items-center mb-2">
        <span className="color-box" style={{ backgroundColor: color }}></span>
        <span>{label}</span>
    </div>
);

export default Charts;
