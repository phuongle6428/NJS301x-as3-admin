import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineAccountBalanceWallet, MdOutlineMonetizationOn, MdOutlineShoppingCart, MdPersonOutline } from 'react-icons/md'
import { Table } from 'antd';
import './dashboard.css'
import { columns } from './dashboardtable';
import orderAPI from '../../API/orderAPI';

export default function DashBoard() {
  const [order, setOrder] = useState([])
  const isOne = useRef(true)
  useEffect(() => {
    async function getOrders() {
      let response = await orderAPI.getOrders()
      if (response) {
        let tableData = response.map((value, index) => {
          return { ...value, key: index }
        })
        setOrder(tableData)
      }
    }
    if (isOne.current) {
      getOrders()
      isOne.current = false
    }

  }, [])
  let total = 0
  if(order.length > 0) {
    let x = order.map(value => {
      return value.total
    })
    total = new Intl.NumberFormat('de-DE').format(x.reduce((pre, cur) => pre + cur)) 
  }
  return (
    <div className='dashboard'>
      <div className='infoboard'>
        <div className='infoboard-item'>
          <div>
            <h5 className='title'>2</h5>
            <p>Client</p>
          </div>
          <MdPersonOutline viewBox="0 0 25 25" />
        </div>
        <div className='infoboard-item'>
          <div>
            <h5 className='title' style={{display: 'flex'}}><span>{total}</span><sup style={{fontSize: '0.7em', marginLeft: '0.25rem'}}>VND</sup></h5>
            <p>Earnings of Month</p>
          </div>
          <MdOutlineMonetizationOn viewBox="0 0 25 25" />
        </div>
        <div className='infoboard-item'>
          <div>
            <h5 className='title'>{order.length}</h5>
            <p>New Order</p>
          </div>

          <MdOutlineShoppingCart viewBox="0 0 25 25" />
        </div>
      </div>
      <div className='tableboard'>
        <Table
          columns={columns}
          dataSource={order}
          pagination={{ pageSize: 8 }}
          title={() => "History"}
        />
      </div>
    </div>
  )
}
