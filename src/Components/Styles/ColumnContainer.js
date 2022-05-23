import  styled  from "styled-components";

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${props => props.padSide ? `0 ${props.padSide}` : 0};
    align-items: ${props => props.align};
`;

export default ColumnContainer;