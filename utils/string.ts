export const resolveUrl = (slide: SlideData): string => {
    return `${slide.featured?.aws_file_url}/${slide.featured?.path}/${slide.featured?.filename.big}`
}