import React from 'react';
import Index from '../components/admin';
// import messageCustom from '../lib/utils/message';
import { useSelector } from 'react-redux';
import { RootState } from '../models';
import AdminLoginForm from '../components/admin/AdminLoginForm';

export default function AdminPage() {
  const admin = useSelector((state: RootState) => state.admin.admin.data);

  return <>{admin ? <Index /> : <AdminLoginForm />}</>;
}
