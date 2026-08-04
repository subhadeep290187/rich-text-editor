
import './Button.css';
const Button = ({label, SVG, className, dataSetClick, onClick}: {label?: string, SVG?: React.ReactNode, className?: string, dataSetClick?: string, onClick?: () => void}) => {
    return (
        <button className={`btn ${className || ''}`} data-btn-click={dataSetClick} onClick={onClick}>
            {SVG? <div dangerouslySetInnerHTML={{ __html: SVG as string }} /> : label}
        </button>
    );
}

export default Button;