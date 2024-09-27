import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import BarLabel from "./BarLabel";
import BarChart from "./Barchart";
import Legend from "./Legend";
import { chartData } from "../utils/utils";

const Charts: React.FC = () => {
    return (
        <Card className={cn("w-full max-w-4xl mx-auto p-0")}>
            <CardHeader>
                <CardTitle className="text-center">Market Risk Evaluation</CardTitle>
            </CardHeader>
            <CardContent className={cn("relative flex w-full justify-between")}>
                {chartData.datasets[0].data.map((dataPoint, index) => (
                    <BarLabel key={index} dataPoint={dataPoint} index={index} />
                ))}
                <div className="w-4/5" style={{ height: '400px' }}>
                    <BarChart />
                </div>
                <Legend />
            </CardContent>
        </Card>
    );
};

export default Charts;
