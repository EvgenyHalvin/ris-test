import { TIconProps } from './types';

export const IconChevron = ({
  size = 20,
  color = 'rgb(160, 160, 160)',
}: TIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M7.41 8.57999L12 13.17L16.59 8.57999L18 9.99999L12 16L6 9.99999L7.41 8.57999Z"
        fill={color}
      />
    </svg>
  );
};
