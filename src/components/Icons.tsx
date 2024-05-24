import { ArrowDown, ArrowUp, Menu } from 'lucide-react';

const ICons = ({ id }: { id: string }) => {
  switch (id) {
    case 'list':
      return <Menu size={16} />;
    case 'listUp':
      return <ArrowUp size={16} />;
    case 'listDown':
      return <ArrowDown size={16} />;

    default:
      null;
  }
};

export default ICons;
