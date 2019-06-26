import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
width: 100%;
height: 900px;
flex: 1;
flex-direction: column;
@media(min-width: 768px) {
    flex-direction: row;
}
`;

const Header = styled.div`
display: flex;
flex: 1;
flex-direction: row
height: 100px;
background-color: black;
`;

const Chart = styled.div`
display: flex;
flex: 1;
flex-direction: row
height: 300px;
background-color: blue;
`;

const History = styled.div`
display: flex;
flex: 2;
flex-direction: row;
height: 500px;
background-color: gray;
`;

const Aside = styled.div`
display: flex;
flex: 2;
flex-direction: column;
height: 400px;
background-color: red;
`;

const Layout = () => 
<Wrapper>
    <Aside>
        <Header>Header</Header>
        <Chart>Chart</Chart>
    </Aside>
    <History>History</History>
</Wrapper>;

export default Layout;