import styled from "styled-components";

interface Props {
  direction?: string;
  height?: number;
}

export const Stacks = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props: any) =>
    props.direction === "col" ? "column" : "row"};
  height: ${(props: any) => (props.height ? props.height + "vh" : "")};
`;
