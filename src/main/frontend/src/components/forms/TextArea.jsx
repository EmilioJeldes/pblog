import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import { taskDefaultStyle, taskTitleFont } from '../../assets/jss/styleConstants';

const textAreaStyles = {
  txtarea: {
    ...taskDefaultStyle,
    ...taskTitleFont,
    backgroundColor: '#FDF9CB',
    overflow: 'hidden',
    marginTop: '15px',
    fontSize: '20px',
    border: 'none',
    padding: '10px',
    '&:focus': {
      outline: '2px solid #FCEF3A'
    }
  }
};

class TextArea extends PureComponent {
  constructor(props) {
    super(props);
    this.textArea = React.createRef();
  }

  // FIXME: Auto focus without setTimeout hack
  componentDidMount() {
    setTimeout(() => {
      this.textArea.current.focus();
    }, 300);
  }

  render() {
    return (
      <Fragment>
        <textarea
          className={this.props.classes.txtarea}
          ref={this.textArea}
          cols={this.props.cols}
          rows={this.props.rows}
          style={this.propsresize ? null : { resize: 'none' }}
          value={this.props.value}
          onChange={this.props.changeValue}
        />
      </Fragment>
    );
  }
}

TextArea.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  resize: PropTypes.bool,
  changeValue: PropTypes.func.isRequired
};

TextArea.defaultProps = {
  cols: 14,
  rows: 3
};

export default withStyles(textAreaStyles)(TextArea);
