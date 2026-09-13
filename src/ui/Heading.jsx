import { css, styled } from "styled-components";

//const test = css`
//  text-align: center;
//`;
// css function just to get the css properties recommendation
// if we removed css in some situations it won't work
const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    line-height:1.4;
`;

export default Heading;
