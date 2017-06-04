import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import CourseWrapper from './course-wrapper';
import { fetchRecommendable, postCourseScore } from './../../actions/recommendation';


class LectureScore extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecommendable();
  }

  onSubmit(score, distinctCode, recommendableId) {
    this.props.postCourseScore({ id: recommendableId, distinctCode, score });
  }

  render() {
    return (
      <div className='container content'>
        <div className='row'>
          {_.map(this.props.recommendable, (course, idx) => {
            return (
              <CourseWrapper
                name={`course-${idx}`}
                key={course.distinctCode}
                course={course}
                arrayIdx={idx}
                onSubmit={this.onSubmit}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

LectureScore.propTypes = {
  fetchRecommendable: PropTypes.func.isRequired,
  recommendable: PropTypes.array.isRequired,
  postCourseScore: PropTypes.func.isRequired,
};

const mapStateToProps = ({ session, course, recommendation }) => {
  return {
    session,
    recommendable: recommendation.recommendable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRecommendable, postCourseScore }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LectureScore);
