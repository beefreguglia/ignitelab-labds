import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignIn } from './Signin'
import { rest } from 'msw'

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {} ,
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message:'Login realizado!'
          }))
        })
      ],
    },
  },
} as Meta

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'beefreguglia@gmail.com')
    userEvent.type(canvas.getByPlaceholderText('******'), 'teste123!')
    userEvent.click(canvas.getByRole('button'))
    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
    
  }
} as StoryObj
