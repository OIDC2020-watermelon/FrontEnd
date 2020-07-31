import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import closeSVG from '../../../assets/images/close.svg';

interface ModalProps {
  setVisible: any;
  visible: boolean;
  render: any;
}

export default function Modal({ visible, setVisible, render }: ModalProps) {
  const toggle = useCallback(() => setVisible(!visible), [visible]);
  const noneEvent = useCallback((e) => e.stopPropagation(), []);

  const escapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      toggle();
    }
  };
  useEffect(() => {
    if (visible) window.addEventListener('keydown', escapeKey);
    else if (!visible) window.removeEventListener('keydown', escapeKey);
    return () => {
      window.removeEventListener('keydown', escapeKey);
    };
  }, [visible]);

  return visible
    ? createPortal(
        <>
          <S.Overlay />
          <S.Container onClick={toggle}>
            <S.Wrap onClick={noneEvent}>{render}</S.Wrap>
          </S.Container>
        </>,
        document.body,
      )
    : null;
}

const S: any = {};

S.Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  opacity: 0.5;
`;

S.Container = styled.div`
  position: fixed;
  z-index: 1050;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

S.Wrap = styled.div`
  z-index: 1060;
  background: #171819;
  color: white;
  position: absolute;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 620px;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

S.Header = styled.div`
  margin-right: 40px;
  display: flex;
  justify-content: flex-end;
  & > div {
    cursor: pointer;
  }
`;
