## useState.md

- React Hooks에서 제공하는 함수
- `setState()` 함수는 **배열을 리턴하는데** [<상태 값을 저장할 변수>, <해당 상태 값을 갱신할 때 사용할 수 있는 함수>] 
- `setState()` 함수에 인자로 해당 상태의 초기 값을 넘길 수 있음. 

```
const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = useState(<상태 초기 값>);
```

- 예시
```
const [message, setMessage] = useState('');
```

- 실제 프로젝트에서 사용되는 복잡한 **클래스 컴포넌트**를 `useState()`를 사용해서 함수 컴포넌트로 리팩토링을 해보면 그 진가를 확인할 수 있음! 


## state 에 input 값 담기 
- 생성자 메서드인 **constructor**에서 **state** 초깃값을 설정하고, 이벤트핸들링 함수 내부에서 `this.setState` 메서드를 호출하여 state를 업데이트 함.
- 이후 input의 value값을 state에 있는 값으로 설정.
- input에 아무것이나 입력하고, 오류 발생하지 않으면 state에 텍스트를 잘 담은 것임. 
- `EventPractice.js`참고. (링크달기) 
