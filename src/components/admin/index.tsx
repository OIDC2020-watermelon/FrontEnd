import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import CustomInput from '../common/input/CustomInput';
import { Button, message } from 'antd';

export default function IndexLayout() {
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [deleteNum, setDeleteNum] = useState<number>(0);

  const addPerformance = () => {
    let validation = '';

    if (name && date && place && artist && description) {
      console.log('success');
    } else {
      if (name === '') {
        validation += '공연명 ';
      }

      if (date === '') {
        if (validation === '') {
          validation += '공연날짜 ';
        } else {
          validation += ', 공연날짜 ';
        }
      }

      if (place === '') {
        if (validation === '') {
          validation += '공연장소 ';
        } else {
          validation += ', 공연장소 ';
        }
      }

      if (artist === '') {
        if (validation === '') {
          validation += '출연진 ';
        } else {
          validation += ', 출연진 ';
        }
      }

      if (description === '') {
        if (validation === '') {
          validation += '공연설명 ';
        } else {
          validation += ', 공연설명 ';
        }
      }
      validation += '을 채워주세요.';

      message.warning(validation);
    }
  };

  const deletePerformance = () => {
    console.log(deleteNum);
  };

  return (
    <>
      <S.Container>
        <S.InfoItemWrap>
          <S.InfoTitle>공연 추가</S.InfoTitle>

          <S.InfoContentsTitle>공연명</S.InfoContentsTitle>

          <S.InfoContentsJob>
            <CustomInput
              onChange={(e: any) => {
                setName(e.target.value);
              }}
            />
          </S.InfoContentsJob>

          <S.InfoContentsTitle>공연날짜</S.InfoContentsTitle>

          <S.InfoContentsJob>
            <CustomInput
              onChange={(e: any) => {
                setDate(e.target.value);
              }}
            />
          </S.InfoContentsJob>

          <S.InfoContentsTitle>공연장소</S.InfoContentsTitle>

          <S.InfoContentsJob>
            <CustomInput
              onChange={(e: any) => {
                setPlace(e.target.value);
              }}
            />
          </S.InfoContentsJob>

          <S.InfoContentsTitle>출연진</S.InfoContentsTitle>

          <S.InfoContentsJob>
            <CustomInput
              onChange={(e: any) => {
                setArtist(e.target.value);
              }}
            />
          </S.InfoContentsJob>

          <S.InfoContentsTitle>공연설명</S.InfoContentsTitle>

          <S.InfoContentsJob>
            <CustomInput
              onChange={(e: any) => {
                setDescription(e.target.value);
              }}
            />
          </S.InfoContentsJob>

          <S.InfoLayout style={{ marginTop: 30 }}>
            <S.InfoEdit
              style={{ marginLeft: '80%', height: 35 }}
              onClick={addPerformance}
            >
              저장
            </S.InfoEdit>
          </S.InfoLayout>
        </S.InfoItemWrap>

        <S.InfoItemWrap>
          <S.InfoTitle>공연 제거</S.InfoTitle>

          <S.InfoContentsTitle>공연식별번호</S.InfoContentsTitle>

          <S.InfoContentsJob>
            <CustomInput
              type="number"
              onChange={(e: any) => {
                setDeleteNum(e.target.value);
              }}
            />
          </S.InfoContentsJob>

          <S.InfoLayout style={{ marginTop: 30 }}>
            <S.InfoEdit
              style={{ marginLeft: '80%', height: 35 }}
              onClick={deletePerformance}
            >
              저장
            </S.InfoEdit>
          </S.InfoLayout>
        </S.InfoItemWrap>
      </S.Container>
    </>
  );
}

const S: any = {};
S.Container = styled.div`
  max-width: 1130px;
  margin: 0 auto;
`;
S.InfoItemWrap = styled.div`
  width: 100%;
  font-weight: bold;
  border-top: 2px solid ${palette.gray8};
`;
S.InfoTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.gray4};
  font-weight: bold;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`;

S.InfoContents = styled.div`
  width: 100%;
  font-weight: bold;
  padding: 1rem 0;
`;

S.InfoContentsTitle = styled.div`
  width: 50%;
  padding-left: 10%;
  display: inline-block;
  margin-bottom: 1rem;
`;

S.InfoContentsJob = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 1rem;
`;

S.InfoLayout = styled.div`
  display: flex;
  height: 50px;
  text-align: left;
`;

S.InfoEdit = styled(Button)`
  flex: 1;
`;
