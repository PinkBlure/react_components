import React from 'react'
import Accordion from './Accordion'

export default {
  title: 'Components/Accordion',
  component: Accordion,
}

const Template = (args) => <Accordion {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Esto es un acordeón',
  content: 'Esto es el cuerpo del acordeón',
}
