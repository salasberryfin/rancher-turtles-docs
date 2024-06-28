/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/rancher',
        {
          type: 'category',
          label: 'Install Rancher Turtles',
          link: {
            type: 'generated-index'
          },
          collapsed: false,
          items: [
            'getting-started/install-rancher-turtles/using_rancher_dashboard',
            'getting-started/install-rancher-turtles/using_helm',
          ]
        },
        {
          type: 'category',
          label: 'Your first cluster',
          link: {
            type: 'generated-index'
          },
          collapsed: false,
          items: [
            'getting-started/create-first-cluster/intro',
            'getting-started/create-first-cluster/using_fleet',
            'getting-started/create-first-cluster/using_kubectl',
          ]
        },
        {
          type: 'category',
          label: 'Using ClusterClass',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'getting-started/cluster-class',
            },
          ]
        },
        'getting-started/air-gapped-environment',
        'getting-started/uninstall_turtles',
      ],
    },
    {
      type: 'category',
      label: 'Reference Guides',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Architecture',
          collapsed: true,
          items: [
            'reference-guides/architecture/intro',
            'reference-guides/architecture/components',
            'reference-guides/architecture/deployment',
          ]
        },
        'reference-guides/rancher-turtles-chart/values',
        {
          type: 'category',
          label: 'CAPI Providers',
          collapsed: true,
          items: [
            'reference-guides/providers/supported',
            'reference-guides/providers/howto',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Tasks',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'tasks/intro',
        {
          type: 'category',
          label: 'Cluster API Operator',
          collapsed: true,
          items: [
            'tasks/capi-operator/basic_cluster_api_provider_installation',
            'tasks/capi-operator/installing_core_provider',
            'tasks/capi-operator/capiprovider_resource',
            'tasks/capi-operator/add_infrastructure_provider',
          ]
        },
        {
          type: 'category',
          label: 'Maintenance',
          collapsed: true,
          items: [
            'tasks/maintenance/early_adopter_upgrade',
            'tasks/maintenance/import_controller_upgrade',
            'tasks/maintenance/automigrate_to_v3_import'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Contributing',
      collapsed: true,
      items: [
        'contributing/intro',
        'contributing/guidelines',
        'contributing/install_capi_operator',
        'contributing/development',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      collapsed: true,
      items: [
        'security/slsa',
      ],
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
