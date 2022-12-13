import "../Kiosk.css";
import {QRCodeSVG} from 'qrcode.react';

interface IProps {
    kioskCode: string;
    kioskUrl: string;
}

const QrCode: React.FC<IProps> = ({ kioskCode, kioskUrl }) => {
    return (
        <div className="innerQRCodeContent">
            <h3>10 minute Kiosk ID</h3>
            <h1 className="kioskCode">{kioskCode}</h1>
            <QRCodeSVG value={kioskUrl} />
            <div className="kioskLink">
                <a target="_blank" href={kioskUrl}>{kioskUrl}</a>
            </div>
        </div>
    )
}

export default QrCode;