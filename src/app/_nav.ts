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
    url: '/dashboard',
    icon: 'icon-direction',
    children: [
      {
        name: 'Lista Solicitudes',
        url: '/dashboard/listarsolicitud',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Solicitudes',
    url: '/dashboard',
    icon: 'icon-direction',
    children: [
      {
        name: 'Nuevo',
        url: '/dashboard/registrarsolicitud',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Contratos',
    url: '/dashboard',
    icon: 'icon-direction',
    children: [
      {
        name: 'Plantilla Contrato',
        url: '/dashboard/plantilla',
        icon: 'icon-list'
      },
      {
        name: 'Nuevo Contrato',
        url: '/dashboard/nuevo',
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
      {
        name: 'Gestiona Colas',
        url: '/base/gestioncola',
        icon: 'icon-list'
      },
    ]
  },
];
