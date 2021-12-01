import styled from "styled-components"

export const App = styled.div`
  font-family: 'Urbanist';
`;


export const Badge = styled.div`
  background: ${props => props.theme.palette.secondary[100]};
  padding: 1rem;
  color: #fff;
  font-size: 26px;
  border-radius: 100px;
  text-align: center;
  font-weight: 700;
  margin: auto;
`;

export const Container = styled.div`
  background: ${props => props.theme.palette.primary[100]};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 1rem 2.6rem;
  box-sizing: border-box;
  max-width: 400px;
  margin: auto;
`;

export const Title = styled.h6`
  margin: 0;
  padding-top: 1rem;
  font-size: 26px;
  font-weight: 700;
  font-family: Urbanist;
  text-align: ${props => props.textCenter ? "center" : ""};
  color: ${props => props.primary ? props.theme.palette.primary[100] : "#fff"}
`;

export const Text = styled.p`
  text-align: ${props => props.textCenter ? "center" : ""};
  font-size: ${props => props.fontSize || "18px"};
  font-weight: ${props => props.bold ? "700" : "500"};
  color: #fff;
  line-height: 100%;
`;


const getPrimaryBackground = (variant, theme) => {
  switch (variant) {
    case 'standard':
      return theme.palette.primary[100]
    case 'secondary':
      return theme.palette.secondary[100]
    case 'white':
      return theme.palette.white
    default: return theme.palette.lightGray
  }
}

const getPrimaryColor = (variant, theme) => {
  switch (variant) {
    case 'primary':
      return theme.palette.white

    case 'secondary':
    case 'white':
      return theme.palette.primary[100]
    default: return "#000"
  }
}

const getSecondaryColor = (variant, theme) => {
  switch (variant) {
    case 'primary':
      return theme.palette.primary[100]

    case 'secondary':
      return theme.palette.secondary[100]
    case 'white':
    default:
      return theme.palette.white
  }
}

export const ButtonPrimary = styled.button`
  background: ${props => getPrimaryBackground(props.variant, props.theme)};
  color: ${props => getPrimaryColor(props.variant, props.theme)};
  line-height: 150%;
  font-size: 18px;
  font-weight: bold;  
  border-radius: 4px;
  padding: 10px 0;
  cursor: pointer;
  width: 100%;
  font-family: 'Urbanist';
`;

export const ButtonSecondary = styled.button`
  color: ${props => getSecondaryColor(props.variant, props.theme)};
  padding: 10px 0;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  font-family: 'Urbanist';
`;