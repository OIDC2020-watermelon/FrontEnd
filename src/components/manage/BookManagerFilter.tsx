import React from 'react';
import { Button, Row, Col } from 'antd';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import palette from '../../lib/style/palette';

const { RangePicker } = DatePicker;

export default function BookManagerFilter({ onOkPicker }: { onOkPicker: any }) {
  return (
    <>
      <S.FilterContainer>
        <Row align="middle" justify="start">
          <Col>
            <span>
              소요시간&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </Col>
          <Col>
            <RangePicker onChange={onOkPicker} />
          </Col>
          <S.FilterText>
            <span>최대 2개월까지 조회 가능합니다.</span>
          </S.FilterText>

          <S.FilterText>
            <Button type="primary">조회</Button>
          </S.FilterText>
        </Row>
      </S.FilterContainer>
    </>
  );
}

const S: any = {};

S.FilterContainer = styled.div`
  width: 100%;
  height: 8rem;
  border-radius: 5px;
  border: 1px solid ${palette.gray6};
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

S.FilterText = styled(Col)`
  margin-left: 1.5rem;
`;

S.CustomLink = styled.span`
  color: ${palette.blue6};
  cursor: pointer;
  &:hover {
    color: ${palette.blue4};
  }
`;

S.FilterLinkWrap = styled(Col)`
  width: 18rem;
  display: flex;
  justify-content: space-between;
`;
