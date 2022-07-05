export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'level',
            name: 'level',
            type: 'string',
            options: {
                list: ["Advansed", "Basic"],
            }
        }
    ]
}