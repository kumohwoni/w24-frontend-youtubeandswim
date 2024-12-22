import React, { useEffect, useState } from 'react'

import './App.css'
import YoutuberContainer from './YoutuberContainer.js'
import SwimContainer from './SwimContainer.js'
import axios from 'axios'

const SERVER_URL = 'http://localhost:8080/api/youtuberswim'

const App = () => {
  const [ youtubers, setYoutubers ] = useState([])
  const [ swimming, setSwimmings ] = useState([])


  const getYoutubers = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/youtubers`)
      console.log(res)

      setYoutubers(res.data)
    } catch (err) {
      console.log(err)
      
      setYoutubers([])
    }
  }

  const getSwimmings = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/swimmings`)
      console.log(res)

      setSwimmings(res.data)
    } catch (err) {
      console.log(err)
      
      setSwimmings([])
    }
  }

  useEffect(() => {
    getYoutubers()
    getSwimmings()
  }, [])

  return (
    <div>
      <Header/>
      <div className='hobby-container'>
        <Youtuberlist 
          title="유튜브 시청"
          listYoutuber={youtubers}/>
        <Swimming 
          title="수영"
          listSwim={swimming}/>
      </div>
    </div>
  )
}

const Header = () => {
  return (
      <h1>HW03 취미 데이터 서버 개발 20230490 박채원</h1>
  )
}

const Youtuberlist = ({title, listYoutuber}) => {
  return (
    <div className='hobby-box'>
      <h2>{title}</h2>
      <div className="youtuber-container">
      {
        listYoutuber.map(youtuber => 
          <YoutuberContainer key={youtuber.id} youtuber={youtuber}/>
        )
      }
      </div>
    </div>
  )
}

const Swimming = ({title, listSwim}) => {
  return (
    <div className='hobby-box'>
      <h2>{title}</h2>
      <div className="swim-container">
        {
          listSwim.map(swim => 
            <SwimContainer key={swim.id} swim={swim}/>
          )
        }
      </div>
    </div>
  )
}


export default App
