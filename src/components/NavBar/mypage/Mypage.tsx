import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, Button, Input, Radio } from 'antd';
import Title from './Title';
import { updateUser } from '../../../models/saga/reducers/auth';
import { useAuth } from '../../../models/hook/providers/auth/AuthProvider';
import { useHistory } from 'react-router-dom';
import useInput from '../../../lib/utils/hooks';
import { useWrite } from '../../../models/hook/providers/write/WriteProvider';
import { useDispatch } from 'react-redux';
// const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;

const Mypage = () => {
  const [{ data: user }] = useAuth();
  const { state, dispatch } = useWrite();

  const asyncDispatch = useDispatch();

  const [name, changeName, setName] = useInput(state?.name || user?.name || '');
  const [phoneNo, changePhoneNo, setPhoneNo] = useInput(
    state?.phoneNo || user?.phoneNo || '',
  );
  const [dateOfBirth, changeDateOfBirth, setDateOfBirth] = useInput(
    state?.dateOfBirth || user?.dateOfBirth || '',
  );
  const [gender, setGender] = useState(state?.gender || user?.gender || '');
  const [editType, setEditType] = useState('');

  const history = useHistory();

  if (!user) {
    //history.push('/');
  }

  const editClick = (e: any, type: string) => {
    if (type === 'name') {
      setEditType('name');
    } else if (type === 'phoneNo') {
      setEditType('phoneNo');
    } else if (type === 'dateOfBirth') {
      setEditType('dateOfBirth');
    } else if (type === 'gender') {
      setEditType('gender');
    }
  };

  const saveClick = useCallback(
    (e: any, type: string) => {
      console.log('saveClick');
      setEditType('');
      if (type === 'name') {
      } else if (type === 'phoneNo') {
      } else if (type === 'dateOfBirth') {
      } else if (type === 'gender') {
      }
    },
    [name, phoneNo, dateOfBirth, gender],
  );

  const editChange = (e: any) => {
    setGender(e.target.value);
  };

  const editSave = (e: any) => {
    e.preventDefault();
    asyncDispatch(updateUser.request({ name, phoneNo, dateOfBirth, gender }));
  };

  useEffect(() => {
    console.log('useEffect');
    dispatch({ type: 'ChangeName', data: user?.name || '' });
    dispatch({ type: 'ChangePhoneNo', data: user?.phoneNo || '' });
    dispatch({ type: 'ChangeDateOfBirth', data: user?.dateOfBirth || '' });
    dispatch({ type: 'ChangeGender', data: user?.gender || '' });
    return () => dispatch({ type: 'reset' });
  }, [dispatch, state.name, state.phoneNo, state.gender, state.dateOfBirth]);
  console.log(name, phoneNo, gender, dateOfBirth);
  return (
    <>
      <S.MypageLayout>
        <Title flag={'1'} />

        <S.MypageLayoutContent>
          <S.MypageEmpty />

          <S.MypageContent>
            <S.InfoLayout>
              <S.InfoTitle>이름</S.InfoTitle>

              {editType === 'name' ? (
                <>
                  <S.InfoEditInput>
                    <Input
                      value={name}
                      onChange={changeName}
                      style={{ width: '50%' }}
                    />
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
                  <S.Infocontent>{name}</S.Infocontent>

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

              {editType === 'phoneNo' ? (
                <>
                  <S.InfoEditInput>
                    <Input
                      value={phoneNo}
                      onChange={changePhoneNo}
                      style={{ width: '50%' }}
                    />
                  </S.InfoEditInput>
                  <S.InfoEdit
                    onClick={(e: any) => {
                      saveClick(e, 'phoneNo');
                    }}
                  >
                    저장
                  </S.InfoEdit>
                </>
              ) : (
                <>
                  <S.Infocontent>{phoneNo}</S.Infocontent>

                  <S.InfoEdit
                    onClick={(e: any) => {
                      editClick(e, 'phoneNo');
                    }}
                  >
                    수정
                  </S.InfoEdit>
                </>
              )}
            </S.InfoLayout>

            <S.InfoLayout>
              <S.InfoTitle>생년월일</S.InfoTitle>

              {editType === 'dateOfBirth' ? (
                <>
                  <S.InfoEditInput>
                    <Input
                      value={dateOfBirth}
                      onChange={changeDateOfBirth}
                      style={{ width: '50%' }}
                    />
                  </S.InfoEditInput>
                  <S.InfoEdit
                    onClick={(e: any) => {
                      saveClick(e, 'dateOfBirth');
                    }}
                  >
                    저장
                  </S.InfoEdit>
                </>
              ) : (
                <>
                  <S.Infocontent>{dateOfBirth}</S.Infocontent>

                  <S.InfoEdit
                    onClick={(e: any) => {
                      editClick(e, 'dateOfBirth');
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
                    <Radio.Group
                      value={gender}
                      onChange={editChange}
                      style={{ width: '50%' }}
                    >
                      <Radio value={'male'}>M</Radio>
                      <Radio value={'female'}>W</Radio>
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
                  <S.Infocontent>{gender}</S.Infocontent>

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
              <S.InfoEdit
                style={{ marginLeft: '80%', height: 35 }}
                onClick={editSave}
              >
                저장하기
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
