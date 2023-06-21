import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = () => {
  const percentage = 70;
  return (
    <div className="percentage">
      <CircularProgressbar value={percentage} />
      <div>
        <p>
          {percentage}
          %
        </p>
        <small>Completed</small>
      </div>
    </div>
  );
};

export default CircularProgress;
