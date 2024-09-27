interface RiskLevelProps {
    color: string;
    label: string;
}

const RiskLevel: React.FC<RiskLevelProps> = ({ color, label }) => (
    <div className="flex items-center mb-2">
        <span className="color-box" style={{ backgroundColor: color }}></span>
        <span>{label}</span>
    </div>
);

export default RiskLevel;
