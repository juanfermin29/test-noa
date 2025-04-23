'use client'
import { useUser } from '@/app/hooks/useUser'
import React from 'react'

export const WelcomeBar = () => {
  const { user } = useUser();
  return (
    <>
      {user && (
        <span className="text-xl">Bienvenido, <span className="text-green-700 underline">{user}</span></span>
      )}
    </>
  )
}
