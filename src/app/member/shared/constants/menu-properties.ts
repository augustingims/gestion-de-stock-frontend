import { Menu } from '../../components/menu/menu';

export const menuProperties: Array<Menu> = [
    {
      id: '1',
      title: 'Tableau de bord',
      icon: 'fas fa-chart-line',
      url: '',
      subMenu: [
        {
          id: '11',
          title: 'vue d\'ensemble',
          icon: 'fas fa-chart-pie',
          url: '',
        },
        {
          id: '12',
          title: 'Statistiques',
          icon: 'fas fa-chart-bar',
          url: 'statistiques',
        }
      ]
    },
    {
      id: '2',
      title: 'Articles',
      icon: 'fas fa-boxes',
      url: '',
      subMenu: [
        {
          id: '21',
          title: 'Articles',
          icon: 'fas fa-boxes',
          url: 'articles',
        },
        {
          id: '22',
          title: 'Mouvement de stock',
          icon: 'fas fa-exchange',
          url: 'mvtstk',
        }
      ]
    },
    {
      id: '3',
      title: 'Clients',
      icon: 'fas fa-users',
      url: '',
      subMenu: [
        {
          id: '31',
          title: 'Clients',
          icon: 'fas fa-users',
          url: 'clients',
        },
        {
          id: '32',
          title: 'Commandes clients',
          icon: 'fas fa-shopping-basket',
          url: 'commandesclient',
        }
      ]
    },
    {
      id: '4',
      title: 'Fournisseurs',
      icon: 'fas fa-users',
      url: '',
      subMenu: [
        {
          id: '41',
          title: 'Fournisseurs',
          icon: 'fas fa-users',
          url: 'fournisseurs',
        },
        {
          id: '42',
          title: 'Commandes fournisseurs',
          icon: 'fas fa-truck',
          url: 'commandesfournisseur',
        }
      ]
    },
    {
      id: '5',
      title: 'Parametrages',
      icon: 'fas fa-cogs',
      url: '',
      subMenu: [
        {
          id: '51',
          title: 'Categories',
          icon: 'fas fa-tools',
          url: 'categories',
        },
        {
          id: '52',
          title: 'Utilisateurs',
          icon: 'fas fa-users-cog',
          url: 'utilisateurs',
        }
      ]
    }
  ];

