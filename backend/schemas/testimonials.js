export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'company_url',
            title: 'Company Url',
            type: 'string'
        },
        {
            name: 'imgurl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        }
    ]
}