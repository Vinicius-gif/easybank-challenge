import { Button } from '@mui/material';

interface PropsButton {
  title: string;
  hideOnLg?: boolean;
}

const ButtonInvite = ({ title, hideOnLg }: PropsButton) => {
  return (
    <Button
      color="success"
      className={`bg-gradient-to-r from-lime-green to-bright-cyan text-white capitalize font-semibold ${hideOnLg ? 'hidden lg:inline-block' : 'inline-block'} px-4 py-2 rounded-3xl`}
    >
      {title}
    </Button>
  );
};

export default ButtonInvite;
