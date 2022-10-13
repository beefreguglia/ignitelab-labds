import { Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'md'
  } ,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
  },
} as Meta<TextProps>

export const Default = {} as StoryObj<TextProps>
export const Small = {
  args: {
    size:'sm'
  }
} as StoryObj<TextProps>
export const Large = {
  args: {
    size:'lg'
  }
} as StoryObj<TextProps>
export const CustomComponent = {
  args: {
    asChild: true,
    children: (<p>Testando com P</p>)
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
} as StoryObj<TextProps>