import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }:TextInputIconProps) {
  return(
    <Slot className="w-4 h-6 text-gray-400 ">
      {children}
    </Slot>
  )
}

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return(
    <div className={clsx(`
        py-4
        px-2
        rounded
        bg-gray-800
        w-full
        focus-within:ring-2
        ring-cyan-300
        flex
        items-center
        gap-3
        h-12
      `)}
    >
      {children}
    </div>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput({...props}: TextInputInputProps) {
  return(
    <input
      {...props}
      className="bg-transparent rounded outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400 " 
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}