import * as React from 'react';

export interface ToggleButtonProps {
  onClick?: (isExpanded: boolean) => any;
  description: string;
  className: string;
}

export function ToggleButton({ children, className, description, onClick } : React.PropsWithChildren<ToggleButtonProps>) {

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    
    button.classList.toggle('opened');

    var pressed = button.classList.contains('opened');

    button.setAttribute('aria-pressed', "" + pressed);
    
    if (onClick) {
      onClick(pressed)
    }
  };

  return (
    <button className={className}
      onClick={buttonHandler}
      aria-label={description}
      aria-pressed={false}
      role={typeof onClick === 'undefined' ? "presentation" : "button"}
      disabled={typeof onClick === 'undefined'}
    >
      {children}
    </button>
  )
}