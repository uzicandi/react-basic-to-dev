import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 함수형 컴포넌트

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요. 제 이름은 {name}입니다. <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다. <br />
//       children 값은 {children}입니다.
//     </div>
//   );
// };

// 클래스형 컴포넌트
class MyComponent extends Component {
  // 클래스 내에서 propTypes 지정하는 방법
  static defaultProps = {
    name: '기본 이름'
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };

  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요. 제 이름은 {name}입니다. <br />
        children 값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: '루루'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
