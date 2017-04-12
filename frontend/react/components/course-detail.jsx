import React  from 'react';

export default (props) => {
  return (
    <div className='row box box-bottom' style={{ marginTop: '20px' }}>
      <div className='lecture-info-wrap'>
        <div className='lecture-info'>
          <div className='lecture-title'>
            <span id='lecture-heart' className='glyphicon glyphicon-heart-empty' style={{ cursor: 'pointer' }} />
            디자인과 생활 | 화 6 | 1학점
            <div style={{ float: 'right' }}>
              <span className='glyphicon glyphicon-star' />
              <span className='glyphicon glyphicon-star' />
              <span className='glyphicon glyphicon-star' />
              <span className='glyphicon glyphicon-star' />
              <span className='glyphicon glyphicon-star-empty' />
              <span className='star-people'>/ 542명 참여</span>
            </div>
          </div>
          <div className='lecture-object'>
            이 강의는 ‘문화적 상징의 해석과 창조’의 개념에 기초해 오늘날 사회에서 주체적인 문화인으로서 문화독해력(cultural literacy)를 배양하는데 목적이 있다. 이를 위해 현대의 시각문화와 기술 환경의 근간이 되는 역사･문화적 맥락을 이해하고, 일상 삶의 차원에서 다양한 도시 건축, 제품, 시각커뮤니케이션에 대한 학제적 성찰을 시도한다. 이로써 디자인의 의미와 역할이 한낱 기술적 잔재간과 장식이 아니라 일상 삶과 문화를 이루는 근간임을 이해한다.
          </div>
          <div className='lecture-more'>
            좋아요 <span>38</span>명 &nbsp;
            들을거에요 <span>78</span>명 &nbsp;
            강의평가 <span>276</span>개 &nbsp;
            <div className='inline-block btn-middle' style={{ float: 'right', marginLeft: '3px' }}>추가</div>
            <div className='inline-block btn-middle' style={{ float: 'right' }} >클리어</div>
          </div>
        </div>
      </div>
    </div>
  );
}