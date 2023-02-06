import { useEffect, useState } from "react";
import { tickEvent } from "../browserUtils";
import "../Kiosk.css";


interface IProps {
    errorType: string;
    errorDescription: string;
    showing: boolean;
    setShowing: (p: string) => void;
}
const ErrorModal: React.FC<IProps> = ({ errorType, errorDescription, showing, setShowing }) => {
    const cancelClicked = () => {
        const modal = document.getElementsByClassName("common-modal-container")[0];
        while (modal.firstChild) {
            modal.removeChild(modal.firstChild);
        }
        setShowing("");
    }

    if (!showing) {
        return null;
    }

    return (
        <div className="common-modal-container">
            <div className="common-modal">
                <div>
                    <div className="common-modal-header common-modal-title">
                        {errorType}
                    </div>
                    <div className="common-modal-body">
                        <p>
                            {errorDescription}
                        </p>
                    </div>
                    <div className="common-modal-footer">
                        <button className={`common-modal-button confirm`} onClick={cancelClicked}>Okay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal;