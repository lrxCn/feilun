import SafeImage from '@/pages/SafeImage';
import SafeSetState from '@/pages/SafeSetState';

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
];
