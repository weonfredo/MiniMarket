import React from 'react';
import { SecurityScanOutlined,SnippetsOutlined,HomeOutlined, AppstoreAddOutlined, ShoppingCartOutlined, ShopOutlined } from '@ant-design/icons';

const sidebarItems = [
  {
    key: 'sub1',
    icon: React.createElement(HomeOutlined),
    label: 'Pagina Principal',
    to: '/home'
  },
  {
    key: 'sub2',
    icon: React.createElement(SecurityScanOutlined),
    label: 'Seguridad',
    children: [
      { key: '1', label: 'Usuarios', to: '/usuarios' },
    ]
  },
  {
    key: 'sub3',
    icon: React.createElement(AppstoreAddOutlined),
    label: 'Ventas',
    children: [
      { key: '2', label: 'Caja', to: '/caja' },
    ]
  },
  {
    key: 'sub4',
    icon: React.createElement(ShoppingCartOutlined),
    label: 'Compras',
    children: [
      { key: '3', label: 'Crear Compras', to: '/crearcompras' },
      { key: '4', label: 'Proveedores', to: '/proveedores' },
    ]
  },
  {
    key: 'sub5',
    icon: React.createElement(ShopOutlined),
    label: 'Almacen',
    children: [
      { key: '5', label: 'Productos', to: '/productos' },
    ]
  },
  {
    key: 'sub6',
    icon: React.createElement(SnippetsOutlined),
    label: 'Reportes',
    children: [
      { key: '6', label: 'Pagos', to: '/pagos' },
      { key: '7', label: 'Caja', to: '/caja' },
      { key: '8', label: 'Control estudiantes', to: '/controlestudiantes' }
    ]
  },
];

export default sidebarItems;
