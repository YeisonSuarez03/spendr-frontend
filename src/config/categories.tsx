import React from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import SellIcon from '@mui/icons-material/Sell'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import HomeIcon from '@mui/icons-material/Home'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'

export type CategoryOption = { name: string; icon: React.ReactNode }

export const ingressOptions: CategoryOption[] = [
  { name: 'Salary', icon: <AttachMoneyIcon /> },
  { name: 'Transfers', icon: <SwapHorizIcon /> },
  { name: 'Sell', icon: <SellIcon /> },
]

export const egressOptions: CategoryOption[] = [
  { name: 'Food', icon: <FastfoodIcon /> },
  { name: 'Rent', icon: <HomeIcon /> },
  { name: 'Home Services', icon: <ElectricBoltIcon /> },
  { name: 'Transport', icon: <DirectionsBusIcon /> },
  { name: 'Personal Consume', icon: <ShoppingCartIcon /> },
  { name: 'Fitness', icon: <FitnessCenterIcon /> },
]
