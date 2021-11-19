export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6197e7babd79cc00c6876af1',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-w1atyx2v',
                  apiId: '221179c5-0d74-4432-8a92-83594d1f9062'
                },
                {
                  buildHookId: '6197e7baefb319008fb207e2',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-qojp81i7',
                  apiId: 'a252ddff-49a6-4f1b-bd94-507a7a875a22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mightymaru/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-qojp81i7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
