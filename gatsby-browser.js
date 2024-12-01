import { anchorate } from 'anchorate';
import './src/scss/_index.scss';

export const onRouteUpdate = () => {
  anchorate({
    scroller: (element) => {
      if (!element) return false;
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    },
  });
};
