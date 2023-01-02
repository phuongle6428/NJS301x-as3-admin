import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd';
import { getColumns } from './productstable';
import './products.css'
import productAPI from '../../API/productAPI';
import { TextField } from '@mui/material';

export default function Products() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    getProducts()
  }, [])
  async function getProducts() {
    let response = await productAPI.getProducts()
    if (response) {
      let tableData = response.map((value, index) => {
        return { ...value, key: index }
      })
      setProduct(tableData)
    }
  }
  const columns = getColumns(getProducts, 'products')
  const handleSearch = async (e) => {
    const query = {
      name: e.target.value
    }
    let response = await productAPI.getSearchByName(query)
    if(response) {
      setProduct(response)
    }
  }
  return (
    <div className='products'>
      <div className='search'>
        <h4>Products</h4>
        <TextField variant="outlined" placeholder='Enter Search' size='small' onChange={handleSearch}></TextField>
      </div>
      <Table
        columns={columns}
        dataSource={products}
        pagination={{ pageSize: 8 }}
      />
    </div>
  )
}
