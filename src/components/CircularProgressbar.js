import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = () => {
  const percentage = 64;
  const alpha = percentage / 100;

  return (
    <div className="percentage">
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: `rgba(2, 144, 255, ${alpha})`,
        })}
      />
      <div>
        <p id="percentage-number">
          {percentage}
          %
        </p>
        <small id="progress-title">Completed</small>
      </div>
    </div>
  );
};

export default CircularProgress;
