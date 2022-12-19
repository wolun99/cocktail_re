# cocktail

칵테일 API를 이용한 칵테일 검색사이트

## 개요

코로나로 인해 홈술족이 늘어가는 기사를 보았고 평소 관심이 있었던 칵테일에 대해 소개하는 사이트를 만들고자하여 프로젝트를 진행하게 되었습니다.

cocktail에 대한 openApi를 이용해 정보를 가져왔고 javascript의 라이브러리인 React.js를 사용하여 화면을 구성하였습니다.

## 설치방법

```js
  npm install
```

## 기술 스텍

| JavaScript | React |
| :--------: | :---: |
|   ![js]    | ![ts] |

## 구현기능

1. 디테일 페이지

   ![screenshot](./Readme/images/detail.png)

2. 검색기능

   ![screenshot](./Readme/images/search.png)

## 프로젝트하면서 어려웠던 점

1. 디테일 페이지를 만들면서 각각 아이템마다 페이지를 구분해서 나타내는 작업에 어려움을 가졌습니다.
   - vue-router의 공식문서를 확인하여 params를 통해 구분이 가능하다는 것을 학습하였고 아이템이 가지고 있는 id를 router의 param으로 전달하여 구분하는 방식으로 구현하였습니다.

[js]: ./Readme/images/javascript.svg
[ts]: ./Readme/images/logo192.png
