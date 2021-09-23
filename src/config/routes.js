import SafeImage from '@/pages/SafeImage';
import SafeSetState from '@/pages/SafeSetState';
import Flooks from '@/pages/Flooks';
import DownloadImageBatch from '@/pages/DownloadImageBatch';
import FlipNumbers from '@/pages/FlipNumbers';
import SassDemo from '@/pages/SassDemo';

export default [
  {
    route: '/download',
    title: '批量下载图片',
    Component: DownloadImageBatch,
  },
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
  {
    route: '/flipNumber',
    title: '数字滚动',
    Component: FlipNumbers,
  },
  {
    route: '/sassDemo',
    title: 'sass深度使用',
    Component: SassDemo,
  },
];
