import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, Button, Input, Radio } from 'antd';
import moment, { Moment } from 'moment';
import Title from './Title';
// const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;

interface UserInfo {
  id: string;
  name: string;
  phone: string;
  email: string;
  birth: Moment | string;
  gender: string;
}

const UserDummy: UserInfo = {
  id: 'ziznaki',
  name: '진리',
  phone: '010-0000-0000',
  email: 'ziznaki@gamil.com',
  birth: moment(Date.now()).format('YYYY-MM-DD hh:mm:ss'),
  gender: 'M',
};
const Mypage = () => {
  const [editType, setEditType] = useState<string>('');

  const editClick = (e: any, type: string) => {
    console.log(e);
    console.log(type);

    if (type === 'name') {
      setEditType('name');
    } else if (type === 'phone') {
      setEditType('phone');
    } else if (type === 'email') {
      setEditType('email');
    } else if (type === 'birth') {
      setEditType('birth');
    } else if (type === 'gender') {
      setEditType('gender');
    }
  };

  const saveClick = (e: any, type: string) => {
    console.log(e);
    console.log(type);
    setEditType('');
    if (type === 'name') {
    } else if (type === 'phone') {
    } else if (type === 'email') {
    } else if (type === 'birth') {
    } else if (type === 'gender') {
    }
  };

  const editChange = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <>
      <S.MypageLayout>
        <Title flag={'1'} />

        <S.MypageLayoutContent>
          <S.MypageEmpty />

          <S.MypageContent>
            <S.InfoLayout>
              <S.InfoTitle>아이디</S.InfoTitle>

              <S.Infocontent>{UserDummy.id}</S.Infocontent>

              <S.InfoEdit style={{ visibility: 'hidden' }}>수정</S.InfoEdit>
            </S.InfoLayout>

            <S.InfoLayout>
              <S.InfoTitle>이름</S.InfoTitle>

              {editType === 'name' ? (
                <>
                  <S.InfoEditInput>
                    <Input onChange={editChange} style={{ width: '50%' }} />
                  </S.InfoEditInput>
                  <S.InfoEdit
                    onClick={(e: any) => {
                      saveClick(e, 'name');
                    }}
                  >
                    저장
                  </S.InfoEdit>
                </>
              ) : (
                <>
                  <S.Infocontent>{UserDummy.name}</S.Infocontent>

                  <S.InfoEdit
                    onClick={(e: any) => {
                      editClick(e, 'name');
                    }}
                  >
                    수정
                  </S.InfoEdit>
                </>
              )}
            </S.InfoLayout>

            <S.InfoLayout>
              <S.InfoTitle>휴대폰</S.InfoTitle>

              {editType === 'phone' ? (
                <>
                  <S.InfoEditInput>
                    <Input onChange={editChange} style={{ width: '50%' }} />
                  </S.InfoEditInput>
                  <S.InfoEdit
                    onClick={(e: any) => {
                      saveClick(e, 'phone');
                    }}
                  >
                    저장
                  </S.InfoEdit>
                </>
              ) : (
                <>
                  <S.Infocontent>{UserDummy.phone}</S.Infocontent>

                  <S.InfoEdit
                    onClick={(e: any) => {
                      editClick(e, 'phone');
                    }}
                  >
                    수정
                  </S.InfoEdit>
                </>
              )}
            </S.InfoLayout>

            <S.InfoLayout>
              <S.InfoTitle>이메일</S.InfoTitle>

              {editType === 'email' ? (
                <>
                  <S.InfoEditInput>
                    <Input onChange={editChange} style={{ width: '50%' }} />
                  </S.InfoEditInput>
                  <S.InfoEdit
                    onClick={(e: any) => {
                      saveClick(e, 'email');
                    }}
                  >
                    저장
                  </S.InfoEdit>
                </>
              ) : (
                <>
                  <S.Infocontent>{UserDummy.email}</S.Infocontent>

                  <S.InfoEdit
                    onClick={(e: any) => {
                      editClick(e, 'email');
                    }}
                  >
                    수정
                  </S.InfoEdit>
                </>
              )}
            </S.InfoLayout>

            <S.InfoLayout>
              <S.InfoTitle>생년월일</S.InfoTitle>

              {editType === 'birth' ? (
                <>
                  <S.InfoEditInput>
                    <Input onChange={editChange} style={{ width: '50%' }} />
                  </S.InfoEditInput>
                  <S.InfoEdit
                    onClick={(e: any) => {
                      saveClick(e, 'birth');
                    }}
                  >
                    저장
                  </S.InfoEdit>
                </>
              ) : (
                <>
                  <S.Infocontent>{UserDummy.birth}</S.Infocontent>

                  <S.InfoEdit
                    onClick={(e: any) => {
                      editClick(e, 'birth');
                    }}
                  >
                    수정
                  </S.InfoEdit>
                </>
              )}
            </S.InfoLayout>

            <S.InfoLayout>
              <S.InfoTitle>성별</S.InfoTitle>

              {editType === 'gender' ? (
                <>
                  <S.InfoEditInput>
                    <Radio.Group onChange={editChange} style={{ width: '50%' }}>
                      <Radio value={'M'}>M</Radio>
                      <Radio value={'W'}>W</Radio>
                    </Radio.Group>
                  </S.InfoEditInput>
                  <S.InfoEdit
                    onClick={(e: any) => {
                      saveClick(e, 'gender');
                    }}
                  >
                    저장
                  </S.InfoEdit>
                </>
              ) : (
                <>
                  <S.Infocontent>{UserDummy.gender}</S.Infocontent>

                  <S.InfoEdit
                    onClick={(e: any) => {
                      editClick(e, 'gender');
                    }}
                  >
                    수정
                  </S.InfoEdit>
                </>
              )}
            </S.InfoLayout>

            <S.InfoLayout style={{ marginTop: 50 }}>
              <S.InfoEdit style={{ marginLeft: '80%', height: 35 }}>
                저장
              </S.InfoEdit>
            </S.InfoLayout>
          </S.MypageContent>
        </S.MypageLayoutContent>
      </S.MypageLayout>
    </>
  );
};

export default Mypage;

const S: any = {};

S.MypageLayout = styled.div``;

S.MypageLayoutTitle = styled.div`
  display: flex;
`;

S.StyledMenu = styled(Menu)`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1.2;
`;

S.MypageTitleContent = styled.div`
  flex: 8.8;
  margin-left: 3%;
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 1px solid;
  margin-top: 8px;
`;

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
  display: flex;
  height: 50px;
  text-align: left;
  margin-right: 5%;
`;

S.InfoTitle = styled.div`
  flex: 3;
`;

S.Infocontent = styled.div`
  flex: 9;
`;

S.InfoEdit = styled(Button)`
  flex: 1;
`;

S.InfoEditInput = styled.div`
  flex: 9;
`;
