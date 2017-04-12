import React, { Component } from 'react';
import CourseSearch from './../components/course-search';
import CourseDetail from './../components/course-detail';
import Timetable from './../components/timetable';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='col-xs-12 col-md-6 box-padding' id='part-lecture'>
          <CourseSearch />
          <CourseDetail />
        </div>
        <div className='col-xs-12 col-md-6 box-padding' id='part-timetable'>
          <Timetable />
        </div>
      </div>
    );
  }
}

export default ScheduleContainer;
