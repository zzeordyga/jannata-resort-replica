interface SlideData {
    title: string
    description: string
    link: {
        title: string
        attach: string
        url: string
    },
    featured: {
        id: string
        created_at: string
        updated_at: string
        updatedBy?: string | null,
        title?: string | null,
        description?: string | null,
        size: number,
        type: string
        original: string
        path: string
        is_aws: true,
        aws_file_url: string
        filename: {
            big: string
            raw: string
            blur: string
            medium: string
        }
    },
    id: string
}