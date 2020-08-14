import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import CustomInput from '../common/input/CustomInput';
import { Button, message, Popconfirm } from 'antd';
import {
  addPerformance,
  deletePerformance,
  getTraffic,
  getTrafficTwo,
} from '../../models/saga/reducers/admin';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../models/hook/providers/auth/AuthProvider';
import messageCustom from '../../lib/utils/message';
import Graph from './graph';
import moment from 'moment';
import { RootState } from '../../models';
export default function IndexLayout() {
  const [{ data: user }] = useAuth();
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [deleteNum, setDeleteNum] = useState<number>(0);
  const [trafficNum, setTrafficNum] = useState<number>(0);
  const [trafficLabel, setTrafficLabel] = useState<any>('');
  const [trafficData, setTrafficData] = useState<any>('');
  const [trafficTwoLabel, setTrafficTwoLabel] = useState<any>('');
  const [trafficTwoData, setTrafficTwoData] = useState<any>('');
  const dispatch = useDispatch();
  const history = useHistory();
  if (!user) {
    messageCustom('로그인 후 이용해주세요.');
    history.push('/');
  }
  const enrollPerformance = () => {
    let validation = '';
    if (name && date && place && artist && description) {
      console.log('success');
      dispatch(
        addPerformance.request({
          availableDate: '',
          duration: '',
          productId: name,
          session: '',
          sprice: '',
          startAt: '',
          vipPrice: '',
        }),
      );
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
  const removePerformance = () => {
    console.log(deleteNum);
    if (!deleteNum) {
      message.warning('ID를 입력하세요.');
    } else {
      dispatch(
        deletePerformance.request({
          performanceId: deleteNum,
        }),
      );
      message.success('삭제에 성공하였습니다.');
    }
  };
  const makeTraffic = () => {
    setTrafficLabel([]);
    setTrafficData([]);
    setTrafficTwoLabel([]);
    setTrafficTwoData([]);
    dispatch(
      getTraffic.request({
        performanceId: trafficNum,
      }),
    );
    dispatch(
      getTrafficTwo.request({
        performanceId: trafficNum,
      }),
    );
  };
  const allData = useSelector((state: RootState) => state.admin.traffic.data);
  const allDataTwo = useSelector(
    (state: RootState) => state.admin.trafficTwo.data,
  );
  //console.log(allData);
  useEffect(() => {
    let data = [];
    let labels = [];
    let dataTwo = [];
    let labelsTwo = [];
    for (let i = 0; i < allData.length; i++) {
      data.push(allData[i].docCount);
      labels.push(moment(allData[i].from).format('YYYY-MM-DD HH:mm:ss'));
    }
    for (let i = 0; i < allDataTwo.length; i++) {
      dataTwo.push(allDataTwo[i].docCount);
      labelsTwo.push(moment(allDataTwo[i].from).format('YYYY-MM-DD HH:mm:ss'));
    }
    setTrafficLabel(labels);
    setTrafficData(data);

    setTrafficTwoLabel(labelsTwo);
    setTrafficTwoData(dataTwo);
  }, [allData, allDataTwo]);

  //console.log(trafficLabel, trafficData)
  return (
    <>
      <S.Container>
        <S.InfoItemWrap>
          <S.InfoTitle>공연 추가</S.InfoTitle>
          <S.InfoContentsTitle>공연명</S.InfoContentsTitle>
          <S.InfoContentsJob>
            <S.CustomInputOver
              onChange={(e: any) => {
                setName(e.target.value);
              }}
            />
          </S.InfoContentsJob>
          <S.InfoContentsTitle>공연날짜</S.InfoContentsTitle>
          <S.InfoContentsJob>
            <S.CustomInputOver
              onChange={(e: any) => {
                setDate(e.target.value);
              }}
            />
          </S.InfoContentsJob>
          <S.InfoContentsTitle>공연장소</S.InfoContentsTitle>
          <S.InfoContentsJob>
            <S.CustomInputOver
              onChange={(e: any) => {
                setPlace(e.target.value);
              }}
            />
          </S.InfoContentsJob>
          <S.InfoContentsTitle>출연진</S.InfoContentsTitle>
          <S.InfoContentsJob>
            <S.CustomInputOver
              onChange={(e: any) => {
                setArtist(e.target.value);
              }}
            />
          </S.InfoContentsJob>
          <S.InfoContentsTitle>공연설명</S.InfoContentsTitle>
          <S.InfoContentsJob>
            <S.CustomInputOver
              onChange={(e: any) => {
                setDescription(e.target.value);
              }}
            />
          </S.InfoContentsJob>
          <S.InfoLayout style={{ marginTop: 10 }}>
            <Popconfirm
              title="추가하시겠습니까?"
              onConfirm={enrollPerformance}
              okText="네"
              cancelText="아니요"
            >
              <S.InfoEdit style={{ marginLeft: '80%', height: 35 }}>
                저장
              </S.InfoEdit>
            </Popconfirm>
          </S.InfoLayout>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>공연 제거</S.InfoTitle>
          <S.InfoContentsTitle>공연식별번호</S.InfoContentsTitle>
          <S.InfoContentsJob>
            <S.CustomInputOver
              type="number"
              onChange={(e: any) => {
                setDeleteNum(e.target.value);
              }}
            />
          </S.InfoContentsJob>
          <S.InfoLayout style={{ marginTop: 10 }}>
            <Popconfirm
              title="삭제하시겠습니까?"
              onConfirm={removePerformance}
              okText="네"
              cancelText="아니요"
            >
              <S.InfoEdit style={{ marginLeft: '80%', height: 35 }}>
                삭제
              </S.InfoEdit>
            </Popconfirm>
          </S.InfoLayout>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>공연 대시보드</S.InfoTitle>
          <S.InfoContentsTitle>공연ID</S.InfoContentsTitle>
          <S.InfoContentsJob>
            <S.CustomInputOver
              type="number"
              onChange={(e: any) => {
                setTrafficNum(e.target.value);
              }}
            />
          </S.InfoContentsJob>
          <S.InfoLayout style={{ marginTop: 10 }}>
            <Popconfirm
              title="검색하시겠습니까?"
              onConfirm={makeTraffic}
              okText="네"
              cancelText="아니요"
            >
              <S.InfoEdit style={{ marginLeft: '80%', height: 35 }}>
                검색
              </S.InfoEdit>
            </Popconfirm>
          </S.InfoLayout>
          <S.GraphLayout>
            <S.GraphLayoutCompo>
              <Graph labels={trafficLabel} data={trafficData} type={'left'} />
            </S.GraphLayoutCompo>
            <S.GraphLayoutCompo>
              <Graph
                labels={trafficTwoLabel}
                data={trafficTwoData}
                type={'right'}
              />
            </S.GraphLayoutCompo>
          </S.GraphLayout>
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
  text-align: right;
`;
S.InfoLayout = styled.div`
  display: flex;
  height: 50px;
  text-align: left;
`;
S.InfoEdit = styled(Button)`
  flex: 1;
`;
S.GraphLayout = styled.div`
  display: flex;
`;
S.GraphLayoutCompo = styled.div`
  flex: 1;
  padding: 1rem;
`;
S.CustomInputOver = styled(CustomInput)`
  width: 70%;
`;
