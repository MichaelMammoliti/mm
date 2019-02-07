import styles from './main.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Circle = ({ text, active, size }) => (
  <div
    className={cx('circle', {
      'circle--active': active,
      [`circle--size-${size}`]: size,
    })}
  >
    <i />
  </div>
);

export default Circle;
