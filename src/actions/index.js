// ----
// Evaluate
export const evaluate = ( content ) => dispatch => {

    let words, sentences, paragraphs, q, s, e, p;

    if ( content.length === 0 ) {
        content = '';
        words = 0;
        sentences = 0;
        paragraphs = 0;
    } else {
        words = content.split(' ').length - 1;

        q = content.split( '?' ).length - 1;
        s = content.split( ';' ).length - 1;
        e = content.split( '!' ).length - 1;
        p = content.split( '.' ).length - 1;
        sentences = q + s + e + p;

        paragraphs = content.replace(/\n$/gm, '').split(/\n/).length;
        
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
            label: 'Puncuation & Symbols',
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
        },
        facebook: {
            label: 'Facebook',
            length: content.length,
            limit: 60000
        },
        twitter: {
            label: 'Twitter',
            length: content.length,
            limit: 280
        },
        linkedin: {
            label: 'LinkedIn',
            length: content.length,
            limit: 600
        },
        google: {
            label: 'Google+',
            length: content.length,
            limit: 300
        },
        instagram: {
            label: 'Instagram',
            length: content.length,
            limit: 2200
        }


    }

    dispatch({ type: 'evaluate', payload: results });
}