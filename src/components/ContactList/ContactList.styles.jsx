import styled from '@emotion/styled/macro';



export const Contact = styled.ul`
width: 300px;
padding: 0;
`

export const ContactItem = styled.li`
display:flex;
align-items: center;
justify-content: space-between;

`
export const Text = styled.p`
font-size:18px;
font-weight: 500;
`
export const ButtonDelete = styled.button`
background-color: #fff;
cursor: pointer;
margin-left: 20px;
  border-radius:5px;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px rgba(50, 50, 93, 0.25);
    background: blue;
  }
`