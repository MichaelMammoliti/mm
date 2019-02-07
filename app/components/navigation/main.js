import classnames from 'classnames/bind';

import navigationItems from './navigation-items';

import styles from './main.scss';

const cx = classnames.bind(styles);

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItemIndex: this.getActiveItemIndex(),
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // Getters
  // ====================================
  getActiveItemIndex() {
    return this.props.items.findIndex(item => item.active) || 0;
  }

  // Event Handlers
  // ====================================
  handleItemClick(index) {
    this.setState({
      activeItemIndex: index,
    });
  }

  // Render
  // ====================================
  render() {
    const { orientation, itemAlign, type, itemSize, items } = this.props;
    const { activeItemIndex } = this.state;

    const ChildComponent = navigationItems[type];

    return (
      <div
        className={cx('navigation', {
          [`navigation--orientation-${orientation}`]: !!orientation,
          [`navigation--align-items-${itemAlign}`]: !!itemAlign,
        })}
      >
        {items.map((item, index) =>
          <div
            key={index}
            className={styles['navigation__item']}
            onClick={event => this.handleItemClick(index)}
          >
            <ChildComponent
              {...item}
              size={itemSize}
              active={activeItemIndex === index}
            />
          </div>
        )}
      </div>
    );
  }
};

Navigation.defaultProps = {
  orientation: 'horizontal',
  itemAlign: 'left',
  itemSize: 'medium',
  type: 'circle',
  items: [...Array(5)],
};

export default Navigation;
