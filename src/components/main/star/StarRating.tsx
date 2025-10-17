// icon
import { FaStar } from "react-icons/fa";

const StarRating = ({ score }) => {
    const start = [];

    for (let i = 0; i < 5; i++) {
        if (i < score) {
            start.push(<FaStar key={i} color="gold" />);
        } else {
            start.push(<FaStar key={i} color="gray" />)
        }        
    }
    return <div className="w-full flex gap-1 mt-2 px-1">{start}</div>
};
export default StarRating;