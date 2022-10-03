import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'
import Login from '../components/Login'
import UserDashboard from '../components/UserDashboard'



export default function Home() {
  // const [decks, setDecks] = useState()
  const {currentUser} = useAuth()

  console.log(currentUser)
  return (
    <>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </>
    
  )
}
