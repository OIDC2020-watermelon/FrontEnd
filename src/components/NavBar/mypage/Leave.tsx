import React, { useState } from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import Title from './Title';
const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;

const Leave = () => {
  const onCheck = (e: any) => {
    console.log('e : ', e.target.checked);
  };

  return (
    <>
      <S.MypageLayout>
        <Title flag={'2'} />

        <S.MypageLayoutContent>
          <S.MypageEmpty />

          <S.MypageContent>
            <S.InfoLayout>
              <S.InfoTitle>탈퇴 안내</S.InfoTitle>
            </S.InfoLayout>

            <S.InfoLayout>
              <S.Infocontent style={{ marginBottom: 30 }}>
                탈퇴시 주의사항
              </S.Infocontent>

              <S.Infocontent>
                즉시 탈퇴 처리 및 기존 아이디 사용 불가
              </S.Infocontent>

              <S.Infocontent style={{ marginBottom: 30 }}>
                회원 탈퇴 시, 즉시 탈퇴 처리되며 기존에 가입하셨던 아이디로
                재가입(재사용)이 불가능합니다.
              </S.Infocontent>

              <S.Infocontent>탈퇴 후 7일 이내 재가입 불가</S.Infocontent>

              <S.Infocontent style={{ marginBottom: 30 }}>
                회원 탈퇴 후 7일이내 동일 휴대전화번호 / 이메일주소 /
                개인식별정보(CI/DI)로 사이트 가입이 불가능합니다.
              </S.Infocontent>

              <S.Infocontent>게시글 안내사항</S.Infocontent>

              <S.Infocontent style={{ marginBottom: 50 }}>
                상품리뷰와 1:1문의와 같은 게시판형 서비스에 등록 된 게시물은
                탈퇴 후에도 자동 삭제 되지 않습니다.
              </S.Infocontent>

              <S.Infocontent style={{ textAlign: 'center' }}>
                <Checkbox onChange={onCheck}>
                  상기 사항을 모두 확인하였습니다.
                </Checkbox>
              </S.Infocontent>
            </S.InfoLayout>
          </S.MypageContent>
        </S.MypageLayoutContent>
      </S.MypageLayout>
    </>
  );
};

export default Leave;

const S: any = {};

S.MypageLayout = styled.div``;

S.MypageLayoutContent = styled.div`
  display: flex;
`;

S.MypageEmpty = styled.div`
  flex: 1.7;
`;

S.MypageContent = styled.div`
  flex: 8.8;
  margin-left: 3%;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 50px;
`;

S.InfoLayout = styled.div`
  text-align: left;
  margin-right: 5%;
`;

S.InfoTitle = styled.div`
  &:after {
    content: '';
    display: block;
    width: 300px;
    border-bottom: 1px solid;
    margin: 20px 0px;
  }
`;

S.Infocontent = styled.div``;
