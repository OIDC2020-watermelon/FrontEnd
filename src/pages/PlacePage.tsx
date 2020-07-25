import React from 'react';
import styled from 'styled-components';
import PlaceCard from '../components/place/PlaceCard';
import PlaceSeat from '../components/place/PlaceSeat';
import palette from '../lib/style/palette';

export default function PlacePage() {
  return (
    <>
      <S.Container>
        <S.InfoItemWrap>
          <S.InfoTitle>공연장 정보</S.InfoTitle>
          <S.InfoContents>
            <PlaceCard />
          </S.InfoContents>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>좌석 정보</S.InfoTitle>
          <S.InfoContents>
            <PlaceSeat />
          </S.InfoContents>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>공연장 설명</S.InfoTitle>
          <S.InfoContents>
            블루스퀘어(Blue Square)는 서울특별시 용산구 한남동 한강진역 2번 출구
            일대에 위치한 지하 4층, 지상 4층, 연면적 2만9492m2 규모의 종합
            공연장이다. 뮤지컬 전용 공연장(인터파크홀) 1,766석과 대중음악 콘서트
            홀(아이마켓홀) 스탠딩 2,800석/그라운드형 1,373석 및 부대시설을 갖춘
            국내 최대의 복합 공연장으로 2009년 6월 착공하여 2011년 11월
            개관하였다. 2007년 11월 사업시행사를 인터넷 업체인 인터파크의
            자회사인 (주)쇼파크로 선정하여, 2009년 3월 사업 계획이
            승인되었다.[1] 블루스퀘어 사업은 수익형민자사업(BTO)방식으로
            진행되어 준공 후 서울특별시가 소유권을 가지며, 20년 간
            (주)인터파크씨어터에서 운영할 권리를 가지게 된다. 최초 이름은 사업
            운영자인 쇼파크로 불렸으나 공연장 명칭 공모를 통해 "블루스퀘어(Blue
            square)"로 결정되었다.
          </S.InfoContents>
        </S.InfoItemWrap>
      </S.Container>
    </>
  );
}

const S: any = {};
S.Container = styled.div`
  padding: 0 5rem;
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
  padding: 0.5rem 0;
`;

S.InfoContents = styled.div`
  width: 100%;
  font-weight: bold;
  padding: 1rem 0;
`;
