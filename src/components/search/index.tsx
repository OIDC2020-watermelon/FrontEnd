import React, { useState, useEffect } from 'react';
import PerformanceLayout from './performance';
import PlaceLayout from './place';
import ArtistLayout from './artist';
import { Moment } from 'moment';
import { Menu } from 'antd';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getPerformances,
  getPlaces,
  getArtists,
} from '../../models/saga/reducers/search';
import store from '../../models/configure';

export interface Performance {
  data: Array<object>;
  error: null;
  issues: null;
}

export interface Place {
  img: HTMLImageElement | string;
  name: string;
  addr: string;
  number: string;
  url: string;
}

export interface PlaceList {
  list: Place[];
}

export interface Artist {
  img: HTMLImageElement | string;
  name: string;
  year: Moment | string;
  work: Array<string>;
}

export interface ArtistList {
  list: Artist[];
}

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [performances, setPerformances] = useState<any>({
    data: [],
    error: null,
    issues: null,
  });
  const [places, setPlaces] = useState<object>({
    data: [],
    error: null,
    issues: null,
  });
  const [artists, setArtists] = useState<object>({
    data: [],
    error: null,
    issues: null,
  });

  let params = window.location.pathname.split('/')[3];
  const urlLocation = window.location.pathname;

  if (!params) {
    history.push('/');
  }
  let urlTypes: string;
  if (urlLocation.includes('performance')) {
    urlTypes = '1';
  } else if (urlLocation.includes('place')) {
    urlTypes = '2';
  } else {
    urlTypes = '3';
  }

  store.subscribe(() => {
    setPerformances(store.getState().search.performance);
    setPlaces(store.getState().search.place);
    setArtists(store.getState().search.artist);
  });

  useEffect(() => {
    dispatch(getPerformances.request({ keyword: params }));
    dispatch(getPlaces.request({ keyword: params }));
    dispatch(getArtists.request({ keyword: params }));
  }, [dispatch]);

  console.log('performance : ', performances);
  console.log('places : ', places);
  console.log('artists : ', artists);
  return (
    <>
      <S.StyledMenu
        defaultSelectedKeys={[urlTypes]}
        mode="inline"
        theme="light"
      >
        <Menu.Item key="1">
          <Link to={`/search/performance/${params}`}>공연</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to={`/search/place/${params}`}>공연장</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to={`/search/artist/${params}`}>아티스트</Link>
        </Menu.Item>
      </S.StyledMenu>

      {urlTypes === '1' ? (
        <PerformanceLayout performances={performances} />
      ) : urlTypes === '2' ? (
        <PlaceLayout PlaceList={places} />
      ) : (
        <ArtistLayout ArtistList={artists} />
      )}
    </>
  );
};

export default Index;

const S: any = {};

S.StyledMenu = styled(Menu)`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  text-align: center;
  padding-top: 5px;
  border: 1px solid;
  border-color: lightgray;
`;
