파일 구조
============================

> Folder structure options and naming conventions for software projects

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

