export const resolveUrl = (slide: SlideData): string => {
    return `${slide.featured?.aws_file_url}/${slide.featured?.path}/${slide.featured?.filename.big}`
}

export const resolveUrlHovered = (slide: SlideData): string => {
    return `${slide.featured_hover?.aws_file_url}/${slide.featured_hover?.path}/${slide.featured_hover?.filename.big}`
}