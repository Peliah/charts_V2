interface BarLabelProps {
    dataPoint: number;
    index: number;
}

const BarLabel: React.FC<BarLabelProps> = ({ dataPoint, index }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: '70px',
                left: `calc(${(index + 1) * 70 / 5}% )`,
                color: '#000',
                fontWeight: 'bold',
                fontSize: '12px',
                transform: 'translateX(-60%)'
            }}
        >
            {dataPoint.toFixed(1)}
        </div>
    );
};

export default BarLabel;
