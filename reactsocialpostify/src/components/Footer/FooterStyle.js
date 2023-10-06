import styled from 'styled-components'

const changeBackground4Theme = (theme) => {
  return theme == 'light' ? '#F2F2F2' : '#232323';
}

const changeColor4Theme = (theme) => {
  return theme == 'light' ? '#232323' : '#F2F2F2';
}

export const CustomFooter = styled.footer `
  background-color: ${({theme}) => changeBackground4Theme(theme)};
  transition: all .3s ease-in-out;
  .nav-link {
    color: ${({theme}) => changeColor4Theme(theme)};
  }
`;