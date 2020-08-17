import React, { useEffect, useState } from 'react';
import BookManagerFilter from './BookManagerFilter';
import BookListContents from './booklist/BookListContents';
import BookListHeader from './booklist/BookListHeader';
import {
  getReservations,
  deleteReservation,
} from '../../models/saga/reducers/reservation';
import store from '../../models/configure';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { Spin } from 'antd';

export default function BookList() {
  const [manage, setManage] = useState<any>({ data: [], error: '' });
  const [filterManage, setFilterManage] = useState<any>({
    data: [],
    error: '',
  }); // initial State
  const [spin, setSpin] = useState<boolean>(false); // initial State
  const dispatch = useDispatch();

  store.subscribe(() => {
    //console.log("실행!!", store.getState());
    var result = {
      data: store
        .getState()
        .reservation.reservation.data.map(function (el: any, idx: number) {
          var o = Object.assign({ key: idx }, el);
          return o;
        }),
      error: '',
    };
    setManage(result);
    setFilterManage(result);
  });

  useEffect(() => {
    // userid 1 테스트
    dispatch(getReservations.request({ userId: 1 }));
  }, [dispatch]);

  const onOkPicker = (value: any, datastring: Array<string>) => {
    var startDate = moment(datastring[0], 'YYYY-MM-DD');
    var endDate = moment(datastring[1], 'YYYY-MM-DD');

    var filter = {
      data: manage.data.filter(function (el: any, idx: number) {
        var compareDate = moment(el.availableDate);
        if (compareDate.isBetween(startDate, endDate)) {
          return el;
        } else {
          return false;
        }
      }),
      error: '',
    };
    setFilterManage(filter);
  };

  // const onClickInit = () => {
  //   setFilterManage(manage);
  // };

  const timeButton = (type: string) => {
    setFilterManage(manage);
    var startDate = moment().format('YYYY-MM-DD');
    var endDate = '';

    if (type === 'week') {
      endDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
    } else if (type === 'half') {
      endDate = moment().subtract(15, 'days').format('YYYY-MM-DD');
    } else if (type === 'month') {
      endDate = moment().subtract(1, 'months').format('YYYY-MM-DD');
    } else if (type === 'tmonth') {
      endDate = moment().subtract(2, 'months').format('YYYY-MM-DD');
    } else {
      setFilterManage(manage);
      return;
    }

    // console.log("startDate : " , endDate, startDate);
    var filter = {
      data: manage.data.filter(function (el: any, idx: number) {
        var compareDate = moment(el.availableDate);
        if (compareDate.isBetween(endDate, startDate)) {
          return el;
        } else {
          return false;
        }
      }),
      error: '',
    };

    // console.log("filter : " ,filter);
    setFilterManage(filter);
  };

  const cancelButton = (serialNumber: number) => {
    console.log('serialNumber : ', serialNumber);
    // manage Array filter 필요 + API

    var filter = {
      data: manage.data.filter(function (el: any, idx: number) {
        if (el.id === serialNumber) {
          el.canceled = true;
          return el;
        } else {
          return el;
        }
      }),
      error: '',
    };

    setSpin(true);

    setTimeout(() => {
      setManage(filter);
      setFilterManage(filter);
      setSpin(false);
    }, 3000);

    dispatch(deleteReservation.request({ reservationId: serialNumber }));
  };

  const statusButton = (type: string) => {
    var filter;
    if (type === 'cancel') {
      filter = {
        data: manage.data.filter(function (el: any, idx: number) {
          if (el.canceled) {
            return el;
          } else {
            return 1;
          }
        }),
        error: '',
      };
      setFilterManage(filter);
    } else if (type === 'reservation') {
      filter = {
        data: manage.data.filter(function (el: any, idx: number) {
          if (el.canceled) {
            return 1;
          } else {
            return el;
          }
        }),
        error: '',
      };
      setFilterManage(filter);
    } else {
      setFilterManage(manage);
      return false;
    }
  };
  // console.log('List : ', manage);
  return (
    <>
      <BookManagerFilter
        onOkPicker={onOkPicker}
        // onClickInit={onClickInit}
        timeButton={timeButton}
      />
      <BookListHeader
        managesLen={filterManage.data.length}
        statusButton={statusButton}
      />
      <Spin spinning={spin}>
        <BookListContents manages={filterManage} cancelButton={cancelButton} />
      </Spin>
    </>
  );
}
