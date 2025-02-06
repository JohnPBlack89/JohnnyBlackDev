import qrCode from "../assets/images/logos/qr-code.svg";
import * as motion from "motion/react-client";

export default function QRCode() {
	return (
		<>
			<motion.img
				initial={{ scale: 0 }}
				animate={{ rotate: 360, scale: 1 }}
				transition={{ duration: 1.2 }}
				whileHover={{ scale: 1.8, rotate: 0 }}
				src={qrCode}
				className="logo"
			/>
		</>
	);
}
