import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Operaciones'
  },
  {
    name: 'Gestion Atencion',
    url: '/base',
    icon: 'icon-direction',
    children: [
      {
        name: 'Gestion',
        url: '/base/cards',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Solicitudes',
    url: '/base',
    icon: 'icon-direction',
    children: [
      {
        name: 'Nuevo',
        url: '/base/cards',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Contratos',
    url: '/base',
    icon: 'icon-direction',
    children: [
      {
        name: 'Nuevo',
        url: '/base/cards',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Gravamen',
    url: '/base',
    icon: 'icon-direction',
    children: [
      {
        name: 'Nuevo',
        url: '/base/cards',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Inmoviliario',
    url: '/base',
    icon: 'icon-direction',
    children: [
      {
        name: 'Nuevo',
        url: '/base/cards',
        icon: 'icon-list'
      }
    ]
  },
  {
    title: true,
    name: 'Mantenimiento'
  },
  {
    name: 'Configuraciones',
    url: '/base',
    icon: 'icon-direction',
    children: [
      {
        name: 'Tipos de Solicitud',
        url: '/base/cards',
        icon: 'icon-list'
      },
      {
        name: 'Requisitos',
        url: '/base/cards',
        icon: 'icon-list'
      },
      {
        name: 'Estados Solicitud',
        url: '/base/cards',
        icon: 'icon-list'
      },
      {
        name: 'Situacion Solicitud',
        url: '/base/cards',
        icon: 'icon-list'
      },
      {
        name: 'Procesos',
        url: '/base/cards',
        icon: 'icon-list'
      },
    ]
  },
  {
    name: 'Gestion Personal',
    url: '/base',
    icon: 'icon-direction',
    children: [
      {
        name: 'Gestion Colas',
        url: '/base/cards',
        icon: 'icon-list'
      },
      {
        name: 'Gestion Oficinas',
        url: '/base/cards',
        icon: 'icon-list'
      }
    ]
  },
];
