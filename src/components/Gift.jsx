import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Table } from "reactstrap";
import { liveGift } from "utils/api/api";

export default function Gift({roomId}) {
  const [gift, setGift] = useState([])

  useEffect(() => {
    axios.get(liveGift(roomId)).then(res => {
      const giftLog = res.data.reverse();
      setGift(giftLog);
    })
    
  }, [gift.length, roomId])

  return (
    gift.length !== 0 ? (
      <div className="scroll">
        <Table dark>
          <thead>
            <tr>
              <th>Ava</th>
              <th>Name</th>
              <th>Gift</th>
              <th>Total</th>
            </tr>
          </thead>
          {gift.map((item, idx) => (
            <tbody key={idx} >
              <tr>
                <td><img width="40" src={item.avatar_url} /></td>
                <th style={{wordBreak: 'break-word'}}>{item.name}</th>
                <td><img width="40" src={item.image} /></td>
                <td>x{item.num}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    ) : (
      <Table dark>
        <thead>
          <tr>
            <th>Ava</th>
            <th>Name</th>
            <th>Gift</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <td colSpan="4" className="text-center">Gift not found</td>
        </tbody>
      </Table>
    )
  )
}
