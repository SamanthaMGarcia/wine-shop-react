const initialState = {
  name: '',
  year: 0,
  price: 0,
  img_url: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.wineFormData;

    case 'RESET_WINE_FORM':
      return initialState;

    default:
      return state;
  }
}
