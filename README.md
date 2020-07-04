# PART 
============================

#### 👨‍💻 Front

정진리</br>
조혜형

#### 👨‍💻 Server

김화목</br>
김용민</br>
이창권

---
파일 구조   
============================

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
============================

> npm start

---

# lib 함수 사용법
============================

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

---
