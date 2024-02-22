import React, { useState } from 'react';
import './style.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  loading = false,
  children,
}) => {
  const [isLoading, setLoading] = useState<boolean>(loading);

  const handleClick = () => {
    if (!isLoading && !disabled && onClick) {
      setLoading(true);
      onClick();
    }
  };

  return (
    <button
      className={`button-primary ${disabled || isLoading ? '!cursor-not-allowed opacity-100' : 'cursor-pointer'}`}
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <div className="flex-center space-x-2">
          <span>{children}</span>
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

// button Secondary

export const SecondaryButton: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  loading = false,
  children,
}) => {
  const [isLoading, setLoading] = useState<boolean>(loading);

  const handleClicked = () => {
    if (!isLoading && !disabled && onClick) {
      setLoading(true);
      onClick();
    }
  };

  return (
    <>
      <button
        onClick={handleClicked}
        disabled={disabled || isLoading}
        className={`c-button c-button--gooey ${disabled || isLoading ? '!cursor-not-allowed opacity-100' : 'cursor-pointer'}`}
      >
        {isLoading ? (
          <div className="flex-center space-x-2">
            <span>{children}</span>
            <div className="dot-spinner">
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
            </div>
          </div>
        ) : (
          <span>{children}</span>
        )}
        <div className="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: 'block', height: '0', width: '0' }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  );
};
