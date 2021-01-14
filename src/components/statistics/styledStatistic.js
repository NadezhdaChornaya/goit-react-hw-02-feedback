import styled from 'styled-components';

export const CounterList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
 .counterItems{
     margin-right: 20px;
     margin-bottom:10px;

     font-weight: 700;
     font-size: 20px;
     
 }
 .good{
color: #228B22;
 }
 .neutral{
   color: #696969
 }
 .bad{
   color: #8B0000
 }
 .total,.positive{
    color: #000000
 }
 
 `