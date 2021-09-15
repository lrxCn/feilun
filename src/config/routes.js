import SafeImage from '@/pages/SafeImage';
import SafeSetState from '@/pages/SafeSetState';
import Flooks from '@/pages/Flooks';

export default [
  {
    route: '/safeImage',
    Component: SafeImage,
  },
  {
    route: '/setState',
    title: '安全的setState',
    Component: SafeSetState,
  },
  {
    route: '/flooks',
    title: '数据流',
    Component: Flooks,
  },
];
