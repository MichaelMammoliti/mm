import styles from './main.scss';
import classnames = 'classnames/bind';

import Navigation from '../navigation';

const cx = classnames.bind(styles);

class FullSlider extends React.Component {
  constructor() {
    this.state = {
      currentSlideIndex: 0,
    };
  }

  render() {
    return (
      <div className={styles['full-slider']}>
        <div className={styles['full-slider__slides']}></div>
        <div className={styles['full-slider__navigation']}>
          <Navigation items={items} />
        </div>
      </div>
    );
  }
};

export default FullSlider;
