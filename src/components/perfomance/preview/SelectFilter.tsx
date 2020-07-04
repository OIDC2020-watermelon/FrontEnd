import React from 'react';
import { Radio } from 'antd';
import useInput from '../../../lib/utils/hooks';
import { TFilter } from '../../../types/common/commonType';

interface SelectFilterProps {
  filter: TFilter;
  changeFilter: any;
}

export default function SelectFilter({
  filter,
  changeFilter,
}: SelectFilterProps) {
  return (
    <>
      <div>
        <Radio.Group
          defaultValue={'main'}
          value={filter}
          onChange={changeFilter as any}
        >
          <Radio.Button value="main">기본정보</Radio.Button>
          <Radio.Button value="cost">가격정보</Radio.Button>
          <Radio.Button value="artist">출연정보</Radio.Button>
          <Radio.Button value="performance">작품정보</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );
}
