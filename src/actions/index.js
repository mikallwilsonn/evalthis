// ----
// Evaluate
export const evaluate = ( content ) => dispatch => {

    let words;
    let sentences;
    let paragraphs;
    if ( content.length === 0 ) {
        content = '';
        words = 0;
        sentences = 0;
        paragraphs = 0;
    } else {
        words = content.split(' ').length - 1;
        sentences = content.split(/\s*(?:;|$)\s*/).length;
        paragraphs = content.split('\n').length;
    }



    const results = {
        characters: {
            label: 'Characters',
            length: content.length,
            limit: null
        },
        letters: {
            label: 'Letters',
            length: content.replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/gi, "").length,
            limit: null
        },
        numbers: {
            label: 'Numbers',
            length: content.replace(/\D/g, "").length,
            limit: null
        },
        puncuation: {
            label: 'Puncuation',
            length: content.replace(/[^.,?!@#$%^&*()"' ]/g, "").length,
            limit: null
        },
        words: {
            label: 'Words',
            length: words,
            limit: null
        },
        sentences: {
            label: 'Sentences',
            length: sentences,
            limit: null
        },
        paragraphs: {
            label: 'Paragraphs',
            length: paragraphs,
            limit: null
        }
    }

    dispatch({ type: 'evaluate', payload: results });
}