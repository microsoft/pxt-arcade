import "../Kiosk.css";

const ErrorDiv: React.FC<{}> = () => {
    return (
        <div className="innerQRCodeContent tooManyError">
            <h3>Kiosk Code Generation Error</h3>
            <p>Generated too many temporary kiosk codes. Please return to the main menu and retry in a couple of minutes.</p>
        </div>
    )
}

export default ErrorDiv;
