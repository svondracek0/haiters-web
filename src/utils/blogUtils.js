export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('cs-CZ', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    // Strip HTML tags to get word count
    const text = content.replace(/<[^>]*>?/gm, '');
    const noOfWords = text.split(/\s/g).length;
    const minutes = Math.ceil(noOfWords / wordsPerMinute);
    return `${minutes} min čtení`;
};
