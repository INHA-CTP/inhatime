import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class CustomSelector extends Component {
  constructor(props) {
    super(props);
    this.selectBox = null;
    this.wrapper = null;
    this.state = {
      selected: { label: null, value: null },
      isOpen: false,
    };
    this.handleTouchOutside = this.handleTouchOutside.bind(this);
  }

  componentWillMount() {
    this.setState({ isOpen: false });
  }

  componentDidMount() {
    this.setSelected(this.props.options, this.props.selected);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isOpen !== this.state.isOpen) {
      this.toggleTouchOutsideEvent(nextState.isOpen);
    }
  }

  toggleTouchOutsideEvent(isOpen) {
    if (isOpen) {
      document.addEventListener('click', this.handleTouchOutside);
    } else {
      document.removeEventListener('click', this.handleTouchOutside);
    }
  }

  handleTouchOutside(event) {
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      this.menuClose();
    }
  }

  setSelected(options, selected) {
    let ret = {};
    if (selected) {
      ret = options.filter((option) => {
        return option.value === selected;
      })[0];
    } else {
      ret = options[0];
    }
    this.changeSelected(ret);
  }

  changeSelected(option) {
    this.setState({
      selected: option,
    });
    this.props.onChange(option.value);
  }

  toggleSelect(e) {
    if (this.state.isOpen) {
      this.menuClose();
    } else {
      this.menuOpen();
    }
  }

  menuClose() {
    this.setState({ isOpen: false });
  }

  menuOpen() {
    this.setState({ isOpen: true });
  }

  renderArrow() {
    if (this.state.isOpen) {
      return <span className='glyphicon glyphicon-chevron-up' />;
    }
    return <span className='glyphicon glyphicon-chevron-down' />;
  }

  renderOptions(options) {
    if (this.state.isOpen) {
      return (
        <div className='btn-drop customs-selector-option' ref={(target) => { this.selectBox = target; }}>
          {options.map((option) => {
            const { value, label } = option;
            return (
              <div
                key={value}
                className='option-select'
                onClick={(e) => { this.changeSelected(option); }}
              >
                {label}
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  }

  render() {
    const { options, wrapperIdName, wrapperClassName } = this.props;
    return (
      <div className={wrapperClassName} id={wrapperIdName} ref={(target) => { this.wrapper = target; }} onClick={e => this.toggleSelect(e)}>
        <div className='custom-select-label'>
          {this.state.selected.label}
          {this.renderArrow()}
        </div>
        <div style={{ position: 'relative' }}>
          <CSSTransitionGroup
            transitionName='selectmenu'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {this.renderOptions(options)}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

CustomSelector.defaultProps = {
  wrapperClassName: 'inline-block btn-middle',
};


CustomSelector.propTypes = {
  options: React.PropTypes.array.isRequired,
  selected: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
};
