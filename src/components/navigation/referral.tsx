import { useEffect, useState } from 'react';
import { Button } from '../button';

interface IProps {
  referral: string;
}

export const Ref: React.FC<IProps> = ({
  referral,
}: IProps) => {
  function copyToClipboard() {
    const tempInput = document.createElement('input');
    tempInput.value = referral;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopySuccess('Copied');
  }

  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    setTimeout(() => setCopySuccess(''), 2000);
  }, [copySuccess]);

  return (
    <>
      <div
        id="copy-icon"
        onClick={() => copyToClipboard()}
        className="cursor-pointer"
      >
        <div className="block items-center">
          <p className="break-words">{referral}</p>
          <Button className="text-base-secondary text-center text-sm light bg-[#000] text-white px-4 py-2 rounded-lg">
            {copySuccess ? (
              <span className="blink">{copySuccess}</span>
            ) : (
              'Copy'
            )}
          </Button>
        </div>
      </div>
    </>
  );
};
