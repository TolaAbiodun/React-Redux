import React, { forwardRef, useImperativeHandle, useState } from 'react';

// button uses imperative handle hook
const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);
    useImperativeHandle(ref, () => ({
      alterToggle() {
        setToggle(!toggle);
      },
    }));

  return <div>
      <button>Button from Child</button>
      {toggle && <p>Button is toggled</p>}
  </div>;
});

export default Button;
