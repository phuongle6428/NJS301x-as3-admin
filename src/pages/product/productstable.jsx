import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Delete from '../../components/delete/Delete';

const getColumns = (callData, api) => {
   const columns = [
      {
         title: 'ID',
         dataIndex: '_id',
         key: 'id'
      },
      {
         title: 'Name',
         dataIndex: 'name',
         key: 'name'
      },
      {
         title: 'Price',
         dataIndex: 'price',
         key: 'price',
         render: (value) => new Intl.NumberFormat('de-DE').format(value)
      },
      {
         title: 'Image',
         dataIndex: 'img1',
         key: 'image',
         className: 'img-cell',
         width: 20,
         render: (value) => <img src={value} className='product-img' alt='product image' />
      },
      {
         title: 'Category',
         key: 'category',
         dataIndex: 'category'
      },
      {
         title: 'Action',
         key: 'action',
         className: 'action-cell',
         render: (record) => {
            return (
               <>
                  <Button type="primary" className='btn-update'>Update</Button>
                  <Button type="primary" danger className='btn-delete'>Delete</Button>
                  {/* <Delete {...record} callData={callData} api={api} /> */}
               </>
            )
         }
      },
   ];
   return columns
}


export { getColumns };