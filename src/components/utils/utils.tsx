import { ChartArea } from "chart.js";

// Market risk data
export const data = {
    chartTitle: "Market Risk Evaluation",
    xAxisLabel: "Risk Categories",
    yAxisLabel: "Risk Level (1 to 10)",
    riskLevels: {
        lowRisk: {
            min: 1,
            max: 4,
            color: "#00FF00", // Green for low risk
        },
        mediumRisk: {
            min: 5,
            max: 7,
            color: "#FFFF00", // Yellow for medium risk
        },
        highRisk: {
            min: 8,
            max: 10,
            color: "#FF0000", // Red for high risk
        },
    },
    categories: [
        { label: "Market Maturity", value: 7, riskLevel: "mediumRisk" },
        { label: "Market Situation", value: 8, riskLevel: "highRisk" },
        { label: "Competitors", value: 6, riskLevel: "mediumRisk" },
        { label: "Competition", value: 7, riskLevel: "mediumRisk" },
        { label: "Customers", value: 9, riskLevel: "highRisk" },
    ],
};

export const MAX_VALUE = 10;

export const chartData = {
    labels: data.categories.map(c => c.label), // X-axis labels
    datasets: [
        {
            label: "Market Risk Levels",
            data: data.categories.map(c => c.value), // Risk data (Y-axis values)
            backgroundColor: context => {
                const { ctx, chartArea } = context.chart;

                if (!chartArea || !ctx) {
                    return 'rgba(0, 0, 0, 0)'; // Default color if chartArea is not available
                }

                return createGradient(ctx, chartArea);
            },
            borderColor: [
                "rgba(255, 206, 86, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
        },
        {
            label: "Remaining Value", // Dataset for the remaining portion (value to MAX_VALUE)
            data: data.categories.map(c => MAX_VALUE - c.value), // Remaining height to reach the top
            backgroundColor: context => {
                const { ctx, chartArea } = context.chart;

                if (!chartArea || !ctx) {
                    return 'rgba(0, 0, 0, 0)'; // Default color if chartArea is not available
                }

                return createGradientStacked(ctx, chartArea);
            },
            borderWidth: 1,
        },
    ],
};

// Create gradient function
const createGradient = (ctx: CanvasRenderingContext2D, chartArea: ChartArea) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(0, 255, 0, 0.8)'); // Green (Low Risk)
    gradient.addColorStop(0.5, 'rgba(255, 255, 0, 0.8)'); // Yellow (Medium Risk)
    gradient.addColorStop(1, 'rgba(255, 0, 0, 0.8)'); // Red (High Risk)
    return gradient;
};

// Create stacked gradient function
const createGradientStacked = (ctx: CanvasRenderingContext2D, chartArea: ChartArea) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(0, 255, 0, 0.2)'); // Green (Low Risk)
    gradient.addColorStop(0.5, 'rgba(255, 255, 0, 0.2)'); // Yellow (Medium Risk)
    gradient.addColorStop(1, 'rgba(255, 0, 0, 0.2)'); // Red (High Risk)
    return gradient;
};
