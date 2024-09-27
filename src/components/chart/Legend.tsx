import RiskLevel from "./RiskLevel";

const Legend: React.FC = () => {
    return (
        <div className="flex flex-col items-start justify-around border-l-2 border-l-indigo-700 mt-12 pl-2">
            <RiskLevel color="rgba(255, 0, 0, 0.8)" label="High Risk" />
            <RiskLevel color="rgba(255, 255, 0, 0.8)" label="Medium Risk" />
            <RiskLevel color="rgba(0, 255, 0, 0.8)" label="Low Risk" />
        </div>
    );
};

export default Legend;
