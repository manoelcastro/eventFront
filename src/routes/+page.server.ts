import type { Actions } from './$types';
 
export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const fone = formData.get('fone')
    const isSocial = formData.get('isSocial')
    const social = formData.get('social')
    const knowPayment = formData.get('knowPayment')

    const data = {
      name,
      email,
      fone,
      isSocial: isSocial === 'on'? true: false,
      social,
      knowPayment: knowPayment === 'on'? true: false
    }

    const response = await fetch('http://localhost:1337/api/participants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data})
    })
    console.log(response)
  }
};