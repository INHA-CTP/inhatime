import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import TimeTableHeader from './timetable-header';
import SelectedCourse from './selected-course';
import { calOffset, timeSplit } from './../../utils/helper';

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widths: [],
      heights: [],
    };
    this.setWidths = this.setWidths.bind(this);
    this.setHeights = this.setHeights.bind(this);
    this.handleWidthAndHeight = this.handleWidthAndHeight.bind(this);
  }

  componentDidMount() {
    this.handleWidthAndHeight();
    window.addEventListener('resize', this.handleWidthAndHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWidthAndHeight);
  }

  setWidths() {
    const ths = document.getElementById('tableBody').childNodes[0].childNodes;
    const widths = _.chain(ths)
    .map((th) => {
      return th.offsetWidth;
    })
    .value();
    this.setState({
      widths,
    });
  }

  setHeights() {
    const trs = document.getElementById('tableBody').childNodes;
    const heights = _.chain(trs)
    .map((tr) => {
      return tr.offsetHeight;
    })
    .value();
    this.setState({
      heights,
    });
  }

  handleWidthAndHeight() {
    this.setWidths();
    this.setHeights();
  }


  renderSelectedCourses() {
    const { widths, heights } = this.state;
    const leftOffset = calOffset(widths, 0);
    const topOffset = calOffset(heights, 0);
    return this.props.selectedCourses.map((course) => {
      const courseData = timeSplit(course.time);
      return courseData.map((courseDatum) => {
        return (
          <SelectedCourse
            course={course}
            courseTime={courseDatum}
            widths={this.state.widths}
            heights={this.state.heights}
            leftOffset={leftOffset}
            topOffset={topOffset}
          />
        );
      });
    });
  }

  render() {
    //TODO NOT WORKED BORDER_BOTTOM_WITH property
    const { borderBottomWidth, borderRightWidth } = this.props;
    const weekDayInWord = ['', '월', '화', '수', '목', '금', '토'];
    const cellStyle = {
      borderRight: `${borderRightWidth} solid var(--oc-gray-3)`,
      borderBottom: `${borderBottomWidth} solid var(--oc-gray-3)`,
    };
    return (
      <div>
        <TimeTableHeader />
        <div className='row box'>
          <div className='table-wrap2'>
            <div id='table-pivot'>
              {this.renderSelectedCourses()}
            </div>
            <table className='table-basic'>
              <tbody id='tableBody'>
                <tr>
                  {_.times(7, (weekDayIdx) => {
                    return (
                      <td key={weekDayIdx} style={cellStyle}>{weekDayInWord[weekDayIdx]}</td>
                    );
                  })
                  }
                </tr>
                {_.times(20, (rowIdx) => {
                  return (
                    <tr key={rowIdx}>
                      <td style={cellStyle} key={`${rowIdx}-0`}>{rowIdx + 1}</td>
                      {_.times(6, (colIdx) => {
                        return (
                          <td key={`${rowIdx}-${colIdx + 1}`} style={cellStyle} />
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className='row box box-bottom'>
          <div className='inline-block btn-middle no-btn'>2 / 21학점</div>
          <div className='inline-block btn-middle' style={{ float: 'right', marginLeft: '3px' }}>저장</div>
          <div className='inline-block btn-middle btn-yellow' style={{ float: 'right' }} data-toggle='modal' data-target='#modal_clear'>클리어</div>
        </div>
      </div>
    );
  }
}

TimeTable.defaultProps = {
  borderRightWidth: '1px',
  borderBottomWidth: '1px',
};

/* <td className='table-active' id='lecture-minus'>
  <div className='lecture-close-btn' data-toggle='modal' data-target='#modal_minus'>&times;</div>
  <span className='lecture-title-table'>디자인과 생활</span><br/>실기실
</td> */

const mapStateToProps = ({ course }) => {
  return {
    selectedCourses: course.selectedCourses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(TimeTable);
