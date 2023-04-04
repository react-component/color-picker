import { useEffect, useState } from 'react';

const useDisabled = (disabled: boolean, open: boolean) => {
  const [openValue, setOpenValue] = useState(!!disabled ? false : open);
  useEffect(() => {
    if (!!disabled) {
      setOpenValue(false);
    } else {
      setOpenValue(open);
    }
  }, [disabled, open]);
  return [openValue];
};

export default useDisabled;
