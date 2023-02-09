import { MutableRefObject, useEffect } from 'react';

export const useOutsideClose = (
  ref: MutableRefObject<any>,
  setter: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | KeyboardEvent) => {
      if (event.type === 'keydown' && (event as KeyboardEvent).key === 'Escape') {
        setter();
      } else if (event.type === 'mousedown' && ref.current && !ref.current.contains(event.target as Node)) {
        setter();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleClickOutside);
    };
  }, [ref]);
};
