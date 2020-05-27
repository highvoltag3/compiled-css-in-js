/** @jsx jsx */
import { jsx } from '@emotion/core';

const borderRadius = () => 3;
const gridSize = () => 8;

const backgroundColor = 'red';
const textColor = 'blue';
const BORDER_RADIUS = `${borderRadius()}px`;
const HORIZONTAL_SPACING = `${gridSize() / 2}px`;

const Content = (props: any) => {
  return (
    <div
      css={{
        display: 'inline-block',
        verticalAlign: 'top',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        padding: `0 ${HORIZONTAL_SPACING}`,
        maxWidth: typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth,
        width: '100%',
      }}>
      {props.children}
    </div>
  );
};

export const Emotion = () => {
  return (
    <div
      css={{
        backgroundColor,
        borderRadius: BORDER_RADIUS,
        boxSizing: 'border-box',
        color: textColor,
        display: 'inline-block',
        fontSize: '11px',
        fontWeight: 700,
        lineHeight: 1,
        maxWidth: '100%',
        padding: '2px 0 3px 0',
        textTransform: 'uppercase',
        verticalAlign: 'baseline',
      }}>
      <Content>Hello world</Content>
    </div>
  );
};
