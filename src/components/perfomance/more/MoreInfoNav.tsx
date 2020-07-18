import React from 'react';
import styled from 'styled-components';
import { Radio } from 'antd';
import { TMorePerformanceFilter } from '../../../types/common/commonType';

interface MoreInfoNavProps {
  filter: TMorePerformanceFilter;
  changeFilter: any;
}
export default function MoreInfoNav({
  filter,
  changeFilter,
}: MoreInfoNavProps) {
  return (
    <>
      <S.NavWrap>
        <>
          <Radio.Group
            onChange={changeFilter as any}
            defaultValue={'main'}
            value={filter}
          >
            <Radio.Button className="filterItem" value="more">
              상세정보
            </Radio.Button>
            <Radio.Button className="filterItem" value="review">
              관람후기
            </Radio.Button>
            <Radio.Button className="filterItem" value="expect">
              기대평
            </Radio.Button>
            <Radio.Button className="filterItem" value="qna">
              Q&#38;A
            </Radio.Button>
            <Radio.Button className="filterItem" value="notice">
              예매유의사항
            </Radio.Button>
            <Radio.Button className="filterItem" value="place">
              공연장정보
            </Radio.Button>
          </Radio.Group>
        </>
      </S.NavWrap>
    </>
  );
}

const S: any = {};
S.NavWrap = styled.div`
  width: 50rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  & .filterItem {
    text-align: center;
    width: 8rem;
  }
`;
