import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/style/palette';

const CategoryList = [
  {
    title: '콘서트',
    select: true,
  },
  {
    title: '연극',
    select: true,
  },
  {
    title: '클래식/무용',
    select: true,
  },
  {
    title: '전시/행사',
    select: true,
  },
];

const MainCategory = () => {
  return (
    <>
      <CardLayout>
        {CategoryList.map((list, key) => {
          return <Tag>{list.title}</Tag>;
        })}
      </CardLayout>
    </>
  );
};

const CardLayout = styled.div`
  margin: 0 auto;
  width: fit-content;
  padding: 10px;
  border: 1px solid lightgray;
  margin-top: 15px;
`;

const Tag = styled.span`
  color: white;
  background: ${palette.blue5};
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 22px;
  padding: 3px 25px;
  display: inline-block;
  cursor: pointer;
  border-right: 1px solid;
`;
export default MainCategory;
