import { Meta, StoryObj} from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<HeadingProps>

export const Default = {} as StoryObj<HeadingProps>
export const Small = {
  args: {
    size:'sm'
  }
} as StoryObj<HeadingProps>
export const Large = {
  args: {
    size:'lg'
  }
} as StoryObj<HeadingProps>
export const CustomComponent = {
  args: {
    asChild: true,
    children: (<h1>Heading com h1</h1>)
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
} as StoryObj<HeadingProps>