import React, { useState } from 'react';
import { Tag } from 'antd';

const columns = [
   {
      title: 'ID User',
      dataIndex: 'user',
      key: 'user'
   },
   {
      title: 'Name',
      dataIndex: 'fullname',
      key: 'fullname'
   },
   {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone'
   },
   {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
   },
   {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (value) => {
         return new Intl.NumberFormat('de-DE').format(value)
      }
   },
   {
      title: 'Delivery',
      dataIndex: 'delivery',
      key: 'delivery'
   },
   {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
   },
   {
      title: 'Detail',
      key: 'detail',
      render: (record) => {
         return (
            <Tag color='green'>
               View
            </Tag>
         );
      }
   },
];

export {columns};