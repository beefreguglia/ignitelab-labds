import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInput, TextInputInputProps, TextInputRootProps } from './TextInput'
import { Envelope } from 'phosphor-react'


export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [ 
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />
    ] 
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
} as Meta<TextInputRootProps>

export const Default = {} as StoryObj<TextInputRootProps>

export const WithoutIcon = {
  args: {
    children: <TextInputInput placeholder='Type your email' />
  }
} as StoryObj<TextInputRootProps>
