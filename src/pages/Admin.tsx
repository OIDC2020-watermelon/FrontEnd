import React, { useEffect } from 'react';
import Index from '../components/admin';
// import messageCustom from '../lib/utils/message';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../models';
import AdminLoginForm from '../components/admin/AdminLoginForm';
import { getAdmin } from '../models/saga/reducers/admin';
import AppLayout from '../containers/common/AppLayout';

export default function AdminPage() {
  const admin = useSelector((state: RootState) => state.admin.admin.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmin.request({}));
  }, [dispatch]);

  return (
    <>
      <AppLayout>{admin ? <Index /> : <AdminLoginForm />}</AppLayout>
    </>
  );
}
