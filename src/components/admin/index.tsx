import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import CustomInput from '../common/input/CustomInput';
import { Button, message, Popconfirm, Select, DatePicker } from 'antd';
import {
  addPerformance,
  deletePerformance,
  getTraffic,
  getTrafficTwo,
} from '../../models/saga/reducers/admin';
import { useDispatch, useSelector } from 'react-redux';
import Graph from './graph';
import moment, { Moment } from 'moment';
import { RootState } from '../../models';

const { Option } = Select;
const { RangePicker } = DatePicker;

export default function IndexLayout() {
  const [title, setTitle] = useState<string>('');
  const [releaseStartTime, setReleaseStartTime] = useState<string | Moment>('');
  const [releaseEndTime, setReleaseEndTime] = useState<string | Moment>('');
  const [availableDates, setAvailableDates] = useState<Array<string>>([]);
  const [artistIds] = useState<Array<string>>([]);
  const [placeId, setPlace] = useState<number>(0);
  const [category, setCategory] = useState<string>('CONCERT');

  const [date, setDate] = useState<string>('');
  const [deleteNum, setDeleteNum] = useState<number>(0);
  const [trafficNum, setTrafficNum] = useState<number>(0);
  const [trafficLabel, setTrafficLabel] = useState<any>('');
  const [trafficData, setTrafficData] = useState<any>('');
  const [trafficTwoLabel, setTrafficTwoLabel] = useState<any>('');
  const [trafficTwoData, setTrafficTwoData] = useState<any>('');

  const dispatch = useDispatch();

  const SelectChange = (e: any) => {
    setCategory(e);
  };

  const onOkPicker = (value: any, datastring: Array<string>) => {
    var startDate = moment(datastring[0]);
    var endDate = moment(datastring[1]);

    console.log(startDate, endDate);
    setReleaseStartTime(startDate);
    setReleaseEndTime(endDate);
  };

  const addPerformanceLayout = () => {
    if (availableDates.includes(date)) {
      message.warning('존재하는 날짜입니다.');
    } else {
      setAvailableDates([...availableDates, date]);
    }
  };

  const onAddPicker = (value: any, datastring: string) => {
    console.log(value, datastring);
    setDate(datastring);
  };

  const enrollPerformance = () => {
    let validation = '';
    if (
      title &&
      releaseStartTime &&
      releaseEndTime &&
      placeId &&
      category &&
      availableDates.length > 0
    ) {
      console.log('success');
      console.log(
        title,
        releaseStartTime,
        releaseEndTime,
        placeId,
        category,
        availableDates,
      );
      try {
        dispatch(
          addPerformance.request({
            availableDates: availableDates,
            category: category,
            placeId: placeId,
            releaseEndTime: releaseEndTime,
            releaseStartTime: releaseStartTime,
            title: title,
            artistIds: artistIds,
          }),
        );
        message.success('등록에 성공하였습니다.');
      } catch (error) {
        message.warning('등록 실패하였습니다.');
      }
    } else {
      if (title === '') {
        validation += '공연명 ';
      }
      if (placeId === 0) {
        if (validation === '') {
          validation += '공연장소 ';
        } else {
          validation += ', 공연장소 ';
        }
      }

      if (releaseStartTime === '' || releaseEndTime === '') {
        if (validation === '') {
          validation += '공연기간 ';
        } else {
          validation += ', 공연기간 ';
        }
      }

      if (availableDates.length === 0) {
        if (validation === '') {
          validation += '공연날짜 ';
        } else {
          validation += ', 공연날짜 ';
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

  let addLayoutArr = [];
  console.log('availableDates', availableDates);
  for (let i = 0; i < availableDates.length; i++) {
    addLayoutArr.push(<div key={i}>{availableDates[i]}</div>);
  }

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
  //공연명, 공연장소, 카테고리, 릴리즈타임들, 공연날짜
  return (
    <>
      <S.Container>
        <S.InfoItemWrap>
          <S.InfoTitle>공연 추가</S.InfoTitle>
          <S.InfoContentsTitle>공연명</S.InfoContentsTitle>
          <S.InfoContentsJob>
            <S.CustomInputOver
              onChange={(e: any) => {
                setTitle(e.target.value);
              }}
            />
          </S.InfoContentsJob>

          <S.InfoContentsTitle>공연장소</S.InfoContentsTitle>
          <S.InfoContentsJob>
            <S.CustomInputOver
              onChange={(e: any) => {
                setPlace(parseInt(e.target.value));
              }}
            />
          </S.InfoContentsJob>

          <S.InfoContentsTitle>카테고리</S.InfoContentsTitle>
          <S.InfoContentsJob>
            <Select
              defaultValue="CONCERT"
              style={{ width: '70%', textAlign: 'left' }}
              onChange={SelectChange}
            >
              <Option value="CONCERT">콘서트</Option>
              <Option value="PLAY">연극</Option>
              <Option value="CLASSIC_DANCE">클래식/무용</Option>
              <Option value="EXHIBITION_EVENT">전시/행사</Option>
            </Select>
          </S.InfoContentsJob>

          <S.InfoContentsTitle>공연기간</S.InfoContentsTitle>
          <S.InfoContentsJob>
            <RangePicker
              style={{ width: '70%', textAlign: 'left' }}
              onChange={onOkPicker}
            />
          </S.InfoContentsJob>

          <S.InfoContentsTitle>공연날짜</S.InfoContentsTitle>

          <S.InfoContentsJob style={{ marginTop: 10 }}>
            <S.InfoContentsJob style={{ marginRight: '6.5%' }}>
              <DatePicker onChange={onAddPicker} />
            </S.InfoContentsJob>

            <Popconfirm
              title="공연일정을 추가하시겠습니까?"
              onConfirm={addPerformanceLayout}
              okText="네"
              cancelText="아니요"
            >
              <S.InfoEdit style={{ width: '40%', height: 35 }}>추가</S.InfoEdit>
            </Popconfirm>
          </S.InfoContentsJob>

          <S.InfoContentsTitle />
          <S.InfoContentsJob>{addLayoutArr}</S.InfoContentsJob>

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
              type="text"
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
