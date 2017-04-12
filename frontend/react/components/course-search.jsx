import React  from 'react';

export default (props) => {
  return (
    <div>
      <div className='row box'>
        <div className='inline-block btn-middle' id='serach-filter'>과목명 <span className='glyphicon glyphicon-chevron-down' />
          <div id='serach-filter-drop' className='btn-middle btn-drop'>
            <a href='#' className='drop-active'>과목명</a><br />
            <a href='#'>전공</a><br />
            <a href='#'>교수</a><br />
            <a href='#'>좋아요</a><br />
            <a href='#'>신청한 강의</a><br />
            <form>
              <input type='checkbox' name='empty_check' value='empty' /> 빈시간
            </form>
          </div>
        </div>
        <form className='inline-block' style={{ width: 'calc(100% - 208px)' }} >
          <input type='text' className='search-text' placeholder='Search...' />
        </form>
        <div className='inline-block btn-middle'>검색</div>
      </div>
      <div className='row box box-bottom'>
        <div className='table-wrap'>
          <table className='table-basic'>
            <tbody><tr>
              <th>코드</th>
              <th>과목명</th>
              <th>구분</th>
              <th>개설학과</th>
              <th>학년</th>
              <th>학점</th>
              <th>시간</th>
              <th>장소</th>
              <th>교수</th>
              <th>정원</th>
            </tr>
            <tr className='table-active'>
              <td>042.045</td>
              <td>디자인과 생활(클릭할경우)</td>
              <td>교양</td>
              <td>디자인학부(디자인전공)</td>
              <td>1학년</td>
              <td>1</td>
              <td>화6</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            <tr>
              <td>042.045</td>
              <td>너무 긴 과목명은 이렇게 ...</td>
              <td>교양</td>
              <td>긴거는 생략 ...</td>
              <td>1학년</td>
              <td>3</td>
              <td>화6-8</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            <tr>
              <td>042.045</td>
              <td>너무 긴 과목명은 이렇게 ...</td>
              <td>교양</td>
              <td>디자인학부(디자인전공)</td>
              <td>1학년</td>
              <td>3</td>
              <td>화6-8</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            <tr>
              <td>042.045</td>
              <td>너무 긴 과목명은 이렇게 ...</td>
              <td>교양</td>
              <td>긴거는 생략 ...</td>
              <td>1학년</td>
              <td>3</td>
              <td>화6-8</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            <tr>
              <td>042.045</td>
              <td>너무 긴 과목명은 이렇게 ...</td>
              <td>교양</td>
              <td>디자인학부(디자인전공)</td>
              <td>1학년</td>
              <td>3</td>
              <td>화6-8</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            <tr>
              <td>042.045</td>
              <td>너무 긴 과목명은 이렇게 ...</td>
              <td>교양</td>
              <td>긴거는 생략 ...</td>
              <td>1학년</td>
              <td>3</td>
              <td>화6-8</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            <tr>
              <td>042.045</td>
              <td>너무 긴 과목명은 이렇게 ...</td>
              <td>교양</td>
              <td>디자인학부(디자인전공)</td>
              <td>1학년</td>
              <td>3</td>
              <td>화6-8</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            <tr>
              <td>042.045</td>
              <td>너무 긴 과목명은 이렇게 ...</td>
              <td>교양</td>
              <td>디자인학부(디자인전공)</td>
              <td>1학년</td>
              <td>3</td>
              <td>화6-8</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            <tr>
              <td>042.045</td>
              <td>너무 긴 과목명은 이렇게 ...</td>
              <td>교양</td>
              <td>긴거는 생략 ...</td>
              <td>1학년</td>
              <td>3</td>
              <td>화6-8</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            <tr>
              <td>042.045</td>
              <td>너무 긴 과목명은 이렇게 ...</td>
              <td>교양</td>
              <td>디자인학부(디자인전공)</td>
              <td>1학년</td>
              <td>3</td>
              <td>화6-8</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            <tr>
              <td>042.045</td>
              <td>너무 긴 과목명은 이렇게 ...</td>
              <td>교양</td>
              <td>긴거는 생략 ...</td>
              <td>1학년</td>
              <td>3</td>
              <td>화6-8</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            <tr>
              <td>042.045</td>
              <td>너무 긴 과목명은 이렇게 ...</td>
              <td>교양</td>
              <td>디자인학부(디자인전공)</td>
              <td>1학년</td>
              <td>3</td>
              <td>화6-8</td>
              <td>실기실</td>
              <td>김민수</td>
              <td>50</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
