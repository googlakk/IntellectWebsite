import Home from '@/components/Home';
import { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Intellect pro school",
};

export default function App() {
  return (
    <main>
      <Home/>
    </main>
  )
}
