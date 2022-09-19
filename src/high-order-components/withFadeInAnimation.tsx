import { keyframes, styled } from "@mui/material";
import { ComponentType } from "react";

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

function withFadeInAnimation<TProps extends { className?: string }>(
  Component: ComponentType<TProps>,
  {
    initialDelayMs = 0,
    durationMs = 1000,
  }: {
    initialDelayMs?: number;
    durationMs: number;
  }
) {
  return styled(Component)`
    animation: ${fadeAnimation} ${durationMs}ms ease-in-out
      ${initialDelayMs ?? 0}ms forwards;
    opacity: 0;
  `;
}

export default withFadeInAnimation;
