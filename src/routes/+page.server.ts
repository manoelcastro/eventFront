import type { Actions } from './$types';
 
export const actions: Actions = {
  default: async (event) => {
    console.log(event)
  }
};