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
    url: '/base1',
    icon: 'icon-direction',
    children: [
      {
        name: 'Gestion',
        url: '/base1/cards',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Solicitudes',
    url: '/base2',
    icon: 'icon-direction',
    children: [
      {
        name: 'Nuevo',
        url: '/base2/cards',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Contratos',
    url: '/base3',
    icon: 'icon-direction',
    children: [
      {
        name: 'Nuevo',
        url: '/base3/cards',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Gravamen',
    url: '/base4',
    icon: 'icon-direction',
    children: [
      {
        name: 'Nuevo',
        url: '/base4/cards',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Inmoviliario',
    url: '/base5',
    icon: 'icon-direction',
    children: [
      {
        name: 'Nuevo',
        url: '/base5/cards',
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
        url: '/base/tiposolicitud',
        icon: 'icon-list'
      },
      {
        name: 'Requisitos',
        url: '/base/requisitos',
        icon: 'icon-list'
      },
      {
        name: 'Estados Solicitud',
        url: '/base/estado',
        icon: 'icon-list'
      },
      {
        name: 'Situacion Solicitud',
        url: '/base/situacion',
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
    url: '/base7',
    icon: 'icon-direction',
    children: [
      {
        name: 'Gestion Colas',
        url: '/base7/cards',
        icon: 'icon-list'
      },
      {
        name: 'Gestion Oficinas',
        url: '/base7/cards',
        icon: 'icon-list'
      }
    ]
  },
];
