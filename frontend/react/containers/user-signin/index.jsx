import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import UserSigninForm from './user-signin-form';
import { userSignin, clearErrors } from './../../actions/session';
import LinkTo from './../../common/link-to';
import RenderAlerts from './../../components/error-render';
import { concatErrors, concatInfos } from './../../utils/helper';

class UserSignin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  onSubmit(values) {
    this.props.userSignin(values);
  }

  render() {
    const { session, location } = this.props;
    const errorMessages = concatErrors(session, location.state);
    const infoMessages = concatInfos(session, location.state);
    return (
      <div className='container content'>
        <div className='row'>
          <div className='col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3'>
            <RenderAlerts
              messages={errorMessages}
            />
            <RenderAlerts
              messages={infoMessages}
              type='success'
            />
            <UserSigninForm
              onSubmit={this.onSubmit}
              errorRender={false}
            />
            <ul className='list-unstyled list-inline text-center'>
              <li>
                <LinkTo
                  message='비밀번호 찾기'
                  to='/user/password'
                />
              </li>
              <li>
                <LinkTo
                  message='회원가입'
                  to='/user/signup'
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => {
  return {
    session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userSignin, clearErrors }, dispatch);
};

UserSignin.propTypes = {
  userSignin: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(UserSignin);
