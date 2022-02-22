import React, {ReactElement, ReactNode} from "react";
import styled from '@emotion/styled/macro';
import {AiFillWarning} from "react-icons/ai";

const AlertWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: #fed7d7;
    padding: 12px 16px;
    margin: 16px 0;
`;

const AlertIcon = styled.div`
    flex-shrink: 0;
    margin-inline-end: 12px;
    width: 20px;
    height: 24px;
    color: #E53E3E;
    
    svg {
        width: 100%;
        height: 100%;
        display: inline-block;
        line-height: 1em;
        flex-shrink: 0;
        color: currentcolor;
        vertical-align: middle;
    }
`;

const Alert = ({ children }: { children: ReactNode }): ReactElement => (
    <AlertWrapper role="alert" data-testid="alert">
        <AlertIcon><AiFillWarning /></AlertIcon>
        { children }
    </AlertWrapper>
)

export default Alert;
