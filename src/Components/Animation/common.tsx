import { keyframes } from "styled-components";
import { colors } from "Shared";

export const fadeEffect = keyframes`
    to {
    opacity: 0;
    }
`;

export const waveEffectPrimary = keyframes`
    to {
    box-shadow: 0 0 0 ${colors.primary1};
    box-shadow: 0 0 0 6px ${colors.primary1};
    }
`;

export const waveEffectDark = keyframes`
    to {
    box-shadow: 0 0 0 ${colors.dark1};
    box-shadow: 0 0 0 6px ${colors.dark1};
    }
`;
