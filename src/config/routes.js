import SafeImage from '@/pages/SafeImage';
import SafeSetState from '@/pages/SafeSetState';
import Flooks from '@/pages/Flooks';
import DownloadImageBatch from '@/pages/DownloadImageBatch';

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
];
