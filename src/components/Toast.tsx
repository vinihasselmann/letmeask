import {ButtonHTMLAttributes} from 'react'
import { Toaster } from 'react-hot-toast'
import '../styles/button.scss'

type ToastProps = string;


export function ToastError(props:  ToastProps) {
  return (
    <div><Toaster/></div>
  )
}