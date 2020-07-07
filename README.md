# PART!

#### 👨‍💻 Front

정진리</br>
조혜형

#### 👨‍💻 Server

김화목</br>
김용민</br>
이창권

---

# 기술스택

#### 👨‍💻 Front
typescript, redux+saga, styled-comopnents

---

# 커밋 컨벤션

* feat: ⚡ 새로운 기능
* fix: 🔥 버그 수정
* refactor: 🛠 버그를 수정하거나 기능을 추가하지 않는 코드 변경
* chore: 📦 src 또는 테스트 파일을 수정하지 않는 기타 변경 사항
* docs: 📚 문서만 변경
* style: 💅 코드의 의미에 영향을 미치지 않는 변경 사항 (공백, 서식, 누락 된 세미콜론 등)


---
# 파일 구조   

> 기본적인 폴더 구조 및 설명

### Src 폴더 구조
    .
    src                     # Source files
    ├── components                    # 화면만을 담당하는 컨포넌트들
    ├── containers                    # State를 담당하는 컴포넌트들 
    ├── lib                           # 각종 유틸 파일들
    ├── pages                         # react-router-dom 따라 보여주는 페이지 컴포넌트들
    ├── types                         # 각종 타입과 인터페이스
    └── models                        # redux saga 혹은 useReducer + useContext에 대한 파일들

### 파일 계층

> 최상위 -> 최하위

> index -> App -> src/pages -> src/containers -> src/components

---

# Get Started

> npm start

---

# lib 함수 사용법

### style(font, palette)
```typescript
import styled from 'styled-components';
import font from './font';
import palette from './palette';

const S : any = {}

S.StyledContainer = styled.div`
    background : ${palette.gray0}       // 배경화면은 회색0
    ${font.blodFont}                    // 굵은 폰트 사용
`;
```
# CICD

:sparkles: git push -> jenkins_server ( CI ) -> slack notification -> front_server ( CD )

---
